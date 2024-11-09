package internal

import "tashvik-oms/server/models"

func (r *Database) GetUser(userID string) (models.User, error) {
	var user models.User
	result := r.DB.Where("id = ?", userID).Find(&user)
	if result.Error != nil {
		return models.User{}, result.Error
	}
	return user, nil
}