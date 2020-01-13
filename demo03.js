const koa = require('koa')
const fs = require('fs') // 文档模块

const app = new koa()

app.use(async (ctx) => {
    const utl = ctx.request.url
    ctx.body = await route(utl)
})

app.listen(9999)

// 分配页面

async function route(url) {
    let page = '404.html'
    switch (url) {
        case '/todo':
            page = 'todo.html'
            break
        case '/':
            page = 'index.html'
            break
        case '/index':
            page = 'index.html'
            break
        default:
            break
    }

    return await render(page)
}

// 读取并且返回响应页面

async function render(page) {
    return new Promise((resolve, reject) => {
        let url = `./page/${page}`
        fs.readFile(url, 'binary', (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}