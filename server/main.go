package main
import (
	"fmt"
	"log"
	"encoding/json"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"net/http"
	"github.com/lib/pq"
	"time"
)
var DB *gorm.DB
type Product struct {
    ID           uint           `gorm:"primaryKey"`
    MRP          float64        `gorm:"not null"`
    Price        float64        `gorm:"not null"`
    Category     string         `gorm:"type:varchar(100);not null"`
    SKU          string         `gorm:"type:varchar(100);not null"`
    Name         string         `gorm:"type:varchar(255);not null"`
    Brand        string         `gorm:"type:varchar(100);not null"`
    Review       float64        `gorm:"type:float;not null"`
    Grade        pq.StringArray `gorm:"type:text[]"`
    BagSize      pq.StringArray `gorm:"type:text[]"`
    MinOrderQty  int            `gorm:"not null"`
    MaxOrderQty  int            `gorm:"not null"`
    InStock      int            `gorm:"not null"`
    Image        string         `gorm:"type:varchar(255);not null"`
    CreatedAt    time.Time      `gorm:"autoCreateTime"` 
    UpdatedAt    time.Time      `gorm:"autoUpdateTime"` 
}
func InitDB() {
    dsn := "host=localhost user=tashvik password=Icici@5577 dbname=inframarket port=5432 sslmode=disable"
    var err error
    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }  
	http.HandleFunc("/products", getProducts)
	http.ListenAndServe(":8080", nil)
	fmt.Println("Server running on port 8080")
}
func getProducts(w http.ResponseWriter, r *http.Request) {
	var products []Product
	result := DB.Find(&products)
	if result.Error != nil {
		log.Fatal("Error fetching products:", result.Error)
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}
func main() {
	InitDB()
	fmt.Println("Connected to database")
	http.HandleFunc("/products", getProducts)
	log.Fatal(http.ListenAndServe(":8080", nil))
}