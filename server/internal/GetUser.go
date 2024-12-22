package internal

import (
	"log"
	"tashvik-oms/server/models"
)

func (r *Database) GetUser(userID string) (models.User, error) {
	var user models.User
	result := r.DB.Where("id = ?", userID).Find(&user)
	if result.Error != nil {
		log.Println("Error in GetUser : " + result.Error.Error())
		return models.User{}, result.Error
	}
	return user, nil
}