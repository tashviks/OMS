package internal

import (
	"tashvik-oms/server/models"
	"gorm.io/gorm"
)

type Iinternal interface {
	GetProducts() ([]models.Product , error)
}

type Repo struct {
	DB *gorm.DB
}

func (r *Repo) GetProducts() ([]models.Product , error ){
	var products []models.Product
	result := r.DB.Find(&products)
	if result.Error != nil {
		return nil , result.Error
	}
	return products , nil
}