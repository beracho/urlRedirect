# README #

ULR shortener server, it saves URLs related to it's shortened version, and returns the complete URL from the shortened one.

For one side if sent a shorthand it overwrites a possible existing one, on the other side if shorthand is ommited on petition, it generates a non existing string to save the original string in.

### What is this repository for? ###

* Post service loading URL and an optional shortened version, returning the shortened version of the URL
To test, send POST with the following information
default route: 127.0.0.1:4000/api/create
headers: {
  Content-Type: application/json,
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.TvQwNo9_k_Cto__CBCwi4PGaBmUB3ahw7w32pb7eqyQ
}

body: {
	"original_url": "https://google.com/?q=this%20is%20another%20really%20long%20url%20that%20should%20have%20been%20shotened",
	"shorthand": "shortgoogle"
}

* Get the complete URL from the shortened version
To test, send GET to: 127.0.0.1:4000/shortgoogle

* 1.0.0

### How do I get set up? ###

Run the following commands
* npm install 
* npm run start

### Who do I talk to? ###

Developed by: Adrian Marcelo Berazaín Mallea
email: b.beracho@gmail.com