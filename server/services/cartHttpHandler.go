package services

import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
)

type Cart struct {
	Repo internal.Iinternal
}

func (r *Cart) GetCart(res http.ResponseWriter, req *http.Request) {
	userID := req.URL.Query().Get("id")
	if userID == "" {
		http.Error(res, "Missing user ID", http.StatusBadRequest)
		return
	}
	cart, err := r.Repo.GetCart(userID)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(cart)
}
