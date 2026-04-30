package middleware

import (
	"net/http"
	"strconv"
	"strings"

	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/zapi/zapi-go/internal/core"
	"github.com/zapi/zapi-go/internal/model"
)

func CORS() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH")
		c.Header("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept, User-Agent")
		if c.Request.Method == "OPTIONS" { c.AbortWithStatus(204); return }
		c.Next()
	}
}

func BodyLimit() gin.HandlerFunc {
	return func(c *gin.Context) {
		if c.Request.ContentLength > 10<<20 { c.JSON(413, gin.H{"error": gin.H{"message": "\u8bf7\u6c42\u4f53\u8fc7\u5927"}}); c.Abort(); return }
		c.Next()
	}
}

type AuthInfo struct {
	UserID uint
	IsSuper bool
	IsAdmin bool
	IsAdminToken bool
}

func RequireAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		auth := c.GetHeader("Authorization"); token := strings.TrimPrefix(auth, "Bearer ")
		if token == "" || token == auth { c.JSON(401, gin.H{"error": gin.H{"message": "\u672a\u63d0\u4f9b\u8ba4\u8bc1\u4fe1\u606f"}}); c.Abort(); return }
		// Admin token
		if core.IsAdminToken(token) {
			c.Set("auth", &AuthInfo{UserID: model.SuperAdminID, IsSuper: true, IsAdmin: true, IsAdminToken: true})
			c.Next(); return
		}
		// JWT
		uid, err := core.ParseJWT(token)
		if err != nil { c.JSON(401, gin.H{"error": gin.H{"message": "\u8ba4\u8bc1\u5931\u8d25"}}); c.Abort(); return }
		var user model.User
		if model.DB.First(&user, uid).Error != nil { c.JSON(401, gin.H{"error": gin.H{"message": "\u7528\u6237\u4e0d\u5b58\u5728"}}); c.Abort(); return }
		c.Set("user", &user)
		c.Set("auth", &AuthInfo{UserID: user.ID, IsSuper: user.ID == model.SuperAdminID, IsAdmin: user.Role == "admin" || user.Role == "operator", IsAdminToken: false})
		c.Next()
	}
}

func RequireAdmin() gin.HandlerFunc {
	return func(c *gin.Context) {
		a, exists := c.Get("auth")
		if !exists { c.JSON(401, gin.H{"error": gin.H{"message": "\u672a\u8ba4\u8bc1"}}); c.Abort(); return }
		auth := a.(*AuthInfo)
		if !auth.IsAdmin { c.JSON(403, gin.H{"error": gin.H{"message": "\u6743\u9650\u4e0d\u8db3"}}); c.Abort(); return }
		c.Next()
	}
}

func RequireSuperAdmin() gin.HandlerFunc {
	return func(c *gin.Context) {
		a, exists := c.Get("auth")
		if !exists { c.JSON(401, gin.H{"error": gin.H{"message": "\u672a\u8ba4\u8bc1"}}); c.Abort(); return }
		auth := a.(*AuthInfo)
		if !auth.IsSuper { c.JSON(403, gin.H{"error": gin.H{"message": "\u4ec5\u8d85\u7ea7\u7ba1\u7406\u5458\u53ef\u64cd\u4f5c"}}); c.Abort(); return }
		c.Next()
	}
}

func GetAuth(c *gin.Context) *AuthInfo {
	a, _ := c.Get("auth"); if a == nil { return nil }; return a.(*AuthInfo)
}

func SSEError(c *gin.Context, message, errType, code string) {
	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Status(200)
	errJSON, _ := jsonMarshal(gin.H{"error": gin.H{"message": message, "type": errType, "code": code}})
	c.Writer.Write([]byte("data: " + string(errJSON) + "\n\ndata: [DONE]\n\n"))
	c.Writer.(http.Flusher).Flush()
}

func jsonMarshal(v interface{}) ([]byte, error) {
	return json.Marshal(v)
}

// GetPageParams returns offset and limit from query params
func GetPageParams(c *gin.Context) (int, int) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	pageSize, _ := strconv.Atoi(c.DefaultQuery("page_size", "50"))
	if page < 1 { page = 1 }; if pageSize < 1 { pageSize = 50 }; if pageSize > 500 { pageSize = 500 }
	offset := (page - 1) * pageSize
	return offset, pageSize
}
