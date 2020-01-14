const koa = require('koa')

// 引入views 中间件
const static = require('koa-static')

// 引入path 模块
const path = require('path')


const app = new koa()


// 限制静态路径
const staticPath = './static'

app.use(static(
    path.join(__dirname, staticPath)
))

app.use(async (ctx) => {
    ctx.body = 'koa-static'
})

// 监听
app.listen(9999, () => {
    console.log('port 9999')
})