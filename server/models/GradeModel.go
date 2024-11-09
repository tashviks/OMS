package models

type Grade struct {
	ID        int    `json:"id" gorm:"primaryKey"`
	ProductID int    `json:"product_id" gorm:"not null"`
	Grade     string `json:"grade" gorm:"not null"`
}

func (Grade) TableName() string {
	return "grade"
}
