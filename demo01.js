const koa = require('koa')

const app = new koa()

app.use(async (ctx) => {
    const url = ctx.url


    // request 获取 query
    const req = ctx.request
    // query：返回的是格式化好的参数对象。
    const req_query = req.query
    // querystring：返回的是请求字符串
    const req_querystring = req.querystring
    

    // 直接从ctx 中获取
    const req_query1 = ctx.query
    const req_querystring1 = ctx.querystring


    ctx.body = {
        url,
        req_query,
        req_querystring,
        req_query1,
        req_querystring1
    }
})

// 监听
app.listen(9999, () => {
    console.log('port 9999')
})