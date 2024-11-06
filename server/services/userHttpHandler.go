package services

import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
)

type User struct {
	Repo internal.Iinternal
}

func (r *User) GetUser(res http.ResponseWriter, req *http.Request) {
	userID := req.URL.Query().Get("id")
	if userID == "" {
		http.Error(res, "Missing user ID", http.StatusBadRequest)
		return
	}
	user, err := r.Repo.GetUser(userID)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(user)
}
