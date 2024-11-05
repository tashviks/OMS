package services

import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
)

func GetUser(w http.ResponseWriter , r *http.Request){
	var user models.User
	userID := r.URL.Query().Get("id")
	if userID == "" {
		http.Error(w, "Missing user ID", http.StatusBadRequest)
		return
	}
	result := database.DB.Where("id = ?", userID).Find(&user)
	if result.Error != nil {
		http.Error(w, "Error fetching user", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}