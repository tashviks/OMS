package internal

import "tashvik-oms/server/models"

func (r *Database) PostOrders(order models.Order) (models.Order, error) {
	result := r.DB.Create(&order)
	if result.Error != nil {
		return models.Order{}, result.Error
	}
	return order, nil
}