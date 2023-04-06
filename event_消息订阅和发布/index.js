const http = require('http')
const https = require('https')
const url = require('url')
const server = http.createServer()
const {EventEmitter} = require("events")
let event = null
// 发送get请求
function getData() {
    let data = ''
    https.get('https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4', res => {
        res.on('data', chunk => data += chunk)
        res.on('end', () => {
            // const {data:{hot}}=data
            console.log(data);
            // const hot = JSON.parse(data).data.hot
            event.emit('play', data)
        })
    })
}

// 处理前端请求
server.on('request', (req, res) => {
    res.writeHead("200", {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    })
    let myUrl = url.parse(req.url, true)
    switch (myUrl.pathname) {
        case '/api/maoyan':
            // 需要每次每次new一次，否则之前订阅的play事件不会取消，会多次触发相同的play事件
            event = new EventEmitter()
            event.on('play', (data) => {
                res.end(data)
            })
            getData()
            break;
        case '/api/xiaomi':
            getPost(data => res.end(data))
            break;
        default:
            res.end('welcome')
    }

})
server.listen(3000, () => 'server start at 127.0.0.1:3000')