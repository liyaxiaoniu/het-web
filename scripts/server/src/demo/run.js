const Koa = require('koa')
const app = new Koa()
const koaStatic = require('koa-static')
const { resolveApp } = require('../utils')
const chalk = require('chalk')
console.log(chalk.green(`执行文件: ${__filename}`))

// const history = require('koa-connect-history-api-fallback')
// const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const distDir = resolveApp('../../packages/wqd-demo/dist')
console.log(`静态文件路径: ${distDir}`)
app.use(koaStatic(distDir))

const port = 9001
app.listen(port, () => {
  console.log(chalk.cyan(`服务器已启动，http://localhost:${port}`))
})
