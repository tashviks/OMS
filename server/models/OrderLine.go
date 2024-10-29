package models

type OrderLine struct {
	ID        int       `json:"id" gorm:"primaryKey"`
	OrderID   int       `json:"order_id" gorm:"not null"`
	ProductGradeID int  `json:"product_grade_id" gorm:"not null"`
	Qty  int       		`json:"quantity" gorm:"not null"`
	Price     float64   `json:"price" gorm:"type:decimal(10,2);not null"`
}