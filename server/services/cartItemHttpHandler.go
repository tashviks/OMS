package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
	"tashvik-oms/server/models"
)
type CartItem struct {
	Repo internal.Iinternal
}
func (r *CartItem) GetCartItem(res http.ResponseWriter, req *http.Request) {
	cartID := req.URL.Query().Get("id")
	if cartID == "" {
		http.Error(res, "Missing cart ID", http.StatusBadRequest)
		return
	}
	cartItems, err := r.Repo.GetCartItem(cartID)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(cartItems)
}

type UpdateCartItem struct {
	Repo internal.Iinternal
}
func (r *UpdateCartItem) UpdateCartItem(res http.ResponseWriter, requ *http.Request) {
	var req []models.Cart_Item
	if err := json.NewDecoder(requ.Body).Decode(&req); err != nil {
		http.Error(res, "Invalid request payload", http.StatusBadRequest)
		return
	}
	cartItem, err := r.Repo.UpdateCartItems(req)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusCreated)
	json.NewEncoder(res).Encode(cartItem)
}

