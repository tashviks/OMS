package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/internal"
)
type Grade struct {
	Repo internal.Iinternal
}
func (r *Grade) GetGrade(res http.ResponseWriter, req *http.Request) {
	productID := req.URL.Query().Get("id")
	grade := req.URL.Query().Get("grade")
	bagSize := req.URL.Query().Get("bag_size")
	if productID == "" || grade == "" || bagSize == "" {
		http.Error(res, "Missing product ID, grade, or bag size", http.StatusBadRequest)
		return
	}
	grades, err := r.Repo.GetGrade(productID, grade, bagSize)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.Header().Set("Content-Type", "application/json")
	json.NewEncoder(res).Encode(grades)
}