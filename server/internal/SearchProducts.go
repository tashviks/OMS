package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) SearchProducts(query string, offset int) ([]models.Product, error) {
	var products []models.Product
	result := r.DB.Where("name LIKE ?", "%"+query+"%").Limit(6).Offset(offset * 6).Find(&products)
	for i, product := range products {
		var grades []string
		var bagSizes []string
		r.DB.Model(&models.Grade{}).Where("product_id = ?", product.ID).Pluck("grade", &grades)
		r.DB.Model(&models.BagSize{}).Where("product_id = ?", product.ID).Pluck("bag_size", &bagSizes)
		products[i].Grade = grades
		products[i].BagSize = bagSizes
	}
	if result.Error != nil {
		log.Println("Error in SearchProducts : " + result.Error.Error())
		return []models.Product{}, result.Error
	}
	return products, nil
}
