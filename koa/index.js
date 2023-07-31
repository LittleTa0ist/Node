const koa = require('koa')
const static = require('koa-static')
const path = require('path')
const app = new koa()

const router = require('./router')
app.use(static(path.join(__dirname, 'public')))
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log('server start at 127.0.0.1:3000')
}) 