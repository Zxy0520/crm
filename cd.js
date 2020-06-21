const http = require('http')
let child_process = require('child_process')

let server = http.createServer()

server.on('request', function (req, resp) {
    console.log("接到一次推送")
    child_process.exec('./ci.sh', function (error, stdout, stderror) {
        console.log(stdout)
    })
    resp.end("receive one push")
})
server.listen(3001, function () {
    console.log("持续集成服务器已在3001端口启动")
})