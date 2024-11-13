package internal

import (
	"tashvik-oms/server/models"

	"gorm.io/gorm"
)

type Iinternal interface {
	GetProducts(offset int) ([]models.Product, error)
	GetAddress(userID string) ([]models.Address, error)
	GetGrade(productID string, grade string, bagSize string) ([]models.ProductGrade, error)
	PostOrders(order models.Order) (models.Order, error)
	PostOrderLine(order []models.OrderLine) ([]models.OrderLine, error)
	GetUser(userID string) (models.User, error)
	GetCart(userID string) (models.Cart, error)
	GetCartItem(cartID string) ([]models.Cart_Item, error)
	UpdateCartItems(cart []models.Cart_Item) (models.Cart_Item, error)
	SearchProducts(query string, offset int) ([]models.Product, error)
}
type Database struct {
	DB *gorm.DB
}
