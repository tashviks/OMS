package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
	"fmt"
)
func PostOrderLine(w http.ResponseWriter , r *http.Request){
	var req []models.OrderLine
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		fmt.Print(err)
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}
	fmt.Println(req)
	db := database.DB
	for _, order := range req {
		query := `INSERT INTO order_line (order_id, product_grade_id, price, qty) VALUES ($1 , $2 , $3 , $4)`
		fmt.Println(order)
		res := db.Exec(query, order.OrderID, order.ProductGradeID, order.Price, order.Qty)
		if res.Error != nil {
			fmt.Println(res.Error)
			http.Error(w, "Failed to update order line", http.StatusInternalServerError)
			return
		}
	}
}
