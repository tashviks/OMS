package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) PostOrderLine(order []models.OrderLine) ([]models.OrderLine, error) {
	for _, ord := range order {
		if err := r.DB.Create(&ord).Error; err != nil {
		log.Println("Error in PostOrderLine : " + err.Error())
			return nil, err
		}
	}
	return order, nil
}