const http = require ("http")
const { url } = require("inspector")

const server = http.createServer((request, response) => {

    console.log("El servidor tiene un request")
    console.log(request.url)

    response.write("Hola!");
    response.end();


})

server.listen(3000)