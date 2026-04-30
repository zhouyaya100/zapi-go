package ratelimit

import (
	"encoding/json"
	"fmt"

	"github.com/zapi/zapi-go/internal/core"
	"github.com/zapi/zapi-go/internal/model"
)

// ResolvedRateLimits holds the effective rate limits after resolving rate_mode
type ResolvedRateLimits struct {
	RPM            int
	TPM            int64
	EffectiveMode  string // "global", "per_model", "admin", or "blocked"
	ModelLimits    map[string]ModelLimitEntry
	GroupName      string
}

// ModelLimitEntry represents per-model rate limits
type ModelLimitEntry struct {
	RPM int   `json:"rpm"`
	TPM int64 `json:"tpm"`
}

// ResolveRateLimits determines the effective rate limits for a user
// This is the SINGLE source of truth - used by both proxy and dashboard
func ResolveRateLimits(user *model.User) ResolvedRateLimits {
	result := ResolvedRateLimits{
		RPM:           0,
		TPM:           0,
		EffectiveMode: "blocked",
		ModelLimits:   make(map[string]ModelLimitEntry),
	}

	// Super admin / admin: unlimited
	if user.ID == model.SuperAdminID || user.Role == "admin" {
		result.RPM = -1
		result.TPM = -1
		result.EffectiveMode = "admin"
		return result
	}

	// Resolve group
	var grp *model.Group
	if user.GroupID != nil {
		if g, ok := core.CachedLookupGroup(*user.GroupID); ok {
			grp = g
			result.GroupName = g.Name
		}
	}

	switch user.RateMode {
	case "global":
		result.RPM = user.RPM
		result.TPM = user.TPM
		result.EffectiveMode = "global"
		if user.ModelRateLimits != "" {
			json.Unmarshal([]byte(user.ModelRateLimits), &result.ModelLimits)
		}
	case "per_model":
		result.EffectiveMode = "per_model"
		if user.ModelRateLimits != "" {
			json.Unmarshal([]byte(user.ModelRateLimits), &result.ModelLimits)
		}
		// Get default from wildcard, otherwise unlimited for non-specified models
		if e, ok := result.ModelLimits["*"]; ok {
			result.RPM = e.RPM
			result.TPM = e.TPM
		} else {
			result.RPM = -1
			result.TPM = -1
		}
	default: // "inherit"
		result.EffectiveMode = "inherit"
		if grp != nil {
			switch grp.RateMode {
			case "global":
				result.RPM = grp.RPM
				result.TPM = grp.TPM
				result.EffectiveMode = "inherit_global"
			case "per_model":
				if grp.ModelRateLimits != "" {
					json.Unmarshal([]byte(grp.ModelRateLimits), &result.ModelLimits)
				}
				result.EffectiveMode = "inherit_per_model"
				if e, ok := result.ModelLimits["*"]; ok {
					result.RPM = e.RPM
					result.TPM = e.TPM
				} else {
					result.RPM = -1
					result.TPM = -1
				}
			}
		}
	}

	return result
}

// ResolveModelLimit returns RPM/TPM for a specific model
func (r *ResolvedRateLimits) ResolveModelLimit(modelName string) (int, int64) {
	if e, ok := r.ModelLimits[modelName]; ok {
		return e.RPM, e.TPM
	}
	if e, ok := r.ModelLimits["*"]; ok {
		return e.RPM, e.TPM
	}
	return r.RPM, r.TPM
}

// CheckModelRateLimit checks if a specific model is blocked (RPM=0 or TPM=0 in model limits)
func (r *ResolvedRateLimits) IsModelBlocked(modelName string) bool {
	if e, ok := r.ModelLimits[modelName]; ok {
		return e.RPM == 0 || e.TPM == 0
	}
	return false
}

// FormatRPM returns display string for RPM
func FormatRPM(rpm int) string {
	switch {
	case rpm == -1:
		return "∞"
	case rpm == 0:
		return "无额度"
	default:
		return fmt.Sprintf("%d", rpm)
	}
}

// FormatTPM returns display string for TPM
func FormatTPM(tpm int64) string {
	switch {
	case tpm == -1:
		return "∞"
	case tpm == 0:
		return "无额度"
	default:
		return fmt.Sprintf("%d", tpm)
	}
}
