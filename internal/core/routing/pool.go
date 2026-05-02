package routing

import (
	"encoding/json"
	"math/rand"
	"sort"
	"strings"
	"sync"
	"sync/atomic"

	"github.com/zapi/zapi-go/internal/model"
)

// ChannelInfo - lightweight channel for routing
type ChannelInfo struct {
	ID              uint
	Name            string
	Type            string
	BaseURL         string
	APIKey          string
	Models          []string
	ModelMapping    map[string]string
	AllowedGroups   map[string]bool
	Weight          int
	Priority        int
	AutoBan         bool
	FailCount       atomic.Int32
	Enabled         bool
	UpstreamGroupIDs []uint // IDs of upstream groups this channel belongs to
}

// ChannelPool - inverted index for O(1) channel lookup
type ChannelPool struct {
	mu             sync.RWMutex
	channels       map[uint]*ChannelInfo               // id -> info
	index          map[string]map[int][]uint            // model -> priority -> []channelID
	sortedKeys     map[string][]int                     // model -> sorted priority keys (desc)
	groupChannels  map[string]map[uint]bool             // group -> set(channelID)
	modelChannels  map[string]map[uint]bool             // model -> set(channelID)
	reverseMapping map[string]string                    // mappedModel -> originalModel
	version        int
}

var Pool = &ChannelPool{
	channels:       make(map[uint]*ChannelInfo),
	index:          make(map[string]map[int][]uint),
	sortedKeys:     make(map[string][]int),
	groupChannels:  make(map[string]map[uint]bool),
	modelChannels:  make(map[string]map[uint]bool),
	reverseMapping: make(map[string]string),
}

func (p *ChannelPool) Rebuild(channels []model.Channel) {
	p.mu.Lock()
	defer p.mu.Unlock()
	p.channels = make(map[uint]*ChannelInfo)
	p.index = make(map[string]map[int][]uint)
	p.sortedKeys = make(map[string][]int)
	p.groupChannels = make(map[string]map[uint]bool)
	p.modelChannels = make(map[string]map[uint]bool)
	p.reverseMapping = make(map[string]string)
	for i := range channels {
		ch := &channels[i]
		if !ch.Enabled { continue }
		info := ormToInfo(ch)
		p.channels[info.ID] = info
		p.addToIndex(info)
	}
	p.version++
}

func (p *ChannelPool) UpdateChannel(ch *model.Channel) {
	p.mu.Lock()
	defer p.mu.Unlock()
	info := ormToInfo(ch)
	if old, ok := p.channels[ch.ID]; ok { p.removeFromIndex(old) }
	if ch.Enabled {
		p.channels[ch.ID] = info
		p.addToIndex(info)
	} else {
		delete(p.channels, ch.ID)
	}
	p.version++
}

func (p *ChannelPool) RemoveChannel(id uint) {
	p.mu.Lock()
	defer p.mu.Unlock()
	if old, ok := p.channels[id]; ok {
		p.removeFromIndex(old)
		delete(p.channels, id)
		p.version++
	}
}

func (p *ChannelPool) UpdateFailCount(id uint, failCount int, enabled bool) {
	p.mu.Lock()
	defer p.mu.Unlock()
	ch, ok := p.channels[id]
	if !ok { return }
	ch.FailCount.Store(int32(failCount))
	if !enabled {
		ch.Enabled = false
		p.removeFromIndex(ch)
	} else {
		ch.Enabled = true
	}
}

// IncrementFailCount atomically increments fail count and returns the new value
func (p *ChannelPool) IncrementFailCount(id uint) int {
	p.mu.Lock()
	defer p.mu.Unlock()
	ch, ok := p.channels[id]
	if !ok { return 0 }
	newVal := ch.FailCount.Add(1)
	return int(newVal)
}

// rebuildSortedKeys rebuilds the pre-sorted priority keys for a model (must hold write lock)
func (p *ChannelPool) rebuildSortedKeys(model string) {
	priMap, ok := p.index[model]
	if !ok { delete(p.sortedKeys, model); return }
	keys := make([]int, 0, len(priMap))
	for k := range priMap { keys = append(keys, k) }
	sort.Sort(sort.Reverse(sort.IntSlice(keys)))
	p.sortedKeys[model] = keys
}

// Select - O(1) channel selection using inverted index with pre-sorted priorities
// Now supports upstream groups: if model matches an upstream group alias, use group balancer
func (p *ChannelPool) Select(modelName string, group *string, excludeIDs map[uint]bool, skipGroup ...bool) *ChannelInfo {
	// Step 1: Check upstream groups first
	ug := ResolveUpstream(modelName, group)
	if ug != nil {
		sel := p.SelectFromUpstreamGroup(ug, excludeIDs, skipGroup...)
		if sel != nil {
			return sel
		}
		// Upstream group matched but all channels unavailable (circuit-broken/disabled),
		// fallback to normal pool selection
	}

	// Step 2: Normal channel selection
	return p.selectFromPool(modelName, group, excludeIDs, skipGroup...)
}

// selectFromUpstreamGroup — select from an upstream group using its balancer strategy
func (p *ChannelPool) SelectFromUpstreamGroup(ug *UpstreamGroupInfo, excludeIDs map[uint]bool, skipGroup ...bool) *ChannelInfo {
	p.mu.RLock()
	defer p.mu.RUnlock()

	// Collect candidate channels from this group (all treated equally)
	var candidates []*ChannelInfo

	for _, cid := range ug.ChannelIDs {
		ch, ok := p.channels[cid]
		if !ok || !ch.Enabled {
			continue
		}
		// Check circuit breaker health
		if !Health.IsAvailable(cid, ug.MaxFails, ug.FailTimeout) {
			continue
		}
		candidates = append(candidates, ch)
	}

	if len(candidates) == 0 {
		return nil
	}

	selected := LB.SelectFromGroup(ug, candidates, excludeIDs)
	if selected != nil {
		LB.IncrRequest(selected.ID)
	}
	return selected
}

// selectFromPool — original Select logic
// Note: we do NOT exclude upstream-group-managed channels here because:
// if the model name matched an upstream group alias, Select() would have routed
// through selectFromUpstreamGroup instead. Reaching here means the model name
// does NOT match any alias, so channels should be available via normal routing.
func (p *ChannelPool) selectFromPool(modelName string, group *string, excludeIDs map[uint]bool, skipGroup ...bool) *ChannelInfo {
	priorities, ok := p.index[modelName]
	if !ok { return nil }
	priKeys := p.sortedKeys[modelName]

	for _, pri := range priKeys {
		var candidates []*ChannelInfo
		for _, cid := range priorities[pri] {
			ch, ok := p.channels[cid]
			if !ok || !ch.Enabled { continue }
			if excludeIDs != nil && excludeIDs[cid] { continue }
			if !(len(skipGroup) > 0 && skipGroup[0]) {
				if group != nil {
					gname := *group
					if len(ch.AllowedGroups) > 0 && !ch.AllowedGroups[gname] { continue }
				} else {
					if len(ch.AllowedGroups) > 0 { continue }
				}
			}
			candidates = append(candidates, ch)
		}
		if len(candidates) > 0 {
			weights := make([]int, len(candidates))
			for i, c := range candidates { weights[i] = c.Weight; if weights[i] < 1 { weights[i] = 1 } }
			total := 0; for _, w := range weights { total += w }
			r := rand.Intn(total); cum := 0
			selected := candidates[0]
			for i, w := range weights { cum += w; if r < cum { selected = candidates[i]; break } }
			LB.IncrRequest(selected.ID)
			return selected
		}
	}
	return nil
}

func (p *ChannelPool) GetModelsForGroup(group *string) []string {
	p.mu.RLock()
	defer p.mu.RUnlock()
	seen := make(map[string]bool); var result []string
	// Models from channels
	for modelName, channelIDs := range p.modelChannels {
		for cid := range channelIDs {
			ch, ok := p.channels[cid]
			if !ok || !ch.Enabled { continue }
			if group != nil {
				gname := *group
				if len(ch.AllowedGroups) > 0 && !ch.AllowedGroups[gname] { continue }
			} else {
				if len(ch.AllowedGroups) > 0 { continue }
			}
			if !seen[modelName] { seen[modelName] = true; result = append(result, modelName) }
			break
		}
	}
	// Models from upstream groups (alias = exposed model name)
	Upstreams.mu.RLock()
	for _, ug := range Upstreams.alias {
		if !ug.Enabled { continue }
		if group != nil {
			gname := *group
			if len(ug.AllowedGroups) > 0 && !ug.AllowedGroups[gname] { continue }
		} else {
			if len(ug.AllowedGroups) > 0 { continue }
		}
		if ug.Alias != "" && !seen[ug.Alias] {
			seen[ug.Alias] = true
			result = append(result, ug.Alias)
		}
	}
	Upstreams.mu.RUnlock()
	sort.Strings(result)
	return result
}

func (p *ChannelPool) GetAllEnabledModels() []string {
	p.mu.RLock()
	defer p.mu.RUnlock()
	seen := make(map[string]bool); var result []string
	for modelName, channelIDs := range p.modelChannels {
		for cid := range channelIDs {
			ch, ok := p.channels[cid]
			if !ok || !ch.Enabled { continue }
			if !seen[modelName] { seen[modelName] = true; result = append(result, modelName) }
			break
		}
	}
	// Also include upstream group aliases
	Upstreams.mu.RLock()
	for _, ug := range Upstreams.alias {
		if !ug.Enabled { continue }
		if ug.Alias != "" && !seen[ug.Alias] {
			seen[ug.Alias] = true
			result = append(result, ug.Alias)
		}
	}
	Upstreams.mu.RUnlock()
	sort.Strings(result)
	return result
}

func (p *ChannelPool) ReverseMap(externalModel string) string {
	p.mu.RLock()
	defer p.mu.RUnlock()
	return p.reverseMapping[externalModel]
}

func (p *ChannelPool) Get(id uint) *ChannelInfo {
	p.mu.RLock()
	defer p.mu.RUnlock()
	return p.channels[id]
}

func (p *ChannelPool) addToIndex(info *ChannelInfo) {
	for _, m := range info.Models {
		if p.index[m] == nil { p.index[m] = make(map[int][]uint) }
		p.index[m][info.Priority] = append(p.index[m][info.Priority], info.ID)
		// Rebuild sorted keys for this model
		p.rebuildSortedKeys(m)
		if p.modelChannels[m] == nil { p.modelChannels[m] = make(map[uint]bool) }
		p.modelChannels[m][info.ID] = true
		for src, dst := range info.ModelMapping {
			if dst != src { p.reverseMapping[dst] = src }
		}
	}
	if len(info.AllowedGroups) > 0 {
		for g := range info.AllowedGroups {
			if p.groupChannels[g] == nil { p.groupChannels[g] = make(map[uint]bool) }
			p.groupChannels[g][info.ID] = true
		}
	} else {
		if p.groupChannels["*"] == nil { p.groupChannels["*"] = make(map[uint]bool) }
		p.groupChannels["*"][info.ID] = true
	}
}

func (p *ChannelPool) removeFromIndex(info *ChannelInfo) {
	for _, m := range info.Models {
		if priMap, ok := p.index[m]; ok {
			for pri, ids := range priMap {
				for i, id := range ids {
					if id == info.ID { p.index[m][pri] = append(ids[:i], ids[i+1:]...); break }
				}
				if len(p.index[m][pri]) == 0 { delete(p.index[m], pri) }
			}
			if len(p.index[m]) == 0 { delete(p.index, m) } else { p.rebuildSortedKeys(m) }
		}
		if p.modelChannels[m] != nil {
			delete(p.modelChannels[m], info.ID)
			if len(p.modelChannels[m]) == 0 { delete(p.modelChannels, m) }
		}
	}
	for src, dst := range info.ModelMapping {
		if dst != src && p.reverseMapping[dst] == src { delete(p.reverseMapping, dst) }
	}
	for g := range p.groupChannels {
		delete(p.groupChannels[g], info.ID)
		if len(p.groupChannels[g]) == 0 { delete(p.groupChannels, g) }
	}
}

func ormToInfo(ch *model.Channel) *ChannelInfo {
	models := splitComma(ch.Models)
	mapping := make(map[string]string)
	if ch.ModelMapping != "" { json.Unmarshal([]byte(ch.ModelMapping), &mapping) }
	groups := make(map[string]bool)
	if ch.AllowedGroups != "" { for _, g := range splitComma(ch.AllowedGroups) { groups[g] = true } }

	// Load upstream group IDs from join table
	var ugLinks []model.UpstreamGroupChannel
	model.DB.Where("channel_id = ?", ch.ID).Find(&ugLinks)
	ugIDs := make([]uint, 0, len(ugLinks))
	for _, link := range ugLinks {
		ugIDs = append(ugIDs, link.UpstreamGroupID)
	}

	return &ChannelInfo{
		ID: ch.ID, Name: ch.Name, Type: ch.Type, BaseURL: ch.BaseURL, APIKey: ch.APIKey,
		Models: models, ModelMapping: mapping, AllowedGroups: groups,
		Weight: ch.Weight, Priority: ch.Priority, AutoBan: ch.AutoBan,
		FailCount: func() atomic.Int32 { var a atomic.Int32; a.Store(int32(ch.FailCount)); return a }(), Enabled: ch.Enabled,
		UpstreamGroupIDs: ugIDs,
	}
}

func splitComma(s string) []string {
	if s == "" { return nil }
	var result []string
	for _, v := range strings.Split(s, ",") {
		v = strings.TrimSpace(v)
		if v != "" { result = append(result, v) }
	}
	return result
}
