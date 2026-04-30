package handler

import (
	"bufio"
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
	"github.com/zapi/zapi-go/internal/middleware"
	"github.com/zapi/zapi-go/internal/ratelimit"
	"github.com/zapi/zapi-go/internal/model"
)

var sharedTransport = &http.Transport{
	MaxIdleConns:        1000,
	MaxIdleConnsPerHost: 100,
	MaxConnsPerHost:    0,
	IdleConnTimeout:    90 * time.Second,
	DisableKeepAlives:  false,
}

func getHTTPClient() *http.Client {
	timeout := config.Cfg.Proxy.Timeout
	if timeout <= 0 { timeout = 120 }
	return &http.Client{
		Timeout:   time.Duration(timeout) * time.Second,
		Transport: sharedTransport,
	}
}

// proxyError responds with the appropriate format (SSE for stream, JSON for non-stream)
func proxyError(c *gin.Context, isStream bool, httpStatus int, message, errType, code string) {
	if isStream {
		middleware.SSEError(c, message, errType, code)
	} else {
		c.JSON(httpStatus, gin.H{"error": gin.H{"message": message, "type": errType, "code": code}})
	}
}

// authenticateRequest validates the API key and returns the token and user
func authenticateRequest(c *gin.Context) (*model.Token, *model.User, bool) {
	auth := c.GetHeader("Authorization")
	apiKey := strings.TrimPrefix(auth, "Bearer ")
	if apiKey == "" || apiKey == auth {
		c.JSON(401, gin.H{"error": gin.H{"message": "\u65e0\u6548\u7684 API Key \u683c\u5f0f", "type": "invalid_request_error", "code": "invalid_api_key"}})
		return nil, nil, false
	}
	if !strings.HasPrefix(apiKey, "sk-") {
		c.JSON(401, gin.H{"error": gin.H{"message": "\u65e0\u6548\u7684 API Key \u683c\u5f0f", "type": "invalid_request_error", "code": "invalid_api_key"}})
		return nil, nil, false
	}

	var tk *model.Token
	if cached, ok := core.CachedLookupToken(apiKey); !ok {
		c.JSON(401, gin.H{"error": gin.H{"message": "\u65e0\u6548\u7684 API Key", "type": "invalid_request_error", "code": "invalid_api_key"}})
		return nil, nil, false
	} else {
		tk = cached
	}
	if tk.ExpiresAt != nil && tk.ExpiresAt.Before(time.Now().UTC()) {
		c.JSON(401, gin.H{"error": gin.H{"message": "API Key \u5df2\u8fc7\u671f", "type": "invalid_request_error", "code": "invalid_api_key"}})
		return nil, nil, false
	}

	var user *model.User
	if cu, ok := core.CachedLookupUser(tk.UserID); ok {
		user = cu
	} else {
		c.JSON(401, gin.H{"error": gin.H{"message": "\u7528\u6237\u4e0d\u5b58\u5728"}})
		return nil, nil, false
	}
	return tk, user, true
}

// checkQuotaAndRateLimit validates token quota, user status, rate limits, and model permissions
func checkQuotaAndRateLimit(c *gin.Context, tk *model.Token, user *model.User, modelName string, isStream bool, clientIP string) (*ratelimit.ResolvedRateLimits, bool) {
	// Token quota check
	if tk.QuotaLimit != -1 && tk.QuotaUsed >= tk.QuotaLimit {
		core.ErrLog.Error(fmt.Sprintf("令牌额度不足: 令牌[%s] ID:%d 额度:%d/%d", tk.Name, tk.ID, tk.QuotaUsed, tk.QuotaLimit))
		proxyError(c, isStream, 429, "\u4ee4\u724c\u989d\u5ea6\u4e0d\u8db3", "insufficient_quota", "quota_exceeded")
		return nil, false
	}

	// User enabled check
	if !user.Enabled {
		core.ErrLog.Error(fmt.Sprintf("用户已禁用: %s ID:%d", user.Username, user.ID))
		proxyError(c, isStream, 401, "\u8d26\u53f7\u5df2\u88ab\u7981\u7528", "insufficient_quota", "user_disabled")
		return nil, false
	}

	// Rate limiting
	rl := ratelimit.ResolveRateLimits(user)
	effectiveRPM := rl.RPM
	effectiveTPM := rl.TPM
	if len(rl.ModelLimits) > 0 {
		mr, mt := rl.ResolveModelLimit(modelName)
		if mr != 0 { effectiveRPM = mr }
		if mt != 0 { effectiveTPM = mt }
	}
	if rl.IsModelBlocked(modelName) {
		core.ErrLog.Error(fmt.Sprintf("模型被限: 用户%s 模型:%s", user.Username, modelName))
		proxyError(c, isStream, 403, fmt.Sprintf("\u6a21\u578b '%s' \u5df2\u88ab\u9650\u5236", modelName), "rate_limit_exceeded", "model_blocked")
		return nil, false
	}

	userRate := &ratelimit.UserRateInfo{UserID: user.ID, RPM: effectiveRPM, TPM: effectiveTPM}
	if ratelimit.Limiter != nil {
		if msg := ratelimit.Limiter.Check(tk.Key, clientIP, userRate, int64(core.CountPromptTokens(nil))); msg != "" {
			core.ErrLog.Error(fmt.Sprintf("速率限制: %s 用户:%s IP:%s", msg, user.Username, clientIP))
			proxyError(c, isStream, 429, msg, "rate_limit_exceeded", "rate_limit_exceeded")
			return nil, false
		}
	}

	// User quota check
	if user.TokenQuota != -1 && user.TokenQuotaUsed >= user.TokenQuota {
		core.ErrLog.Error(fmt.Sprintf("用户额度不足: %s 已用:%d/额度:%d", user.Username, user.TokenQuotaUsed, user.TokenQuota))
		proxyError(c, isStream, 429, "\u7528\u6237\u989d\u5ea6\u4e0d\u8db3\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u5145\u503c", "insufficient_quota", "quota_exceeded")
		return nil, false
	}

	// Token model permission
	if tk.Models != "" {
		found := false
		for _, m := range core.SplitComma(tk.Models) {
			if m == modelName { found = true; break }
		}
		if !found {
			proxyError(c, isStream, 403, fmt.Sprintf("\u6a21\u578b '%s' \u4e0d\u5728\u4ee4\u724c\u6388\u6743\u8303\u56f4\u5185", modelName), "invalid_request_error", "model_not_allowed")
			return nil, false
		}
	}

	// User model permission (only when token has no model restriction)
	if tk.Models == "" && user.AllowedModels != "" {
		found := false
		for _, m := range core.SplitComma(user.AllowedModels) {
			if m == modelName { found = true; break }
		}
		if !found {
			proxyError(c, isStream, 403, fmt.Sprintf("\u6a21\u578b '%s' \u4e0d\u5728\u60a8\u7684\u6388\u6743\u8303\u56f4\u5185", modelName), "invalid_request_error", "model_not_allowed")
			return nil, false
		}
	}

	return &rl, true
}

// buildUpstreamRequest creates the HTTP request for the upstream provider
func buildUpstreamRequest(c *gin.Context, sel *routing.ChannelInfo, bodyBytes []byte, bodyJSON map[string]interface{}, modelName, mappedModel string, isStream, isMultipart bool) (*http.Request, error) {
	sendBody := bodyBytes
	if !isMultipart && bodyJSON != nil {
		if mappedModel != modelName {
			bodyJSON["model"] = mappedModel
			sendBody, _ = json.Marshal(bodyJSON)
		}
		if isStream {
			if _, ok := bodyJSON["stream_options"]; !ok {
				bodyJSON["stream_options"] = map[string]interface{}{"include_usage": true}
				sendBody, _ = json.Marshal(bodyJSON)
			}
		}
	}

	upstreamURL := routing.Engine.BuildUpstreamURL(sel.BaseURL, c.Request.URL.Path)
	req, err := http.NewRequest(c.Request.Method, upstreamURL, strings.NewReader(string(sendBody)))
	if err != nil {
		return nil, err
	}
	req.Header.Set("Authorization", "Bearer "+sel.APIKey)
	if isMultipart {
		req.Header.Set("Content-Type", c.GetHeader("Content-Type"))
	} else {
		req.Header.Set("Content-Type", "application/json")
	}
	if ua := c.GetHeader("User-Agent"); ua != "" {
		req.Header.Set("User-Agent", ua)
	}
	return req, nil
}

// handleChannelFail increments fail count and auto-disables if threshold reached
func handleChannelFail(sel *routing.ChannelInfo, errMsg string) {
	sel.FailCount++
	if config.Cfg.Heartbeat.AutoDisable && sel.AutoBan && sel.FailCount >= 5 {
		sel.Enabled = false
	}
	model.DB.Model(&model.Channel{}).Where("id = ?", sel.ID).Updates(map[string]interface{}{"fail_count": sel.FailCount, "enabled": sel.Enabled})
	routing.Pool.UpdateFailCount(sel.ID, sel.FailCount, sel.Enabled)
	core.ErrLog.Error(errMsg)
}

// handleChannelSuccess resets fail count on success
func handleChannelSuccess(sel *routing.ChannelInfo) {
	if sel.FailCount > 0 {
		sel.FailCount = 0
		model.DB.Model(&model.Channel{}).Where("id = ?", sel.ID).Update("fail_count", 0)
		routing.Pool.UpdateFailCount(sel.ID, 0, true)
	}
}

// sanitizeUpstreamError hides internal error details from upstream (Python tracebacks, etc.)
func sanitizeUpstreamError(errorBody []byte) map[string]interface{} {
	var ej map[string]interface{}
	if json.Unmarshal(errorBody, &ej) == nil {
		if e, ok := ej["error"].(map[string]interface{}); ok {
			if msg, ok := e["message"].((string)); ok {
				lower := strings.ToLower(msg)
				if strings.Contains(lower, "traceback") || strings.Contains(lower, "exception") || strings.Contains(lower, "file ") || strings.Contains(lower, "python") {
					e["message"] = "\u4e0a\u6e38\u670d\u52a1\u5185\u90e8\u9519\u8bef"
				}
			}
		}
	}
	return ej
}

// processStreamResponse handles SSE stream forwarding, token counting, and billing
func processStreamResponse(c *gin.Context, resp *http.Response, tk *model.Token, user *model.User, sel *routing.ChannelInfo, modelName string, isStream bool, latency int, clientIP string, bodyJSON map[string]interface{}) {
	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Header("Connection", "keep-alive")
	c.Status(200)

	var ct int64
	pt := core.CountPromptTokens(bodyJSON)
	gotUsage := false

	scanner := bufio.NewScanner(resp.Body)
	scanner.Buffer(make([]byte, 1024*1024), 1024*1024)

	for scanner.Scan() {
		line := scanner.Text()
		if strings.HasPrefix(line, "data: ") {
			data := strings.TrimPrefix(line, "data: ")
			if data == "[DONE]" {
				fmt.Fprintf(c.Writer, "data: [DONE]\n\n")
				c.Writer.(http.Flusher).Flush()
				break
			}
			var chunk map[string]interface{}
			if json.Unmarshal([]byte(data), &chunk) == nil {
				if usage, ok := chunk["usage"].(map[string]interface{}); ok && usage != nil {
					gotUsage = true
					if cc, ok := usage["completion_tokens"].(float64); ok { ct = int64(cc) }
					if rt, ok := usage["reasoning_tokens"].(float64); ok { ct += int64(rt) }
				}
				if !gotUsage {
					if choices, ok := chunk["choices"].([]interface{}); ok && len(choices) > 0 {
						if choice, ok := choices[0].(map[string]interface{}); ok {
							if delta, ok := choice["delta"].(map[string]interface{}); ok {
								if content, ok := delta["content"].(string); ok && content != "" {
									ct += int64(core.CountTokens(content))
								}
								if reasoning, ok := delta["reasoning_content"].(string); ok && reasoning != "" {
									ct += int64(core.CountTokens(reasoning))
								}
							}
						}
					}
				}
			}
		}
		fmt.Fprintf(c.Writer, "%s\n\n", line)
		c.Writer.(http.Flusher).Flush()
	}
	resp.Body.Close()

	totalUsed := pt + ct
	if totalUsed > 0 { core.DeductQuota(tk.ID, user.ID, totalUsed) }
	if ct > 0 { ratelimit.Limiter.AccountTokens(user.ID, ct) }
	core.AddLog(model.Log{
		UserID: user.ID, TokenID: tk.ID, TokenName: tk.Name,
		ChannelID: sel.ID, ChannelName: sel.Name, Model: modelName,
		IsStream: true, PromptTokens: pt, CompletionTokens: ct,
		LatencyMs: latency, Success: true, ClientIP: clientIP,
	})
}

// processNonStreamResponse handles non-stream response forwarding, token counting, and billing
func processNonStreamResponse(c *gin.Context, resp *http.Response, tk *model.Token, user *model.User, sel *routing.ChannelInfo, modelName string, isChatEndpoint, isTTS bool, endpoint string, latency int, clientIP string, bodyJSON map[string]interface{}) {
	if isTTS {
		body, _ := io.ReadAll(resp.Body)
		resp.Body.Close()
		estimatedTokens := int64(len(body)) / 100
		if estimatedTokens < 1 { estimatedTokens = 1 }
		core.DeductQuota(tk.ID, user.ID, estimatedTokens)
		core.AddLog(model.Log{
			UserID: user.ID, TokenID: tk.ID, TokenName: tk.Name,
			ChannelID: sel.ID, ChannelName: sel.Name, Model: modelName,
			IsStream: false, PromptTokens: estimatedTokens, CompletionTokens: 0,
			LatencyMs: latency, Success: true, ClientIP: clientIP,
		})
		contentType := resp.Header.Get("Content-Type")
		if contentType == "" { contentType = "audio/mpeg" }
		c.Data(200, contentType, body)
		return
	}

	body, _ := io.ReadAll(resp.Body)
	resp.Body.Close()
	var result map[string]interface{}
	json.Unmarshal(body, &result)

	var pt, ct int64
	if isChatEndpoint {
		pt = core.CountPromptTokens(bodyJSON)
		if usage, ok := result["usage"].(map[string]interface{}); ok {
			if cc, ok := usage["completion_tokens"].(float64); ok { ct = int64(cc) }
			if rt, ok := usage["reasoning_tokens"].(float64); ok { ct += int64(rt) }
		}
		if ct == 0 { ct = core.CountPromptTokens(bodyJSON) }
	} else {
		if usage, ok := result["usage"].(map[string]interface{}); ok {
			if p, ok := usage["prompt_tokens"].(float64); ok { pt = int64(p) }
			if t, ok := usage["total_tokens"].(float64); ok && pt > 0 { ct = int64(t) - pt }
			if cc, ok := usage["completion_tokens"].(float64); ok { ct = int64(cc) }
		}
		if pt == 0 {
			if input, ok := bodyJSON["input"].(string); ok {
				pt = int64(core.CountTokens(input))
			} else if inputList, ok := bodyJSON["input"].([]interface{}); ok {
				for _, item := range inputList {
					if s, ok := item.(string); ok { pt += int64(core.CountTokens(s)) }
				}
			} else {
				pt = core.CountPromptTokens(bodyJSON)
			}
		}
		if strings.Contains(endpoint, "/images/") {
			if n, ok := bodyJSON["n"].(float64); ok && n > 0 {
				pt = int64(n) * 1000
			} else {
				pt = 1000
			}
			ct = 0
		}
	}
	if pt+ct > 0 {
		core.DeductQuota(tk.ID, user.ID, pt+ct)
		if ct > 0 { ratelimit.Limiter.AccountTokens(user.ID, ct) }
	}
	core.AddLog(model.Log{
		UserID: user.ID, TokenID: tk.ID, TokenName: tk.Name,
		ChannelID: sel.ID, ChannelName: sel.Name, Model: modelName,
		IsStream: false, PromptTokens: pt, CompletionTokens: ct,
		LatencyMs: latency, Success: true, ClientIP: clientIP,
	})
	c.Data(200, "application/json", body)
}

func HandleProxy(c *gin.Context) {
	// 1. Authenticate
	tk, user, ok := authenticateRequest(c)
	if !ok { return }

	// 2. Parse request body
	bodyBytes, _ := io.ReadAll(c.Request.Body)
	var bodyJSON map[string]interface{}
	json.Unmarshal(bodyBytes, &bodyJSON)

	// 3. Determine endpoint type
	endpoint := c.Request.URL.Path
	isChatEndpoint := strings.HasSuffix(endpoint, "/chat/completions") || strings.HasSuffix(endpoint, "/completions")
	isTTS := strings.HasSuffix(endpoint, "/audio/speech")
	isMultipart := strings.Contains(c.GetHeader("Content-Type"), "multipart/form-data")

	modelName := ""
	if bodyJSON != nil { modelName, _ = bodyJSON["model"].(string) }
	if modelName == "" && isMultipart {
		bodyStr := string(bodyBytes)
		for _, part := range strings.Split(bodyStr, "name=\"") {
			if strings.HasPrefix(part, "model\"") {
				val := strings.TrimPrefix(part, "model\"")
				val = strings.TrimPrefix(val, "\r\n\r\n")
				val = strings.TrimSuffix(val, "\r\n--")
				val = strings.TrimSpace(strings.SplitN(val, "\r\n", 2)[0])
				if val != "" { modelName = val; break }
			}
		}
	}
	if modelName == "" { modelName = "unknown" }
	isStream := false
	if s, ok := bodyJSON["stream"].(bool); ok { isStream = s }
	clientIP := c.ClientIP()

	// 4. Check quota, rate limits, and model permissions
	rl, ok := checkQuotaAndRateLimit(c, tk, user, modelName, isStream, clientIP)
	if !ok { return }

	// 5. Retry with channel failover
	maxRetries := config.Cfg.Proxy.RetryCount
	excludeIDs := map[uint]bool{}

	for attempt := 0; attempt <= maxRetries; attempt++ {
		var gname *string
		if rl.GroupName != "" { gname = &rl.GroupName }
		skipGroup := user.ID == model.SuperAdminID || user.Role == "admin"
		sel := routing.Pool.Select(modelName, gname, excludeIDs, skipGroup)
		if sel == nil {
			core.ErrLog.Error(fmt.Sprintf("无可用渠道: 模型:%s 用户:%s", modelName, user.Username))
			proxyError(c, isStream, 404, fmt.Sprintf("\u6a21\u578b '%s' \u6ca1\u6709\u53ef\u7528\u6e20\u9053", modelName), "invalid_request_error", "model_not_found")
			return
		}

		// Build upstream request
		mappedModel := routing.Engine.ResolveModel(sel, modelName)
		req, err := buildUpstreamRequest(c, sel, bodyBytes, bodyJSON, modelName, mappedModel, isStream, isMultipart)
		if err != nil {
			proxyError(c, isStream, 500, "\u5185\u90e8\u670d\u52a1\u9519\u8bef", "server_error", "internal_error")
			return
		}

		// Send request
		client := getHTTPClient()
		start := time.Now()
		resp, err := client.Do(req)
		latency := int(time.Since(start).Milliseconds())

		// Connection error
		if err != nil {
			handleChannelFail(sel, fmt.Sprintf("代理失败: 用户%s 模型:%s 渠道[%s] 错误:\u4e0a\u6e38\u670d\u52a1\u8d85\u65f6", user.Username, modelName, sel.Name))
			core.AddLog(model.Log{UserID: user.ID, TokenID: tk.ID, TokenName: tk.Name, ChannelID: sel.ID, ChannelName: sel.Name, Model: modelName, IsStream: isStream, LatencyMs: latency, Success: false, ErrorMsg: "\u4e0a\u6e38\u670d\u52a1\u8d85\u65f6", ClientIP: clientIP})
			excludeIDs[sel.ID] = true
			if attempt < maxRetries { continue }
			proxyError(c, isStream, 504, "\u4e0a\u6e38\u670d\u52a1\u8d85\u65f6", "upstream_timeout", "timeout")
			return
		}

		// Non-200 response
		if resp.StatusCode != 200 {
			errorBody, _ := io.ReadAll(resp.Body)
			resp.Body.Close()
			handleChannelFail(sel, fmt.Sprintf("上游HTTP错误: 用户%s 模型:%s 渠道[%s] HTTP:%d", user.Username, modelName, sel.Name, resp.StatusCode))
			em := string(errorBody)
			if len(em) > 500 { em = em[:500] }
			core.AddLog(model.Log{UserID: user.ID, TokenID: tk.ID, TokenName: tk.Name, ChannelID: sel.ID, ChannelName: sel.Name, Model: modelName, IsStream: isStream, LatencyMs: latency, Success: false, ErrorMsg: em, ClientIP: clientIP})
			excludeIDs[sel.ID] = true

			// Stream error: return SSE formatted error
			if isStream {
				c.Header("Content-Type", "text/event-stream")
				c.Status(200)
				ej := sanitizeUpstreamError(errorBody)
				if ej != nil {
					errBytes, _ := json.Marshal(ej)
					em = string(errBytes)
				}
				fmt.Fprintf(c.Writer, "data: %s\n\n", em)
				c.Writer.(http.Flusher).Flush()
				return
			}
			// Non-stream: try to forward upstream error JSON
			ej := sanitizeUpstreamError(errorBody)
			if ej != nil {
				c.JSON(resp.StatusCode, ej)
				return
			}
			if attempt < maxRetries { continue }
			c.JSON(resp.StatusCode, gin.H{"error": gin.H{"message": "\u4e0a\u6e38\u670d\u52a1\u9519\u8bef", "type": "upstream_error", "code": "bad_gateway"}})
			return
		}

		// Success
		handleChannelSuccess(sel)
		if isStream {
			processStreamResponse(c, resp, tk, user, sel, modelName, isStream, latency, clientIP, bodyJSON)
		} else {
			processNonStreamResponse(c, resp, tk, user, sel, modelName, isChatEndpoint, isTTS, endpoint, latency, clientIP, bodyJSON)
		}
		return
	}

	proxyError(c, isStream, 502, "\u4e0a\u6e38\u670d\u52a1\u4e0d\u53ef\u7528", "upstream_error", "bad_gateway")
}

func HandleListModels(c *gin.Context) {
	apiKey := strings.TrimPrefix(c.GetHeader("Authorization"), "Bearer ")
	var tk *model.Token
	if cached, ok := core.CachedLookupToken(apiKey); !ok {
		c.JSON(401, gin.H{"error": gin.H{"message": "无效的 API Key", "type": "invalid_request_error", "code": "invalid_api_key"}}); return
	} else { tk = cached }
	var user *model.User; if cu, ok := core.CachedLookupUser(tk.UserID); ok { user = cu } else { c.JSON(401, gin.H{"error": gin.H{"message": "用户不存在"}}); return }
	groupName := ""
	if user.GroupID != nil { if g, ok := core.CachedLookupGroup(*user.GroupID); ok { groupName = g.Name } }
	var gname *string; if groupName != "" { gname = &groupName }
	modelNames := routing.Pool.GetModelsForGroup(gname)
	if user.AllowedModels != "" { userModels := make(map[string]bool); for _, m := range core.SplitComma(user.AllowedModels) { userModels[m] = true }; var filtered []string; for _, m := range modelNames { if userModels[m] { filtered = append(filtered, m) } }; modelNames = filtered }
	if tk.Models != "" { tokenModels := make(map[string]bool); for _, m := range core.SplitComma(tk.Models) { tokenModels[m] = true }; var filtered []string; for _, m := range modelNames { if tokenModels[m] { filtered = append(filtered, m) } }; modelNames = filtered }
	data := make([]gin.H, len(modelNames)); for i, m := range modelNames { data[i] = gin.H{"id": m, "object": "model", "owned_by": "zapi"} }
	c.JSON(200, gin.H{"object": "list", "data": data})
}

// estimatePromptTokens removed - using core.CountPromptTokens (tiktoken) instead
