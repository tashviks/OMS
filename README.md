Loom Video For project walkthrough :
https://www.loom.com/share/178d057bb32749cbaab44d745c225fea?sid=93008614-9176-4672-83b5-b8a2e4c5036c

To run the backend server :

* Clone this repo

* Make sure you have postgreSQL set up.

* Use the dump.sql file in the root to create a databse with name inframarket. Also create a user tashvik
   * dsn config :  ``` user=tashvik password=Icici@5577 dbname=inframarket port=5432 sslmode=disable ```

* Install Golang from
  ``` https://go.dev/doc/install ```

* Go to  ```OMS/server``` and open this in a terminal

* Run the commanf ``` go run main.go ``` to start the server and wait for the server to start.

* Now, in a new terminal window, copy and paste the given command
      ``` ngrok tunnel --label edge=edghts_2qWsJ5bP1lONNNFT1oamdp8AwCH http://localhost:8080 ```
  This will create a tunnel from your localhost:8080 to the web using ngrok exposing the backend.

   
