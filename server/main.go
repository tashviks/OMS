package main

import (
	"log"
	"net/http"
)

func main(){
	db.Connect()

	router := routes.SetupRouter()
	log.Println("Server started on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}