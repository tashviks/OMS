package services

import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
)

type Product struct {
	Repo internal.Iinternal
}
func (r *Product) GetProducts(res http.ResponseWriter, req *http.Request) {
	products, err := r.Repo.GetProducts()
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(products)
}
