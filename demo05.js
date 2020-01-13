const koa = require('koa')
const Route = require('koa-router')
const app = new koa()
const router = new Route({
    // 简单设置层级
    prefix: '/xu'
})

// 设置路由页面

router
    .get('/', (ctx, next) => {
        ctx.body = '哈哈.koa-router'
    })
    .get('/todo', (ctx, next) => {
        ctx.body = '哈哈.todo'
    })


app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(9999)