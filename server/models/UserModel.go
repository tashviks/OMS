package models

import (
	"time"
)

type User struct {
	ID        int       `json:"id" gorm:"primaryKey"`
	FirstName string    `json:"first_name" gorm:"type:varchar(255)"`
	LastName  string    `json:"last_name" gorm:"type:varchar(255)"`
	Email     string    `json:"email" gorm:"type:varchar(255)"`
	Password  string    `json:"password" gorm:"type:varchar(125)"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	Address   string    `json:"address"`
}
