package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) GetProducts(offset int) ([]models.Product, error) {
	var products []models.Product
	result := r.DB.Limit(6).Offset(offset*6).Find(&products)
	if result.Error != nil {
		log.Println("Error in GetProducts : " + result.Error.Error())
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
