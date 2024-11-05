package main

import (
	"fmt"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/services"
	"tashvik-oms/server/internal"
	"gorm.io/gorm"
)

var DB *gorm.DB


func main() {

	
	fmt.Println("Connected to database")
	repo := internal.Repo{DB : database.InitDB()}
	product := services.Product{Repo: &repo}

	http.HandleFunc("/GetProducts", product.GetProducts)
	
	http.HandleFunc("/UpdateCartItems", services.UpdateCartItems)
	http.HandleFunc("/GetCart", services.GetCart)
	http.HandleFunc("/GetCartItem", services.GetCartItem)
	http.HandleFunc("/PostOrders", services.PostOrders)
	http.HandleFunc("/PostOrderLine", services.PostOrderLine)
	http.HandleFunc("/GetAddress", services.GetAddress)
	http.HandleFunc("/GetGrade", services.GetGrade) // get the unique grade of a product
	http.HandleFunc("/GetUser", services.GetUser)

	fmt.Println("Starting server on port 8080")

	http.ListenAndServe(":8080", nil)

}
