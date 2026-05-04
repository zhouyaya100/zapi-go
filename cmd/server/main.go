package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/zapi/zapi-go/internal/config"
	"github.com/zapi/zapi-go/internal/core"
	"github.com/zapi/zapi-go/internal/core/routing"
	"github.com/zapi/zapi-go/internal/handler"
	"github.com/zapi/zapi-go/internal/middleware"
	"github.com/zapi/zapi-go/internal/model"
	"github.com/zapi/zapi-go/internal/ratelimit"
)

func main() {
	if err := config.Load("config.yaml"); err != nil {
		log.Fatal("配置加载失败: ", err)
	}
	if err := core.InitDB(); err != nil {
		log.Fatal("数据库初始化失败: ", err)
	}
	core.SeedDefaults()

	// Initialize routing pool from DB channels
	var channels []model.Channel
	model.DB.Where("enabled = ?", true).Find(&channels)
	for i := range channels {
		routing.Pool.UpdateChannel(&channels[i])
	}

	// Initialize upstream groups from DB
	var upstreamGroups []model.UpstreamGroup
	model.DB.Find(&upstreamGroups)
	var channelGroups []model.UpstreamGroupChannel
	model.DB.Find(&channelGroups)
	routing.LoadUpstreams(upstreamGroups, channelGroups)

	// Start background services
	core.StartLogWriter()
	core.StartLogCleanup()
	core.StartHeartbeat()
	ratelimit.Init()
	core.StartQuotaDeductor()
	core.StartChannelUpdateWriter()

	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.Use(gin.Recovery())
	r.Use(middleware.CORS())
	r.Use(middleware.BodyLimit())

	// Static files — no-cache to ensure fresh SPA assets
	r.Use(func(c *gin.Context) {
		if strings.HasPrefix(c.Request.URL.Path, "/static/assets/") {
			c.Header("Cache-Control", "no-cache, no-store, must-revalidate")
			c.Header("Pragma", "no-cache")
			c.Header("Expires", "0")
		}
		c.Next()
	})
	r.Static("/static", "./static")
	r.GET("/", func(c *gin.Context) {
		c.Header("Cache-Control", "no-cache, no-store, must-revalidate")
		c.File("./static/index.html")
	})

	// IMPORTANT: register refresh route BEFORE any groups are created
	// Gin has a bug where r.POST() silently fails after r.Group() is called
	r.POST("/api/auth/refresh", middleware.RequireAuth(), handler.HandleRefreshToken)

	// Auth routes (prefix /api/auth — matches Python version)
	authGrp := r.Group("/api/auth")
	{
		authGrp.GET("/captcha", handler.HandleCaptcha)
		authGrp.POST("/login", handler.HandleLogin)
		authGrp.POST("/register", handler.HandleRegister)
	}

	// Authenticated auth routes
	authAuthGrp := r.Group("/api/auth")
	authAuthGrp.Use(middleware.RequireAuth())
	{
		authAuthGrp.GET("/me", handler.HandleGetMe)
		authAuthGrp.PUT("/password", handler.HandleChangePassword)
	}

	// Public routes
	r.GET("/api/settings/public", handler.HandleGetPublicSettings)
	r.GET("/api/version", handler.HandleVersion)

	// JWT auth routes (prefix /api/my — matches Python version)
	myGrp := r.Group("/api/my")
	myGrp.Use(middleware.RequireAuth())
	{
		myGrp.GET("/tokens", handler.HandleListMyTokens)
		myGrp.POST("/tokens", handler.HandleCreateToken)
		myGrp.PUT("/tokens/:id", handler.HandleUpdateToken)
		myGrp.DELETE("/tokens/:id", handler.HandleDeleteToken)
		myGrp.GET("/models", handler.HandleMyModels)
		myGrp.GET("/dashboard", handler.HandleMyDashboard)
		myGrp.GET("/usage", handler.HandleMyUsage)
		myGrp.GET("/logs", handler.HandleMyLogs)
	}

	// Notification routes for logged-in users
	notifGrp := r.Group("/api/notifications")
	notifGrp.Use(middleware.RequireAuth())
	{
		notifGrp.GET("", handler.HandleListNotifications)
		notifGrp.GET("/unread_count", handler.HandleUnreadCount)
		notifGrp.PUT("/:id/read", handler.HandleMarkRead)
		notifGrp.PUT("/read_all", handler.HandleMarkAllRead)
	}

	// Admin routes (prefix /api — matches Python version)
	apiAdmin := r.Group("/api")
	apiAdmin.Use(middleware.RequireAuth(), middleware.RequireAdmin())
	{
		apiAdmin.GET("/channels", handler.HandleListChannels)
		apiAdmin.POST("/channels", handler.HandleCreateChannel)
		apiAdmin.PUT("/channels/:id", handler.HandleUpdateChannel)
		apiAdmin.DELETE("/channels/:id", handler.HandleDeleteChannel)
		apiAdmin.POST("/channels/:id/test", handler.HandleTestChannel)
		apiAdmin.GET("/upstream-groups", handler.HandleListUpstreamGroups)
		apiAdmin.POST("/upstream-groups", handler.HandleCreateUpstreamGroup)
		apiAdmin.GET("/upstream-groups/:id", handler.HandleGetUpstreamGroup)
		apiAdmin.PUT("/upstream-groups/:id", handler.HandleUpdateUpstreamGroup)
		apiAdmin.DELETE("/upstream-groups/:id", handler.HandleDeleteUpstreamGroup)
		apiAdmin.POST("/upstream-groups/:id/channels", handler.HandleAddChannelToGroup)
		apiAdmin.DELETE("/upstream-groups/:id/channels/:channel_id", handler.HandleRemoveChannelFromGroup)
		apiAdmin.GET("/lb/status", handler.HandleLBStatus)
		apiAdmin.POST("/lb/reset-circuit/:channel_id", handler.HandleResetCircuit)
		apiAdmin.GET("/users", handler.HandleListUsers)
		apiAdmin.PUT("/users/:id", handler.HandleUpdateUser)
		apiAdmin.DELETE("/users/:id", handler.HandleDeleteUser)
		apiAdmin.POST("/users/:id/recharge", handler.HandleRechargeUser)
		apiAdmin.POST("/users/:id/deduct", handler.HandleDeductUser)
		apiAdmin.GET("/tokens", handler.HandleListTokens)
		apiAdmin.POST("/tokens", handler.HandleCreateToken)
		apiAdmin.PUT("/tokens/:id", handler.HandleUpdateToken)
		apiAdmin.DELETE("/tokens/:id", handler.HandleDeleteToken)
		apiAdmin.POST("/tokens/:id/recharge", handler.HandleRechargeToken)
		apiAdmin.GET("/groups", handler.HandleListGroups)
		apiAdmin.POST("/groups", handler.HandleCreateGroup)
		apiAdmin.PUT("/groups/:id", handler.HandleUpdateGroup)
		apiAdmin.DELETE("/groups/:id", handler.HandleDeleteGroup)
		apiAdmin.GET("/logs", handler.HandleListLogs)
		apiAdmin.GET("/logs/operator", handler.HandleListLogs)
		apiAdmin.GET("/stats", handler.HandleStats)
		apiAdmin.GET("/dashboard", handler.HandleDashboard)
		apiAdmin.GET("/stats/usage", handler.HandleUsageStats)
		apiAdmin.GET("/stats/usage/operator", handler.HandleUsageStats)
		apiAdmin.GET("/notifications/sent", handler.HandleListSentNotifications)
		apiAdmin.DELETE("/notifications/sent", handler.HandleDeleteOldSentNotifications)
		apiAdmin.DELETE("/notifications/sent/:id", handler.HandleDeleteSentNotification)
		apiAdmin.POST("/notifications/batch", handler.HandleBatchSendNotification)
		apiAdmin.POST("/notifications", handler.HandleCreateNotification)
		apiAdmin.DELETE("/notifications/:id", handler.HandleDeleteNotification)
	}

	// Super admin only routes (settings)
	superAdminGrp := r.Group("/api")
	superAdminGrp.Use(middleware.RequireAuth(), middleware.RequireSuperAdmin())
	{
		superAdminGrp.GET("/settings", handler.HandleGetSettings)
		superAdminGrp.PUT("/settings", handler.HandleUpdateSettings)
		superAdminGrp.GET("/settings/error-log", handler.HandleErrorLog)
		superAdminGrp.DELETE("/settings/error-log", handler.HandleClearErrorLog)
	}

	// Reports/Export routes (prefix /api/reports — matches Python version)
	reportsGrp := r.Group("/api/reports")
	reportsGrp.Use(middleware.RequireAuth(), middleware.RequireAdmin())
	{
		reportsGrp.GET("/export", handler.HandleExportCSV)
		reportsGrp.GET("/export/xlsx", handler.HandleExportXLSX)
		reportsGrp.GET("/export/operator", handler.HandleExportCSV)
		reportsGrp.GET("/export/operator/xlsx", handler.HandleExportXLSX)
	}

	// User export routes
	myExportGrp := r.Group("/api/reports")
	myExportGrp.Use(middleware.RequireAuth())
	{
		myExportGrp.GET("/my/export", handler.HandleMyExportCSV)
		myExportGrp.GET("/my/export/xlsx", handler.HandleMyExportXLSX)
	}

	// OpenAI-compatible proxy routes (API key auth)
	r.Any("/v1/chat/completions", handler.HandleProxy)
	r.Any("/v1/completions", handler.HandleProxy)
	r.Any("/v1/embeddings", handler.HandleProxy)
	r.Any("/v1/images/generations", handler.HandleProxy)
	r.Any("/v1/images/edits", handler.HandleProxy)
	r.Any("/v1/images/variations", handler.HandleProxy)
	r.Any("/v1/audio/transcriptions", handler.HandleProxy)
	r.Any("/v1/audio/translations", handler.HandleProxy)
	r.Any("/v1/audio/speech", handler.HandleProxy)
	r.Any("/v1/videos/generations", handler.HandleProxy)
	r.Any("/v1/moderations", handler.HandleProxy)
	r.Any("/v1/responses", handler.HandleProxy)
	r.Any("/v1/realtime", handler.HandleProxy)
	r.GET("/v1/models", handler.HandleListModels)

	// Catch-all for other /v1/* paths and SPA fallback
	r.NoRoute(func(c *gin.Context) {
		if strings.HasPrefix(c.Request.URL.Path, "/v1/") {
			handler.HandleProxy(c)
			return
		}
		// SPA fallback: non-API, non-static paths serve index.html
		if !strings.HasPrefix(c.Request.URL.Path, "/api/") &&
			!strings.HasPrefix(c.Request.URL.Path, "/static/") {
			c.File("./static/index.html")
			return
		}
		c.JSON(404, gin.H{"error": gin.H{"message": "\u8def\u7531\u4e0d\u5b58\u5728"}})
	})

	addr := fmt.Sprintf(":%d", config.Cfg.Server.Port)
	fmt.Printf("Zapi-Go v4.5.8 starting on %s\n", addr)

	// Graceful shutdown on SIGINT/SIGTERM
	srv := &http.Server{Addr: addr, Handler: r}
	signal.Notify(core.StopChan, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-core.StopChan
		fmt.Println("\nShutting down...")
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		if err := srv.Shutdown(ctx); err != nil {
			fmt.Printf("Server shutdown error: %v\n", err)
		}
		core.ErrLog.Close()
	}()

	// Gin v1.10.0 workaround: iterating and printing routes forces radix-tree finalization.
	for _, route := range r.Routes() {
		if route.Method == "POST" {
			fmt.Printf("[ROUTE] %s %s\n", route.Method, route.Path)
		}
	}

	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
}
