const http = require('http')
const https = require('https')
const { json } = require('stream/consumers')
const url = require('url')
const server = http.createServer()

// 发送get请求
function getData(fn) {
    let data = ''
    https.get('https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4', res => {
        res.on('data', chunk => data += chunk)
        res.on('end', () => {
            // const {data:{hot}}=data
            const hot = JSON.parse(data).data.hot
            fn(JSON.stringify(hot))
        })
    })
}
// https://m.xiaomiyoupin.com/mtop/market/search/placeHolder
// 发送post请求
function getPost(fn) {
    let data = ''
    let options = {
        hostname: 'm.xiaomiyoupin.com',
        port: "443",
        path: "/mtop/market/search/placeHolder",
        method: "POST"
    }
    req=https.request(options, res => {
        res.on('data', chunk => data += chunk)
        res.on('end', () => {
            // const {data:{hot}}=data
            fn(data)
        })
    })
    req.end(JSON.stringify([{}, { "baseParam": { "ypClient": 1 } }]))
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
            getData(data => res.end(data))
            break
        case '/api/xiaomi':
            getPost(data => res.end(data))
            break
        default:
            res.end('welcome')
    }

})
server.listen(3000, () => 'server start at 127.0.0.1:3000')