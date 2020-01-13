const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new koa()
app.use(bodyParser())

app.use(async (ctx) => {
    //当请求时GET请求时，显示表单让用户填写
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        //当请求时POST请求时
        // ctx.body = await parsePostData(ctx)
        ctx.body = ctx.request.body
    } else {
        // 其他404
        ctx.body = `404`
    }
})

app.listen(9999, () => {
    console.log(`port: ${9999}`)
})


// // 处理post 请求参数

// function parsePostData(ctx) {
//     return new Promise((resolve, reject) => {
//         try {
//             let postData = ''
//             // 监听data数据
//             ctx.req.addListener('data', (data) => {
//                 postData += data
//             })
//             ctx.req.on('end', () => {
//                 resolve(parseQueryStr(postData))
//             })
//         } catch(error){
//             reject(error)
//         }
//     })
// }

// // 将post 的数据格式化为数组

// function parseQueryStr (str) {
//     let queryData = {}
//     let strArrList = str.split('&')
//     strArrList.map(item => {
//         let itemArr = item.split('=')
//         queryData[itemArr[0]] = decodeURIComponent(itemArr[1])
//     })
//     return queryData
// }