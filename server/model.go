package main
import (
	"time"
	"fmt"
	
)

type User struct {
    id         int       `db:"id"`
    firstName  string    `db:"firstName"`
    lastName   string    `db:"lastName"`
    email      string    `db:"email"`
    password   string    `db:"password"`
    addressId  int       `db:"addressId"`
    createdBy  time.Time `db:"createdBy"`
    modifiedBy time.Time `db:"modifiedBy"`
}
func AddUser(user User) error {
	
}
