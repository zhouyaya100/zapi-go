package handler

import (
	"encoding/json"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/zapi/zapi-go/internal/core"
	"github.com/zapi/zapi-go/internal/model"
)

func HandleListGroups(c *gin.Context) {
	var gs []model.Group
	model.DB.Order("id").Find(&gs)
	var uc []struct {
		GroupID uint
		Cnt     int64
	}
	model.DB.Model(&model.User{}).Select("group_id, count(*) as cnt").Group("group_id").Scan(&uc)
	um := make(map[uint]int64)
	for _, r := range uc {
		um[r.GroupID] = r.Cnt
	}
	result := make([]gin.H, len(gs))
	for i, g := range gs {
		result[i] = gin.H{
			"id": g.ID, "name": g.Name, "comment": g.Comment, "rate_mode": g.RateMode, "rpm": g.RPM, "tpm": g.TPM, "model_rate_limits": g.ModelRateLimits,
			"user_count": um[g.ID], "created_at": core.FmtTimeVal(g.CreatedAt),
		}
	}
	c.JSON(200, result)
}

func HandleCreateGroup(c *gin.Context) {
	var req struct {
		Name    string `json:"name"`
		Comment string `json:"comment"`
		RateMode string `json:"rate_mode"`
		RPM     int   `json:"rpm"`
		TPM     int64 `json:"tpm"`
		ModelRateLimits string `json:"model_rate_limits"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": gin.H{"message": "\u8bf7\u6c42\u53c2\u6570\u9519\u8bef"}})
		return
	}
	if req.Name == "" {
		c.JSON(400, gin.H{"error": gin.H{"message": "\u5206\u7ec4\u540d\u4e0d\u80fd\u4e3a\u7a7a"}})
		return
	}
	var existing model.Group
	if model.DB.Where("name = ?", req.Name).First(&existing).Error == nil {
		c.JSON(400, gin.H{"error": gin.H{"message": "\u5206\u7ec4\u540d\u5df2\u5b58\u5728"}})
		return
	}
	g := model.Group{Name: req.Name, Comment: req.Comment, RateMode: req.RateMode, RPM: req.RPM, TPM: req.TPM, ModelRateLimits: req.ModelRateLimits}
	model.DB.Create(&g)
	c.JSON(200, gin.H{"success": true, "id": g.ID})
}

func HandleUpdateGroup(c *gin.Context) {
	id := c.Param("id")
	var g model.Group
	if model.DB.First(&g, id).Error != nil {
		c.JSON(404, gin.H{"error": gin.H{"message": "\u5206\u7ec4\u4e0d\u5b58\u5728"}})
		return
	}
	var req map[string]interface{}
	c.ShouldBindJSON(&req)
	if v, ok := req["name"]; ok {
		if s, ok := v.(string); ok && s != "" {
			// Check duplicate name
			var existing model.Group
			if model.DB.Where("name = ? AND id != ?", s, g.ID).First(&existing).Error == nil {
				c.JSON(400, gin.H{"error": gin.H{"message": fmt.Sprintf("\u5206\u7ec4 '%s' \u5df2\u5b58\u5728", s)}})
				return
			}
			g.Name = s
		}
	}
	if v, ok := req["comment"]; ok {
		if s, ok := v.(string); ok { g.Comment = s }
	}
	if v, ok := req["rate_mode"].(string); ok {
		if v == "global" || v == "per_model" { g.RateMode = v }
	}
	if v, ok := req["rpm"].(float64); ok {
		g.RPM = int(v)
	}
	if v, ok := req["tpm"].(float64); ok {
		g.TPM = int64(v)
	}
	if v, ok := req["model_rate_limits"].(string); ok {
		g.ModelRateLimits = v
	} else if arr, ok := req["model_rate_limits"].([]interface{}); ok {
		mrlMap := make(map[string]interface{})
		for _, item := range arr {
			if m, ok := item.(map[string]interface{}); ok {
				modelName, _ := m["model"].(string)
				if modelName == "" {
					continue
				}
				entry := map[string]interface{}{}
				if rpm, ok := m["rpm"].(float64); ok {
					entry["rpm"] = int(rpm)
				} else {
					entry["rpm"] = 0
				}
				if tpm, ok := m["tpm"].(float64); ok {
					entry["tpm"] = int64(tpm)
				} else {
					entry["tpm"] = 0
				}
				if blocked, ok := m["blocked"].(bool); ok {
					entry["blocked"] = blocked
				}
				mrlMap[modelName] = entry
			}
		}
		if len(mrlMap) > 0 {
			if b, err := json.Marshal(mrlMap); err == nil {
				g.ModelRateLimits = string(b)
			}
		} else {
			g.ModelRateLimits = ""
		}
	}
	model.DB.Save(&g)
	core.InvalidateGroupCache(g.ID)
	c.JSON(200, gin.H{"success": true})
}

func HandleDeleteGroup(c *gin.Context) {
	id := c.Param("id")
	var g model.Group
	if model.DB.First(&g, id).Error != nil {
		c.JSON(404, gin.H{"error": gin.H{"message": "\u5206\u7ec4\u4e0d\u5b58\u5728"}})
		return
	}
	// Clear users referencing this group + invalidate their caches
	var affectedUsers []model.User
	model.DB.Where("group_id = ?", g.ID).Find(&affectedUsers)
	for _, u := range affectedUsers { core.InvalidateUserCache(u.ID) }
	core.InvalidateAllTokenCache()
	model.DB.Model(&model.User{}).Where("group_id = ?", g.ID).Update("group_id", nil)
	core.InvalidateGroupCache(g.ID)
	model.DB.Delete(&g)
	c.JSON(200, gin.H{"success": true})
}
