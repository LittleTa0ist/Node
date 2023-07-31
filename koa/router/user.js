const Router = require('koa-router')
const router = new Router()
router.get('/', (ctx) => {
    ctx.body = { ok: 1, msg: 'user get' }
})
    .post('/', ctx => {
        ctx.body = { ok: 1, msg: 'user post' }
    })
    .put('/:id', ctx => {
        ctx.body = { ok: 1, msg: 'user put' }
    })
    .delete('/:id', ctx => {
        ctx.body = { ok: 1, msg: 'user del' }
    })
module.exports=router
