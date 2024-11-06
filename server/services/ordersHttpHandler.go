package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
	"tashvik-oms/server/models"
)
type Orders struct {
	Repo internal.Iinternal
}
func (r *Orders) PostOrders(res http.ResponseWriter, requ *http.Request) {
	var req models.Order
	if err := json.NewDecoder(requ.Body).Decode(&req); err != nil {
		http.Error(res, "Invalid request payload", http.StatusBadRequest)
		return
	}
	order, err := r.Repo.PostOrders(req)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusCreated)
	json.NewEncoder(res).Encode(order)
}