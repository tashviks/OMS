package models

import (
    "time"
    "github.com/lib/pq"
)
type Product struct {
    ID           uint           `gorm:"primaryKey"`
    MRP          float64        `gorm:"not null"`
    Price        float64        `gorm:"not null"`
    Category     string         `gorm:"type:varchar(100);not null"`
    SKU          string         `gorm:"type:varchar(100);not null"`
    Name         string         `gorm:"type:varchar(255);not null"`
    Brand        string         `gorm:"type:varchar(100);not null"`
    Review       float64        `gorm:"type:float;not null"`
    Grade        pq.StringArray `gorm:"type:text[]"`
    BagSize      pq.StringArray `gorm:"type:text[]"`
    MinOrderQty  int            `gorm:"not null"`
    MaxOrderQty  int            `gorm:"not null"`
    InStock      int            `gorm:"not null"`
    Image        string         `gorm:"type:varchar(255);not null"`
    CreatedAt    time.Time      `gorm:"autoCreateTime"` 
    UpdatedAt    time.Time      `gorm:"autoUpdateTime"` 
}

