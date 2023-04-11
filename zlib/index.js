const fs = require('fs')
const http = require('http')
const zlib = require('zlib')
const gzip = zlib.createGzip()

const server = http.createServer()
server.on("request", (req, res) => {
    const readStream = fs.createReadStream('./content.js')
    res.writeHead(200, {
        "Content-Type": "application/x-javascript;charset=utf-8",
        "Content-Encoding": "gzip"
    })
    readStream.pipe(gzip).pipe(res)
})
server.listen(3000, () => console.log("127.0.0.1:3000"))