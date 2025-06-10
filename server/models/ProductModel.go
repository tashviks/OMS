package models

import (
	"time"
	"github.com/lib/pq"
)

type Product struct {
	ID          uint           `gorm:"column:id;primaryKey"` 
	MRP         float64        `gorm:"column:mrp;not null"`
	Price       float64        `gorm:"not null"`
	Category    string         `gorm:"type:varchar(100);not null"`
	SKU         string         `gorm:"type:varchar(100);not null"`
	Name        string         `gorm:"type:varchar(255);not null"`
	Brand       string         `gorm:"type:varchar(100);not null"`
	Review      float64        `gorm:"type:float;not null"`
	Grade       pq.StringArray `gorm:"type:text[]"`
	BagSize     pq.StringArray `gorm:"column:bag_size;type:text[]"`
	MinOrderQty uint           `gorm:"column:min_order_qty;not null"`
	MaxOrderQty uint           `gorm:"column:max_order_qty;not null"`
	InStock     uint           `gorm:"column:in_stock;not null"`
	Image       string         `gorm:"type:varchar(255);not null"`
	ModelURL    string         `gorm:"column:model_url;type:varchar(255)" json:"model_url"`
	CreatedAt   time.Time      `gorm:"autoCreateTime"`
	UpdatedAt   time.Time      `gorm:"autoUpdateTime"`
}
