package models

import (
	"time"
)

type Cart struct {
	ID             int       `json:"id" gorm:"primaryKey"`
	UserID         int       `json:"user_id" gorm:"not null"`
	ProductGradeID int       `json:"product_grade_id" gorm:"not null"`
	ProductID      int       `json:"product_id" gorm:"not null"`
	Category       string    `json:"category" gorm:"type:varchar(255)"`
	Quantity       int       `json:"quantity" gorm:"not null"`
	Price          float64   `json:"price" gorm:"type:decimal(10,2);not null"`
	CreatedAt      time.Time `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt      time.Time `json:"updated_at" gorm:"autoUpdateTime"`
}
func (Cart) TableName() string {
	return "cart"
}
