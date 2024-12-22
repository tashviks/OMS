package models

type ProductGrade struct {
	ID         uint   `gorm:"column:id;primaryKey"`
	Product_id uint   `gorm:"column:product_id;not null"`
	Grade      string `gorm:"column:grade;type:text"`
	BagSize    string `gorm:"column:bag_size;type:text"`
}
func (ProductGrade) TableName() string {
	return "product_grade"
}
