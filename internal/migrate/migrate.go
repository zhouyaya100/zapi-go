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
	{
		Version: "4.2.0",
		Up: func(db *gorm.DB) error {
			log.Println("[MIGRATE] 4.2.0: Adding upstream group columns and table...")
			db.Exec("ALTER TABLE channels ADD COLUMN IF NOT EXISTS upstream_group_id INTEGER DEFAULT NULL")
			// backup column was removed in v4.2.0 — drop if exists
			db.Exec("ALTER TABLE channels DROP COLUMN IF EXISTS backup")
			return nil
		},
	},
	{
		Version: "4.3.0",
		Up: func(db *gorm.DB) error {
			log.Println("[MIGRATE] 4.3.0: Many-to-many upstream_group_channels + migrate data...")
			// Create join table
			db.Exec(`CREATE TABLE IF NOT EXISTS upstream_group_channels (
				upstream_group_id INTEGER NOT NULL,
				channel_id INTEGER NOT NULL,
				PRIMARY KEY (upstream_group_id, channel_id)
			)`)
			// Migrate old data: channels.upstream_group_id → upstream_group_channels rows
			db.Exec(`INSERT INTO upstream_group_channels (upstream_group_id, channel_id)
				SELECT upstream_group_id, id FROM channels
				WHERE upstream_group_id IS NOT NULL
				ON CONFLICT DO NOTHING`)
			// Drop old column (keep for safety, no data loss)
			// db.Exec("ALTER TABLE channels DROP COLUMN IF EXISTS upstream_group_id")
			return nil
		},
	},
	{
		Version: "4.4.0",
		Up: func(db *gorm.DB) error {
			log.Println("[MIGRATE] 4.4.0: Adding upstream_group_id to users...")
			db.Exec("ALTER TABLE users ADD COLUMN IF NOT EXISTS upstream_group_id INTEGER DEFAULT NULL")
			return nil
		},
	},
	{
		Version: "4.5.0",
		Up: func(db *gorm.DB) error {
			log.Println("[MIGRATE] 4.5.0: User upstream groups many-to-many...")
			// Create join table
			db.Exec(`CREATE TABLE IF NOT EXISTS user_upstream_groups (
				user_id INTEGER NOT NULL,
				upstream_group_id INTEGER NOT NULL,
				PRIMARY KEY (user_id, upstream_group_id)
			)`)
			// Migrate old data: users.upstream_group_id → user_upstream_groups rows
			db.Exec(`INSERT INTO user_upstream_groups (user_id, upstream_group_id)
				SELECT id, upstream_group_id FROM users
				WHERE upstream_group_id IS NOT NULL AND upstream_group_id != 0
				ON CONFLICT DO NOTHING`)
			// Drop old column (SQLite doesn't support DROP COLUMN before 3.35.0, so keep it)
			// db.Exec("ALTER TABLE users DROP COLUMN IF EXISTS upstream_group_id")
			return nil
		},
	},
	{
		Version: "4.6.0",
		Up: func(db *gorm.DB) error {
			log.Println("[MIGRATE] 4.6.0: Adding upstream_group_id to logs...")
			db.Exec("ALTER TABLE logs ADD COLUMN IF NOT EXISTS upstream_group_id INTEGER DEFAULT 0")
			db.Exec("CREATE INDEX IF NOT EXISTS idx_logs_upstream_group_id ON logs(upstream_group_id)")
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
