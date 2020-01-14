const koa = require('koa')

const app = new koa()

// 引入views 中间件
const views = require('koa-views')

// 引入path 模块
const path = require('path')

app.use(views(path.join(__dirname, './view'), { extension: 'ejs' }))

app.use(async (ctx) => {
    let title = 'ejs'
    await ctx.render('index', {
        title
    })
})

// 监听
app.listen(9999, () => {
    console.log('port 9999')
})