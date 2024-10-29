package services

import (
    "encoding/json"
    "net/http"
    "tashvik-oms/server/database"
    "tashvik-oms/server/models"
)

func GetProducts(res http.ResponseWriter , req *http.Request) {
    var products []models.Product
    result := database.DB.Find(&products)
	if result.Error != nil {
		http.Error(res, "Error fetching products", http.StatusInternalServerError)
		return
	}
    res.Header().Set("Content-Type", "application/json")
    json.NewEncoder(res).Encode(products)
}