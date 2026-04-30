package core

import (
	"fmt"
	"log"
	"net/http"
	"strings"
	"sync"
	"time"

	"github.com/zapi/zapi-go/internal/config"
	"github.com/zapi/zapi-go/internal/model"
	"github.com/zapi/zapi-go/internal/core/routing"
)

var (
	heartbeatNotified   = make(map[uint]bool) // channelID -> already notified
	heartbeatFaultStart = make(map[uint]time.Time) // channelID -> fault start time
	heartbeatMu         sync.Mutex
)

func heartbeatTimeout() time.Duration {
	t := config.Cfg.Heartbeat.Timeout
	if t <= 0 { t = 10 }
	return time.Duration(t) * time.Second
}

func StartHeartbeat() {
	if !config.Cfg.Heartbeat.Enabled { return }
	go func() {
		for {
			select {
			case <-time.After(time.Duration(config.Cfg.Heartbeat.Interval) * time.Second):
				checkAllChannels()
			case <-StopChan:
				return
			}
		}
	}()
	log.Println("[HEARTBEAT] Started")
}

func checkAllChannels() {
	var channels []model.Channel
	model.DB.Find(&channels)

	// Get all admin+operator user IDs for notifications
	var adminIDs []uint
	model.DB.Model(&model.User{}).Where("role IN ?", []string{"admin", "operator"}).Pluck("id", &adminIDs)

	for i := range channels {
		ch := &channels[i]
		testModel := ""
		if ch.Models != "" { parts := strings.Split(ch.Models, ","); if len(parts) > 0 { testModel = strings.TrimSpace(parts[0]) } }
		if testModel == "" { continue }
		info := routing.Pool.Get(ch.ID)
		modelToUse := testModel
		if info != nil { modelToUse = routing.Engine.ResolveModel(info, testModel) }
		base := strings.TrimRight(ch.BaseURL, "/")
		testURL := base + "/v1/chat/completions"
		if strings.HasSuffix(base, "/v1") { testURL = base[:len(base)-3] + "/v1/chat/completions" }
		body := fmt.Sprintf(`{"model":"%s","messages":[{"role":"user","content":"Hi"}],"max_tokens":5}`, modelToUse)
		client := &http.Client{Timeout: heartbeatTimeout()}
		req, _ := http.NewRequest("POST", testURL, strings.NewReader(body))
		req.Header.Set("Authorization", "Bearer "+ch.APIKey); req.Header.Set("Content-Type", "application/json")
		start := time.Now(); resp, err := client.Do(req); latency := int(time.Since(start).Milliseconds())
		now := time.Now().UTC(); ch.TestTime = &now

		if err != nil {
			// Connection failed
			ch.FailCount++; ch.ResponseTime = 0
			if config.Cfg.Heartbeat.AutoDisable && ch.AutoBan && ch.FailCount >= 5 { ch.Enabled = false }
			model.DB.Save(ch); routing.Pool.UpdateChannel(ch)
			handleChannelFault(ch, adminIDs)
			continue
		}
		resp.Body.Close(); ch.ResponseTime = latency

		if resp.StatusCode == 200 {
			// Success
			wasDisabled := ch.FailCount > 0 || !ch.Enabled
			ch.FailCount = 0
			// Auto-re-enable if channel was disabled by auto-ban
			if !ch.Enabled && wasDisabled { ch.Enabled = true }
			model.DB.Save(ch); routing.Pool.UpdateChannel(ch)
			handleChannelRecovery(ch, latency, adminIDs)
		} else {
			// Non-200 response
			ch.FailCount++
			if config.Cfg.Heartbeat.AutoDisable && ch.AutoBan && ch.FailCount >= 5 { ch.Enabled = false }
			model.DB.Save(ch); routing.Pool.UpdateChannel(ch)
			handleChannelFault(ch, adminIDs)
		}
	}
}

func handleChannelFault(ch *model.Channel, adminIDs []uint) {
	heartbeatMu.Lock()
	defer heartbeatMu.Unlock()

	// Notify when: enabled and failCount >= 2, or already disabled and not yet notified
	shouldAlert := (ch.Enabled && ch.FailCount >= 2) || (!ch.Enabled && !heartbeatNotified[ch.ID])
	if shouldAlert && !heartbeatNotified[ch.ID] {
		status := "\u8fd0\u884c\u4e2d"
		if !ch.Enabled { status = "\u5df2\u7981\u7528" }
		title := fmt.Sprintf("\u6e20\u9053\u6545\u969c: %s", ch.Name)
		content := fmt.Sprintf("\u6e20\u9053 [%s] (ID:%d) \u5065\u5eb7\u68c0\u6d4b\u5931\u8d25\uff0c\u5f53\u524d\u72b6\u6001: %s\uff0c\u5931\u8d25\u6b21\u6570: %d\uff0c\u5730\u5740: %s", ch.Name, ch.ID, status, ch.FailCount, ch.BaseURL)
		sendHeartbeatNotifications(adminIDs, "fault", title, content)
		heartbeatNotified[ch.ID] = true
		heartbeatFaultStart[ch.ID] = time.Now()
		ErrLog.Error(fmt.Sprintf("心跳故障: 渠道[%s] ID:%d 失败次数:%d", ch.Name, ch.ID, ch.FailCount))
	}
}

func handleChannelRecovery(ch *model.Channel, latency int, adminIDs []uint) {
	heartbeatMu.Lock()
	defer heartbeatMu.Unlock()

	if heartbeatNotified[ch.ID] {
		duration := ""
		if startTime, ok := heartbeatFaultStart[ch.ID]; ok {
			delta := time.Since(startTime)
			mins := int(delta.Minutes())
			if mins >= 60 {
				duration = fmt.Sprintf("\uff0c\u65ad\u7ebf\u65f6\u957f\u7ea6 %d\u5c0f\u65f6%d\u5206\u949f", mins/60, mins%60)
			} else {
				duration = fmt.Sprintf("\uff0c\u65ad\u7ebf\u65f6\u957f\u7ea6 %d\u5206\u949f", mins)
			}
		}
		title := fmt.Sprintf("\u6e20\u9053\u6062\u590d: %s", ch.Name)
		content := fmt.Sprintf("\u6e20\u9053 [%s] (ID:%d) \u5df2\u6062\u590d\u6b63\u5e38\uff0c\u5f53\u524d\u5ef6\u8fdf: %dms%s\uff0c\u5730\u5740: %s", ch.Name, ch.ID, latency, duration, ch.BaseURL)
		sendHeartbeatNotifications(adminIDs, "recovery", title, content)
		delete(heartbeatNotified, ch.ID)
		delete(heartbeatFaultStart, ch.ID); ErrLog.Error(fmt.Sprintf("心跳恢复: 渠道[%s] ID:%d", ch.Name, ch.ID))
	}
}

func sendHeartbeatNotifications(adminIDs []uint, category, title, content string) {
	for _, uid := range adminIDs {
		notif := model.Notification{
			SenderID:   0, // System notification
			ReceiverID: &uid,
			Category:   category,
			Title:      title,
			Content:    content,
		}
		model.DB.Create(&notif)
	}
}
