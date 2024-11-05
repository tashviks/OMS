package models

type OrderLine struct {
	ID             int     `json:"id" gorm:"primaryKey"`
	OrderID        int     `json:"OrderID" gorm:"not null"`
	ProductGradeID int     `json:"ProductGradeID" gorm:"not null"`
	Qty            int     `json:"Qty" gorm:"not null"`
	Price          float64 `json:"Price" gorm:"type:decimal(10,2);not null"`
}

func (OrderLine) TableName() string {
	return "order_lines"
}
