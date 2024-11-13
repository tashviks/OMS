package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) GetCartItem(cartID string) ([]models.Cart_Item, error) {
	var cartItems []models.Cart_Item
	result := r.DB.Where("cart_id = ?", cartID).Find(&cartItems)
	if result.Error != nil {
		log.Println("Error in GetCartItem : " + result.Error.Error())
		return nil, result.Error
	}
	return cartItems, nil
}