package models

type Cart_Item struct {
	ID             int     `json:"id" gorm:"primaryKey"`
	CartID         int     `json:"cart_id"`
	ProductGradeID int     `json:"product_grade_id"`
	Price          float64 `json:"price"`
	Qty            int     `json:"qty"`
	ProductID 	   int     `json:"product_id"`
	CreatedAt      string  `json:"created_at"`
	UpdatedAt      string  `json:"updated_at"`
}

func (Cart_Item) TableName() string {
	return "cart_item"
}
