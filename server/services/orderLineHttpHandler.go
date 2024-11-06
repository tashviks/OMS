package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
	"tashvik-oms/server/models"
)
type OrderLine struct {
	Repo internal.Iinternal
}
func (r *OrderLine) PostOrderLine(res http.ResponseWriter, requ *http.Request) {
	var req []models.OrderLine
	if err := json.NewDecoder(requ.Body).Decode(&req); err != nil {
		http.Error(res, "Invalid request payload", http.StatusBadRequest)
		return
	}
	orderLine, err := r.Repo.PostOrderLine(req)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusCreated)
	json.NewEncoder(res).Encode(orderLine)
}