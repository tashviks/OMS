package internal

import (
	"tashvik-oms/server/models"
)
func (r *Database) GetProducts() ([]models.Product, error) {
	var products []models.Product
	result := r.DB.Find(&products)
	if result.Error != nil {
		return nil, result.Error
	}
	for i, product := range products {
		var grades []string
		var bagSizes []string
		r.DB.Model(&models.Grade{}).Where("product_id = ?", product.ID).Pluck("grade", &grades)
		r.DB.Model(&models.BagSize{}).Where("product_id = ?", product.ID).Pluck("bag_size", &bagSizes)
		products[i].Grade = grades
		products[i].BagSize = bagSizes
	}
	return products, nil
}