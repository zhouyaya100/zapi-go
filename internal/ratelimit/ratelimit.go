package ratelimit

import (
	"fmt"
	"sync"
	"time"

	"github.com/zapi/zapi-go/internal/config"
)

type bucket struct {
	count   int
	tokens  int64 // for TPM tracking
	resetAt time.Time
}

type shard struct {
	mu      sync.Mutex
	entries map[string]*bucket
}

type RateLimiter struct {
	shards [64]shard
}

var Limiter *RateLimiter

func Init() {
	if !config.Cfg.RateLimit.Enabled {
		return
	}
	Limiter = &RateLimiter{}
	for i := range Limiter.shards {
		Limiter.shards[i].entries = make(map[string]*bucket)
	}
	go func() {
		for {
			time.Sleep(time.Minute)
			now := time.Now()
			for i := range Limiter.shards {
				s := &Limiter.shards[i]
				s.mu.Lock()
				for k, v := range s.entries {
					if now.After(v.resetAt) {
						delete(s.entries, k)
					}
				}
				s.mu.Unlock()
			}
		}
	}()
}

func fnv32(key string) uint32 {
	h := uint32(2166136261)
	for i := 0; i < len(key); i++ {
		h ^= uint32(key[i])
		h *= 16777619
	}
	return h
}

func (r *RateLimiter) getShard(key string) *shard {
	return &r.shards[fnv32(key)%64]
}

// UserRateInfo carries per-user rate limit settings
type UserRateInfo struct {
	UserID uint
	RPM    int   // 0 = use global
	TPM    int64 // 0 = use global
}

// Check enforces RPM limit + TPM pre-check (accumulated tokens so far).
// Call AccountTokens after the request completes to record actual usage.
func (r *RateLimiter) Check(apiKey, clientIP string, userRate *UserRateInfo, promptTokens int64) string {
	if r == nil {
		return ""
	}
	now := time.Now()
	globalRPM := config.Cfg.RateLimit.RPM
	globalIPRPM := config.Cfg.RateLimit.IPRPM

	// Determine effective RPM for this user
	// 0 = no quota (blocked), -1 = unlimited, >0 = actual limit
	effectiveRPM := globalRPM // default to system config
	if userRate != nil {
		if userRate.RPM == 0 {
			// No RPM quota - block immediately
			return "\u8bf7\u6c42\u9891\u7387\u9650\u5236\u4e3a0\uff0c\u65e0\u6cd5\u4f7f\u7528"
		} else if userRate.RPM == -1 {
			effectiveRPM = 0 // unlimited
		} else if userRate.RPM > 0 {
			effectiveRPM = userRate.RPM
		}
	}

	// Check API key RPM
	if apiKey != "" && effectiveRPM > 0 {
		s := r.getShard(apiKey)
		s.mu.Lock()
		b, ok := s.entries[apiKey]
		if !ok || now.After(b.resetAt) {
			s.entries[apiKey] = &bucket{count: 1, tokens: 0, resetAt: now.Add(time.Minute)}
		} else {
			b.count++
			if b.count > effectiveRPM {
				s.mu.Unlock()
				return fmt.Sprintf("\u8bf7\u6c42\u9891\u7387\u8d85\u9650\uff08\u6bcf\u5206\u949f%d\u6b21\uff09\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", effectiveRPM)
			}
		}
		s.mu.Unlock()
	}

	// Check IP RPM
	if clientIP != "" && globalIPRPM > 0 {
		ipKey := "ip:" + clientIP
		s := r.getShard(ipKey)
		s.mu.Lock()
		b, ok := s.entries[ipKey]
		if !ok || now.After(b.resetAt) {
			s.entries[ipKey] = &bucket{count: 1, tokens: 0, resetAt: now.Add(time.Minute)}
		} else {
			b.count++
			if b.count > globalIPRPM {
				s.mu.Unlock()
				return "IP \u8bf7\u6c42\u9891\u7387\u8d85\u9650\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"
			}
		}
		s.mu.Unlock()
	}

	// TPM pre-check: 0 = no quota (blocked), -1 = unlimited, >0 = actual limit
	if userRate != nil {
		if userRate.TPM == 0 {
			// No TPM quota - block
			return "Token用量额度为0，无法使用"
		} else if userRate.TPM > 0 {
		userKey := fmt.Sprintf("tpm:%d", userRate.UserID)
		s := r.getShard(userKey)
		s.mu.Lock()
		b, ok := s.entries[userKey]
		if !ok || now.After(b.resetAt) {
			// New window, pre-charge prompt tokens
			s.entries[userKey] = &bucket{count: 0, tokens: promptTokens, resetAt: now.Add(time.Minute)}
			if promptTokens > userRate.TPM {
				s.mu.Unlock()
				return fmt.Sprintf("Token\u7528\u91cf\u8d85\u9650\uff08\u6bcf\u5206\u949f%d tokens\uff09\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", userRate.TPM)
			}
		} else {
			if b.tokens+promptTokens > userRate.TPM {
				s.mu.Unlock()
				return fmt.Sprintf("Token\u7528\u91cf\u8d85\u9650\uff08\u6bcf\u5206\u949f%d tokens\uff09\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", userRate.TPM)
			}
			b.tokens += promptTokens
		}
		s.mu.Unlock()
		}
	}

	return ""
}

// AccountTokens records actual token usage after a request completes.
// This adds completion tokens (not known at pre-check time) to the TPM bucket.
func (r *RateLimiter) AccountTokens(userID uint, completionTokens int64) {
	if r == nil || completionTokens <= 0 {
		return
	}
	now := time.Now()
	userKey := fmt.Sprintf("tpm:%d", userID)
	s := r.getShard(userKey)
	s.mu.Lock()
	b, ok := s.entries[userKey]
	if !ok || now.After(b.resetAt) {
		s.entries[userKey] = &bucket{count: 0, tokens: completionTokens, resetAt: now.Add(time.Minute)}
	} else {
		b.tokens += completionTokens
	}
	s.mu.Unlock()
}
