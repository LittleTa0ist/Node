const Router = require('koa-router')
const router = new Router()
router.get('/', (ctx) => {
    ctx.body = { ok: 1, msg: 'list get' }
})
    .post('/', ctx => {
        ctx.body = { ok: 1, msg: 'list post' }
    })
    .put('/:id', ctx => {
        ctx.body = { ok: 1, msg: 'list put' }
    })
    .delete('/:id', ctx => {
        ctx.body = { ok: 1, msg: 'list del' }
    })
module.exports=router