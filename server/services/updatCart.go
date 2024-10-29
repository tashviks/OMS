package services
import (
	"encoding/json"
	"net/http"
	"tashvik-oms/server/database"
	"tashvik-oms/server/models"
	"time"
    "fmt"
)
func UpdateCartItems(w http.ResponseWriter, r *http.Request) {
    var req []models.Cart_Item
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }
    db := database.DB
    for _, item := range req {
        query := `INSERT INTO cart_item (cart_id, product_grade_id, price, qty, created_at, updated_at , id) VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7)`
        fmt.Println(item)
        res := db.Exec(query, item.CartID, item.ProductGradeID  , item.Price, item.Qty, time.Now(), time.Now() , item.ID)
        if res.Error != nil {
            fmt.Println(res.Error)
            http.Error(w, "Failed to update cart items", http.StatusInternalServerError)
            return
        }
    }
 }

// Sample request JSON to hit this endpoint
/*
[
    {
        "CartID": 1,
        "ProductGradeID": 1,
        "Price": 299.99,
        "Qty": 2,
        "CreatedAt": "2024-10-28T15:30:00",
        "UpdatedAt": "2024-10-28T16:00:00"
    }
]
*/
