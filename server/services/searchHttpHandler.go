package services

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"tashvik-oms/server/internal"
)

type ProductSearch struct {
	Repo internal.Iinternal
}

func (r *ProductSearch) SearchProducts(res http.ResponseWriter, req *http.Request) {
	query := req.URL.Query().Get("query")
	offset := req.URL.Query().Get("offset")
	if query == "" {
		http.Error(res, "Missing query", http.StatusBadRequest)
		log.Println("Missing query")
		return
	}
	if offset == "" {
		http.Error(res, "Missing offset", http.StatusBadRequest)
		log.Println("Missing offset")
		return
	}
	offsetInt, err := strconv.Atoi(offset)
	if err != nil {
		http.Error(res, "Invalid offset", http.StatusBadRequest)
		log.Println("Invalid offset")
		return
	}
	products, err := r.Repo.SearchProducts(query, offsetInt)
	if err != nil {
		log.Println("Error in SearchProducts : " + err.Error())
		res.WriteHeader(http.StatusInternalServerError)
		return
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(products)
}
