package services

import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
)

func GetGrade(res http.ResponseWriter , request *http.Request){
	var grades []models.ProductGrade
	productID := request.URL.Query().Get("id")
	grade := request.URL.Query().Get("grade")
	bagSize := request.URL.Query().Get("bag_size")

	if productID == "" || grade == "" || bagSize == "" {
		http.Error(res, "Missing product ID, grade, or bag size", http.StatusBadRequest)
		return
	}

	result := database.DB.Where("product_id = ? AND grade = ? AND bag_size = ?", productID, grade, bagSize).Find(&grades)

	if result.Error != nil {
		http.Error(res, "Error fetching grades", http.StatusInternalServerError)
		return
	}

	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(grades)
}