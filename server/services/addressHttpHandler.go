package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
)
type Address struct {
	Repo internal.Iinternal
}
func (r *Address) GetAddress(res http.ResponseWriter, req *http.Request) {
	userID := req.URL.Query().Get("user_id")
	if userID == "" {
		http.Error(res, "Missing user_id parameter", http.StatusBadRequest)
		return
	}
	addresses, err := r.Repo.GetAddress(userID)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(addresses)
}