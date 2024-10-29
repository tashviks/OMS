package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
	"fmt"
	
)
func PostOrders(w http.ResponseWriter , r *http.Request){
	var req models.Order
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}
	fmt.Println(r.Body)
	db := database.DB
		order := req
		if err := db.Create(&order).Error; err != nil {
			http.Error(w, "Failed to create order", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(order)
	
}

