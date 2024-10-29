package models

type Address struct {
	ID         int    `json:"id" gorm:"primaryKey"`
	FirstLine  string `json:"first_line" gorm:"type:varchar(250)"`
	SecondLine string `json:"second_line" gorm:"type:varchar(250)"`
	City       string `json:"city" gorm:"type:varchar(50)"`
	State      string `json:"state" gorm:"type:varchar(50)"`
	Country    string `json:"country" gorm:"type:varchar(50)"`
	Pincode    int    `json:"pincode"`
	UserID     int    `json:"user_id"`
	Heading    string `json:"heading" gorm:"type:varchar(256)"`
}

func (Address) TableName() string {
	return "address"
}
