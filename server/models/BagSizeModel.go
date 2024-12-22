package models

type BagSize struct {
	ID        int    `json:"id" gorm:"primaryKey"`
	ProductID int    `json:"product_id" gorm:"not null"`
	BagSize   string `json:"bag_size" gorm:"not null"`
}
func (BagSize) TableName() string {
	return "bag_size"
}
