package services 
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
)
func GetAddress(w http.ResponseWriter , r *http.Request){
	var addresses []models.Address
	userID := r.URL.Query().Get("user_id")
	if userID == "" {
		http.Error(w, "Missing user_id parameter", http.StatusBadRequest)
		return
	}
	result := database.DB.Where("user_id = ?", userID).Find(&addresses)
	if result.Error != nil {
		http.Error(w, "Error fetching addresses", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(addresses)
}