const koa = require('koa')
const Route = require('koa-router')
const app = new koa()



// 设置home路由页面
let home = new Route()
home
    .get('/', async(ctx) => {
        ctx.body = '哈哈.koa-router'
    })
    .get('/todo', async(ctx) => {
        ctx.body = '哈哈.todo'
    })

// 设置page路由页面
let page = new Route()
page
    .get('/', async(ctx) => {
        ctx.body = '哈哈.koa-router'
    })
    .get('/todo', async(ctx) => {
        ctx.body = '哈哈.todo'
    })


// 父路由
const router = new Route()
    // 装载两个子路由
    router.use('/home', home.routes(), home.allowedMethods())
    router.use('/page', page.routes(), page.allowedMethods())

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(9999)