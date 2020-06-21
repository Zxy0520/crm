const http = require('http')

let server = http.createServer((req, res) => {
    console.log("callback")
    res.end("hello")
});

server.listen(3000)