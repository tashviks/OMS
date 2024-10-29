package models

import (
	"time"
)

type Cart_Item struct {
	ID             int       `json:"id" gorm:"primaryKey"`
	CartID         int       `json:"cart_id"`
	ProductGradeID int       `json:"product_grade_id"`
	Price          float64   `json:"price"`
	Qty            int       `json:"qty"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}

func (Cart_Item) TableName() string {
	return "cart_item"
}
