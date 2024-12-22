package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) UpdateCartItems(cart []models.Cart_Item) (models.Cart_Item, error) {
	for _, item := range cart {
		if err := r.DB.Save(&item).Error; err != nil {
			log.Println("Error in UpdateCartItems : " + err.Error())
			return models.Cart_Item{}, err
		}
	}
	return cart[0], nil
}