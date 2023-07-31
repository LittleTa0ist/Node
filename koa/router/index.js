const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path=require('path')
const useRouter = require('./user')
const listRouter = require('./list')
router.use('/user', useRouter.routes(), useRouter.allowedMethods())
router.use('/list', listRouter.routes(), listRouter.allowedMethods())
router.get('/home', async (ctx) => {
    // let content = await fs.readFileSync(path.join(__dirname,'../public','home.html'), "utf8")
    // 不使用__dirname的时候，路径是相对于项目启动时所在的路径，所以应该写成./而不是../
    let content = await fs.readFileSync('./public/home.html', "utf8")
    ctx.body = content
})
router.redirect('/', '/home')
module.exports = router