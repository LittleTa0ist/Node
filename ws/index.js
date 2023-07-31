const { WebSocketServer } = require('ws')
const WebSocket  = require('ws')
// const webSocket = require('ws')
// WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 })
wss.on('connection', ws => {
    ws.on('message', data => {
        // console.log(data);
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState===WebSocket.OPEN) client.send(data, { binary: false })

        })
    })
    ws.send('hello')
}) 