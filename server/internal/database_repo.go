package internal

import (
	"tashvik-oms/server/models"

	"gorm.io/gorm"
)

type Iinternal interface {
	GetProducts() ([]models.Product, error)
	GetAddress(userID string) ([]models.Address, error)
	GetGrade(productID string, grade string, bagSize string) ([]models.ProductGrade, error)
	PostOrders(order models.Order) (models.Order, error)
	PostOrderLine(order []models.OrderLine) ([]models.OrderLine, error)
	GetUser(userID string) (models.User, error)
	GetCart(userID string) (models.Cart, error)
	GetCartItem(cartID string) ([]models.Cart_Item, error)
	UpdateCartItems(cart []models.Cart_Item) (models.Cart_Item, error)
}
type Database struct {
	DB *gorm.DB
}
func (r *Database) GetProducts() ([]models.Product, error) {
	var products []models.Product
	result := r.DB.Find(&products)
	if result.Error != nil {
		return nil, result.Error
	}
	return products, nil
}
func (r *Database) GetAddress(userID string) ([]models.Address, error) {
	var addresses []models.Address
	result := r.DB.Where("user_id = ?", userID).Find(&addresses)
	if result.Error != nil {
		return nil, result.Error
	}
	return addresses, nil
}
func (r *Database) GetGrade(productID string, grade string, bagSize string) ([]models.ProductGrade, error) {
	var grades []models.ProductGrade
	result := r.DB.Where("product_id = ? AND grade = ? AND bag_size = ?", productID, grade, bagSize).Find(&grades)
	if result.Error != nil {
		return nil, result.Error
	}
	return grades, nil
}
func (r *Database) PostOrders(order models.Order) (models.Order, error) {
	result := r.DB.Create(&order)
	if result.Error != nil {
		return models.Order{}, result.Error
	}
	return order, nil
}
func (r *Database) PostOrderLine(order []models.OrderLine) ([]models.OrderLine, error) {
	for _, ord := range order {
		query := `INSERT INTO order_line (order_id, product_grade_id, price, qty) VALUES ($1 , $2 , $3 , $4)`
		res := r.DB.Exec(query, ord.OrderID, ord.ProductGradeID, ord.Price, ord.Qty)
		if res.Error != nil {
			return nil, res.Error
		}
	}
	return order, nil
}
func (r *Database) GetUser(userID string) (models.User, error) {
	var user models.User
	result := r.DB.Where("id = ?", userID).Find(&user)
	if result.Error != nil {
		return models.User{}, result.Error
	}
	return user, nil
}
func (r *Database) GetCart(userID string) (models.Cart, error) {
	var cart models.Cart
	result := r.DB.Where("user_id = ? AND status = ?", userID, 1).Find(&cart)
	if result.Error != nil {
		return models.Cart{}, result.Error
	}
	return cart, nil
}
func (r *Database) GetCartItem(cartID string) ([]models.Cart_Item, error) {
	var cartItems []models.Cart_Item
	result := r.DB.Where("cart_id = ?", cartID).Find(&cartItems)
	if result.Error != nil {
		return nil, result.Error
	}
	return cartItems, nil
}
func (r *Database) UpdateCartItems(cart []models.Cart_Item) (models.Cart_Item, error) {
	for _, item := range cart {
		query := `INSERT INTO cart_item (cart_id, product_grade_id, price, qty, created_at, updated_at) VALUES ($1 , $2 , $3 , $4 , $5 , $6)`
		res := r.DB.Exec(query, item.CartID, item.ProductGradeID, item.Price, item.Qty, item.CreatedAt, item.UpdatedAt)
		if res.Error != nil {
			return models.Cart_Item{}, res.Error
		}
	}
	return cart[0], nil
}
