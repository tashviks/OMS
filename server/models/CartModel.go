package models

type Cart struct {
	ID        int    `json:"id" gorm:"primaryKey"`
	UserID    int    `json:"user_id" gorm:"not null"`
	Status    int    `json:"status" gorm:"not null"`
	CreatedAt string `json:"created_at" gorm:"not null"`
	UpdatedAt string `json:"updated_at" gorm:"not null"`
}

func (Cart) TableName() string {
	return "cart"
}
