package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) GetCart(userID string) (models.Cart, error) {
	var cart models.Cart
	result := r.DB.Where("user_id = ? AND status = ?", userID, 1).Find(&cart)
	if result.Error != nil {
		log.Println("Error in GetCart : " + result.Error.Error())
		return models.Cart{}, result.Error
	}
	return cart, nil
}