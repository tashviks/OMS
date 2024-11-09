package internal

import "tashvik-oms/server/models"

func (r *Database) GetGrade(productID string, grade string, bagSize string) ([]models.ProductGrade, error) {
	var grades []models.ProductGrade
	result := r.DB.Where("product_id = ? AND grade = ? AND bag_size = ?", productID, grade, bagSize).Find(&grades)
	if result.Error != nil {
		return nil, result.Error
	}
	return grades, nil
}