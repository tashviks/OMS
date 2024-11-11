package main

import (
	"fmt"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/internal"
	"tashvik-oms/server/services"

	"gorm.io/gorm"
)

var DB *gorm.DB

func main() {
	fmt.Println("Connected to database")
	repo := internal.Database{DB: database.InitDB()}
	product := services.Product{Repo: &repo}
	address := services.Address{Repo: &repo}
	grade := services.Grade{Repo: &repo}
	orders := services.Orders{Repo: &repo}
	orderLine := services.OrderLine{Repo: &repo}
	user := services.User{Repo: &repo}
	cart := services.Cart{Repo: &repo}
	cartItem := services.CartItem{Repo: &repo}
	updateCartItem := services.UpdateCartItem{Repo: &repo}

	http.HandleFunc("/GetProducts", product.GetProducts)
	http.HandleFunc("/GetAddress", address.GetAddress)
	http.HandleFunc("/GetGrade", grade.GetGrade) // get the unique grade of a product
	http.HandleFunc("/PostOrders", orders.PostOrders)
	http.HandleFunc("/PostOrderLine", orderLine.PostOrderLine)
	http.HandleFunc("/GetUser", user.GetUser)
	http.HandleFunc("/GetCart", cart.GetCart)
	http.HandleFunc("/GetCartItem", cartItem.GetCartItem)
	http.HandleFunc("/UpdateCartItems", updateCartItem.UpdateCartItem)
	
	fmt.Println("Starting server on port 8080")
	fmt.Println("This is a samle message to test what I have done")
	http.ListenAndServe(":8080", nil)
}
