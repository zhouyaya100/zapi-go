package core

import (
	"time"
	"github.com/zapi/zapi-go/internal/model"
	"gorm.io/gorm"
)

type quotaEntry struct { TokenID uint; UserID uint; TokensUsed int64 }
var quotaCh = make(chan quotaEntry, 65536)

func StartQuotaDeductor() {
	go func() {
		tokenBatch := make(map[uint]int64); userBatch := make(map[uint]int64)
		// Track API keys to invalidate (collect from cache, not DB)
		tokenIDsToInvalidate := make(map[uint]bool)
		ticker := time.NewTicker(5 * time.Second)
		for {
			select {
			case e := <-quotaCh:
				tokenBatch[e.TokenID] += e.TokensUsed
				if e.UserID > 0 { userBatch[e.UserID] += e.TokensUsed }
				tokenIDsToInvalidate[e.TokenID] = true
			case <-ticker.C:
				for tid, amt := range tokenBatch {
					model.DB.Model(&model.Token{}).Where("id = ?", tid).UpdateColumn("quota_used", gorm.Expr("quota_used + ?", amt))
				}
				for uid, amt := range userBatch {
					model.DB.Model(&model.User{}).Where("id = ?", uid).UpdateColumn("token_quota_used", gorm.Expr("token_quota_used + ?", amt))
					InvalidateUserCache(uid)
				}
				// Invalidate token caches - try to find key from existing cache, otherwise clear all
				for tid := range tokenIDsToInvalidate {
					// We can't easily reverse-lookup the key from tokenID in cache,
					// so clear all token cache to be safe (it will refill on next request)
					_ = tid
				}
				if len(tokenIDsToInvalidate) > 0 {
					InvalidateAllTokenCache()
				}
				tokenBatch = make(map[uint]int64); userBatch = make(map[uint]int64)
				tokenIDsToInvalidate = make(map[uint]bool)
			case <-StopChan:
				// Flush remaining quota before exit
				for tid, amt := range tokenBatch {
					model.DB.Model(&model.Token{}).Where("id = ?", tid).UpdateColumn("quota_used", gorm.Expr("quota_used + ?", amt))
				}
				for uid, amt := range userBatch {
					model.DB.Model(&model.User{}).Where("id = ?", uid).UpdateColumn("token_quota_used", gorm.Expr("token_quota_used + ?", amt))
				}
				return
			}
		}
	}()
}

func DeductQuota(tokenID, userID uint, tokens int64) {
	if tokens <= 0 { return }
	quotaCh <- quotaEntry{TokenID: tokenID, UserID: userID, TokensUsed: tokens}
}
