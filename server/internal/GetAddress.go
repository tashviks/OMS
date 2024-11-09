package internal

import "tashvik-oms/server/models"

func (r *Database) GetAddress(userID string) ([]models.Address, error) {
	var addresses []models.Address
	result := r.DB.Where("user_id = ?", userID).Find(&addresses)
	if result.Error != nil {
		return nil, result.Error
	}
	return addresses, nil
}