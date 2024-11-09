package models

type Address struct {
	ID         int    `json:"id" gorm:"primaryKey"`
	FirstLine  string `json:"first_line"`
	SecondLine string `json:"second_line"`
	City       string `json:"city"`
	State      string `json:"state"`
	Country    string `json:"country"`
	Pincode    int    `json:"pincode"`
	UserID     int    `json:"user_id"`
	Heading    string `json:"heading"`
}

func (Address) TableName() string {
	return "address"
}
