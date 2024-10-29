package main

import (
	"fmt"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
	"tashvik-oms/server/services"

	"gorm.io/gorm"
)

var DB *gorm.DB

type Product models.Product

func main() {
	database.InitDB()
	fmt.Println("Connected to database")
	
	http.HandleFunc("/products", services.GetProducts)
	http.HandleFunc("/UpdateCartItems", services.UpdateCartItems)
	http.HandleFunc("/GetCart", services.GetCart)
	http.HandleFunc("/PostOrders", services.PostOrders)
	http.HandleFunc("/PostOrderLine", services.PostOrderLine)
	http.HandleFunc("/GetAddress", services.GetAddress)
	http.HandleFunc("/GetGrade", services.GetGrade)

	fmt.Println("Starting server on port 8080")
	http.ListenAndServe(":8080", nil)
}
