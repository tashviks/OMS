package main
import (
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "log"
)

var DB *gorm.DB

func InitDB() {
    dsn := "host=localhost user=tashvik password=Icici@5577 dbname=inframarket port=5432 sslmode=disable"
    var err error
    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }
    
}