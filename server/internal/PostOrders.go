package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) PostOrders(order models.Order) (models.Order, error) {
	result := r.DB.Create(&order)
	if result.Error != nil {
		log.Println("Error in PostOrders : " + result.Error.Error())
		return models.Order{}, result.Error
	}
	return order, nil
}