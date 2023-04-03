const http = require('http')
const {returnContent} =require('./module/returnContent')
// const server = http.createServer((req, res) => {
//     res.writeHead(200,{
        
//     })
//     res.write(`
//     <html>
//         <b>hello</b>
//     </html>
//     `)
//     res.end()
// }).listen(3000, () => {
//     console.log('server start at 127.0.0.1:3000');
// })
const server=http.createServer()
server.on('request',(req,res)=>{
    if(req.url==='/favicon.ico') return
    const content=returnContent(req.url)
    res.end(content)
})

server.listen(3000,()=>{
    console.log('success');
})