package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
	// "fmt"
)

func GetCart(res http.ResponseWriter , request *http.Request){
	var cart models.Cart;
	userID := request.URL.Query().Get("id")
	if userID == "" {
		http.Error(res, "Missing user ID", http.StatusBadRequest)
		return
	}
	result := database.DB.Where("user_id = ? AND status = ?", userID, 1).Find(&cart)
	if result.Error != nil {
		http.Error(res, "Error fetching cart", http.StatusInternalServerError)
		return
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(cart)
}