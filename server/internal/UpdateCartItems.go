package internal

import "tashvik-oms/server/models"

func (r *Database) UpdateCartItems(cart []models.Cart_Item) (models.Cart_Item, error) {
	for _, item := range cart {
		if err := r.DB.Save(&item).Error; err != nil {
			return models.Cart_Item{}, err
		}
	}
	return cart[0], nil
}