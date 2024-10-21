package main

import (
	"fmt"
	"time"
)


func main() {
	InitDB()
	fmt.Println("Connected to database")
	user := User{
		id : 1,
		firstName : "Tashvik",
		lastName: "Srivastava",
		email: "tashvik@gmail.com",
		password : "123456",
		addressId : 1,
		createdBy : time.Now(),
		modifiedBy : time.Now(),
	}
	err := AddUser(user)
	if err != nil {
		fmt.Println("Failed to add user:", err)
	}else{
	fmt.Println("User added successfully")
	}
}