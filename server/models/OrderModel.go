package models

import "time"

type Order struct {
	ID          int       `json:"ID" gorm:"primaryKey"`
	UserID      int       `json:"UserID" gorm:"not null"`
	PaymentMode string    `json:"PaymentMode"`
	CreatedAt   time.Time `json:"CreatedAt"`
    
}

