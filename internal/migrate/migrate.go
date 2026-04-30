package migrate

import (
	"log"

	"gorm.io/gorm"
)

// Migration represents a single database migration
type Migration struct {
	Version string
	Up      func(db *gorm.DB) error
}

// Migrations is the ordered list of all migrations
var Migrations = []Migration{
	{
		Version: "3.8.0",
		Up: func(db *gorm.DB) error {
			log.Println("[MIGRATE] 3.8.0: Adding rate limit columns...")
			db.Exec("ALTER TABLE groups ADD COLUMN IF NOT EXISTS rate_mode TEXT DEFAULT 'global'")
			db.Exec("ALTER TABLE groups ADD COLUMN IF NOT EXISTS rpm INTEGER DEFAULT 0")
			db.Exec("ALTER TABLE groups ADD COLUMN IF NOT EXISTS tpm BIGINT DEFAULT 0")
			db.Exec("ALTER TABLE groups ADD COLUMN IF NOT EXISTS model_rate_limits TEXT DEFAULT ''")
			db.Exec("ALTER TABLE users ADD COLUMN IF NOT EXISTS rate_mode TEXT DEFAULT 'inherit'")
			db.Exec("ALTER TABLE users ADD COLUMN IF NOT EXISTS rpm INTEGER DEFAULT 0")
			db.Exec("ALTER TABLE users ADD COLUMN IF NOT EXISTS tpm BIGINT DEFAULT 0")
			db.Exec("ALTER TABLE users ADD COLUMN IF NOT EXISTS model_rate_limits TEXT DEFAULT ''")
			return nil
		},
	},
	{
		Version: "3.8.1",
		Up: func(db *gorm.DB) error {
			log.Println("[MIGRATE] 3.8.1: Adding performance indexes...")
			db.Exec("CREATE INDEX IF NOT EXISTS idx_logs_user_created ON logs(user_id, created_at)")
			db.Exec("CREATE INDEX IF NOT EXISTS idx_logs_created ON logs(created_at)")
			db.Exec("CREATE INDEX IF NOT EXISTS idx_logs_success ON logs(success)")
			db.Exec("CREATE INDEX IF NOT EXISTS idx_logs_model ON logs(model)")
			return nil
		},
	},
}

// schemaMigrations tracks applied migrations
type schemaMigration struct {
	Version string `gorm:"primaryKey"`
	Applied bool   `gorm:"default:false"`
}

func (schemaMigration) TableName() string { return "schema_migrations" }

// RunMigrations executes all pending migrations
func RunMigrations(db *gorm.DB) {
	db.AutoMigrate(&schemaMigration{})

	for _, m := range Migrations {
		var sm schemaMigration
		if db.Where("version = ?", m.Version).First(&sm).Error == nil && sm.Applied {
			continue // already applied
		}
		if err := m.Up(db); err != nil {
			log.Printf("[MIGRATE] ERROR %s: %v", m.Version, err)
			continue
		}
		db.Where("version = ?", m.Version).Assign("applied", true).FirstOrCreate(&sm)
		log.Printf("[MIGRATE] %s: OK", m.Version)
	}
}
