package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) GetAddress(userID string) ([]models.Address, error) {
	var addresses []models.Address
	result := r.DB.Where("user_id = ?", userID).Find(&addresses)
	if result.Error != nil {
		log.Println("Error in GetAddress : " + result.Error.Error())
		return nil, result.Error
	}
	return addresses, nil
}