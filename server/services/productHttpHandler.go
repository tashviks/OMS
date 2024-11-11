package services

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"tashvik-oms/server/internal"
)

type Product struct {
	Repo internal.Iinternal
}

func (r *Product) GetProducts(res http.ResponseWriter, req *http.Request) {
	offset := req.URL.Query().Get("offset")
	convertedOffset, err := strconv.Atoi(offset)
	log.Println("Offset:", convertedOffset , err)
	products, err := r.Repo.GetProducts(convertedOffset)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(products)
}