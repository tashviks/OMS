package services

import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
)

func GetCartItem(res http.ResponseWriter, req *http.Request) {
	var cartItem []models.Cart_Item
	cartID := req.URL.Query().Get("id")
	if cartID == "" {
		http.Error(res, "Missing cart ID", http.StatusBadRequest)
		return
	}
	result := database.DB.Where("cart_id = ?", cartID).Find(&cartItem)
	if result.Error != nil {
		http.Error(res, "Error fetching cart items", http.StatusInternalServerError)
		return
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(cartItem)
}
