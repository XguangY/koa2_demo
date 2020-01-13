const koa = require('koa')

const app = new koa()

app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'name', 'xu', {
            domain: '127.0.0.1', // 写cookie所在的域名
            path: '/index',       // 写cookie所在的路径
            maxAge: 100000,   // cookie有效时长
            expires: new Date('2020-1-31'), // cookie失效时间
            httpOnly: false,  // 是否只用于http请求中获取
            overwrite: false  // 是否允许重写
        }
        )
        ctx.body = '写了个cookie'
    } else {
        if (ctx.cookies.get('name')) {
            ctx.body = ctx.cookies.get('name')
        } else {
            ctx.body = 'cookie is none'
        }
    }
})

// 监听
app.listen(9999, () => {
    console.log('port 9999')
})