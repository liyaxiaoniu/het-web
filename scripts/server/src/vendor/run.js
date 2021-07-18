// const nodemon = require('nodemon')
// nodemon
const Koa = require('koa')
const app = new Koa()
const koaStatic = require('koa-static')
const { resolveApp } = require('../utils')
const chalk = require('chalk')
console.log(chalk.green(`执行文件: ${__filename}`))

// 支持跨域
const cors = require('koa2-cors')
app.use(
  cors({
    origin: function (ctx) {
      //设置允许来自指定域名请求
      // if (ctx.url === '/test') {
      return '*' // 允许来自所有域名请求
      // }
      // return 'http://localhost:3000' //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 500, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], //设置获取其他自定义字段
  }),
)
// const history = require('koa-connect-history-api-fallback')
// const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const distDir = resolveApp('../../packages/wqd-vendor/dist')

// const conditional = require('koa-conditional-get')
// const etag = require('koa-etag')

// app.use(async (ctx, next) => {
//   ctx.set({
//     // 'Cache-Control': 'no-store',
//     'Cache-Control': 'max-age=300',
//     // 'Cache-Control': 'no-catch',
//     // 'Cache-Control': 'public',
//   })
//   await next()
// })

// 支持history 模式
// app.use(
//   historyApiFallback({
//     whiteList: ['/api'],
//   }),
// )

// app.use(conditional())

// app.use(etag())

console.log(`静态文件地址: ${distDir}`)
app.use(koaStatic(distDir))

const port = 4000
app.listen(port, () => {
  console.log(chalk.cyan(`服务器已启动，http://localhost:${port}`))
})
