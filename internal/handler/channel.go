package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/zapi/zapi-go/internal/config"
	"github.com/zapi/zapi-go/internal/core"
	"github.com/zapi/zapi-go/internal/core/routing"
	"github.com/zapi/zapi-go/internal/model"
)

func HandleListChannels(c *gin.Context) {
	limit, offset := parsePagination(c)

	var total int64
	model.DB.Model(&model.Channel{}).Count(&total)

	var channels []model.Channel
	qry := model.DB.Order("id")
	if limit > 0 {
		qry = qry.Offset(offset).Limit(limit)
	}
	qry.Find(&channels)

	result := make([]gin.H, len(channels))
	for i, ch := range channels {
		result[i] = gin.H{
			"id": ch.ID, "name": ch.Name, "type": ch.Type,
			"base_url": ch.BaseURL, "api_key": core.MaskKey(ch.APIKey),
			"api_key_length": len(ch.APIKey), "models": ch.Models,
			"model_mapping": ch.ModelMapping, "allowed_groups": ch.AllowedGroups,
			"weight": ch.Weight, "priority": ch.Priority, "enabled": ch.Enabled,
			"auto_ban": ch.AutoBan, "fail_count": ch.FailCount,
			"test_time": core.FmtTimePtr(ch.TestTime), "response_time": ch.ResponseTime,
			"created_at": core.FmtTimeVal(ch.CreatedAt),
		}
	}
	if limit > 0 {
		c.JSON(200, gin.H{"items": result, "total": total})
	} else {
		c.JSON(200, result)
	}
}

func HandleCreateChannel(c *gin.Context) {
	var ch model.Channel
	if err := c.ShouldBindJSON(&ch); err != nil {
		c.JSON(400, gin.H{"error": gin.H{"message": "\u8bf7\u6c42\u53c2\u6570\u9519\u8bef"}})
		return
	}
	if ch.Type == "" {
		ch.Type = "openai"
	}
	ch.ModelMapping = core.NormalizeModelMapping(ch.ModelMapping)
	model.DB.Create(&ch)
	routing.Pool.UpdateChannel(&ch)
	c.JSON(200, gin.H{"success": true, "id": ch.ID})
}

func HandleUpdateChannel(c *gin.Context) {
	id := c.Param("id")
	var ch model.Channel
	if model.DB.First(&ch, id).Error != nil {
		c.JSON(404, gin.H{"error": gin.H{"message": "\u6e20\u9053\u4e0d\u5b58\u5728"}})
		return
	}
	var req map[string]interface{}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": gin.H{"message": "\u8bf7\u6c42\u53c2\u6570\u9519\u8bef"}})
		return
	}
	if v, ok := req["name"].(string); ok {
		ch.Name = v
	}
	if v, ok := req["base_url"].(string); ok {
		ch.BaseURL = v
	}
	if v, ok := req["api_key"].(string); ok && !strings.HasPrefix(v, "***") {
		ch.APIKey = v
	}
	if v, ok := req["models"].(string); ok {
		ch.Models = v
	}
	if v, ok := req["model_mapping"].(string); ok {
		ch.ModelMapping = core.NormalizeModelMapping(v)
	}
	if v, ok := req["allowed_groups"].(string); ok {
		ch.AllowedGroups = v
	}
	if v, ok := req["weight"].(float64); ok {
		ch.Weight = int(v)
	}
	if v, ok := req["priority"].(float64); ok {
		ch.Priority = int(v)
	}
	if v, ok := req["enabled"].(bool); ok {
		ch.Enabled = v
	}
	if v, ok := req["auto_ban"].(bool); ok {
		ch.AutoBan = v
	}
	model.DB.Save(&ch)
	routing.Pool.UpdateChannel(&ch)
	c.JSON(200, gin.H{"success": true})
}

func HandleDeleteChannel(c *gin.Context) {
	id := c.Param("id")
	var ch model.Channel
	if model.DB.First(&ch, id).Error != nil {
		c.JSON(404, gin.H{"error": gin.H{"message": "\u6e20\u9053\u4e0d\u5b58\u5728"}})
		return
	}
	model.DB.Delete(&ch)
	routing.Pool.RemoveChannel(ch.ID)
	c.JSON(200, gin.H{"success": true})
}

func HandleTestChannel(c *gin.Context) {
	id := c.Param("id")
	var ch model.Channel
	if model.DB.First(&ch, id).Error != nil {
		c.JSON(404, gin.H{"error": gin.H{"message": "\u6e20\u9053\u4e0d\u5b58\u5728"}})
		return
	}
	testModel := ""
	if ch.Models != "" {
		testModel = strings.TrimSpace(strings.Split(ch.Models, ",")[0])
	}
	if testModel == "" {
		c.JSON(200, gin.H{"success": false, "latency_ms": 0, "model": "-", "status": "\u65e0\u6a21\u578b\u914d\u7f6e"})
		return
	}
	modelToUse := testModel
	if ch.ModelMapping != "" {
		var mapping map[string]string
		if json.Unmarshal([]byte(ch.ModelMapping), &mapping) == nil {
			if mapped, ok := mapping[testModel]; ok { modelToUse = mapped }
		}
	}
	base := strings.TrimRight(ch.BaseURL, "/")
	testURL := base + "/v1/chat/completions"
	if strings.HasSuffix(base, "/v1") {
		testURL = base[:len(base)-3] + "/v1/chat/completions"
	}
	body := fmt.Sprintf(`{"model":"%s","messages":[{"role":"user","content":"Hi"}],"max_tokens":5}`, modelToUse)
	client := &http.Client{Timeout: 15 * time.Second}
	req, _ := http.NewRequest("POST", testURL, strings.NewReader(body))
	req.Header.Set("Authorization", "Bearer "+ch.APIKey)
	req.Header.Set("Content-Type", "application/json")
	start := time.Now()
	resp, err := client.Do(req)
	latency := int(time.Since(start).Milliseconds())
	if err != nil {
		ch.FailCount++
		if config.Cfg.Heartbeat.AutoDisable && ch.AutoBan && ch.FailCount >= 5 {
			ch.Enabled = false
		}
		now := time.Now().UTC()
		ch.TestTime = &now
		ch.ResponseTime = 0
		model.DB.Save(&ch)
		routing.Pool.UpdateFailCount(ch.ID, ch.FailCount, ch.Enabled)
		core.ErrLog.Error(fmt.Sprintf("渠道测试失败: [%s] ID:%s 模型:%s 错误:%s", ch.Name, id, modelToUse, err.Error()))
		c.JSON(200, gin.H{"success": false, "latency_ms": 0, "model": modelToUse, "status": "\u8fde\u63a5\u8d85\u65f6", "error": err.Error()[:200]})
		return
	}
	defer resp.Body.Close()
	now := time.Now().UTC()
	ch.TestTime = &now
	ch.ResponseTime = latency
	if resp.StatusCode == 200 {
		ch.FailCount = 0
		ch.Enabled = true
		model.DB.Save(&ch)
		routing.Pool.UpdateFailCount(ch.ID, 0, true)
		c.JSON(200, gin.H{"success": true, "latency_ms": latency, "model": modelToUse, "status": "OK"})
	} else {
		errorBody, _ := io.ReadAll(resp.Body)
		errorStr := string(errorBody); if len(errorStr) > 300 { errorStr = errorStr[:300] }
		if ch.Enabled {
			ch.FailCount++
			if config.Cfg.Heartbeat.AutoDisable && ch.AutoBan && ch.FailCount >= 5 { ch.Enabled = false }
		}
		model.DB.Save(&ch)
		routing.Pool.UpdateFailCount(ch.ID, ch.FailCount, ch.Enabled)
		core.ErrLog.Error(fmt.Sprintf("渠道测试失败: [%s] ID:%s HTTP:%d 模型:%s", ch.Name, id, resp.StatusCode, modelToUse))
		c.JSON(200, gin.H{"success": false, "latency_ms": latency, "model": modelToUse, "status": fmt.Sprintf("HTTP %d", resp.StatusCode), "error": errorStr})
	}
}
