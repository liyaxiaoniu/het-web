const Koa = require('koa')
const app = new Koa()
const koaStatic = require('koa-static')
const { resolveApp } = require('../utils')
const chalk = require('chalk')
console.log(chalk.green(`执行文件: ${__filename}`))

const distDir = resolveApp('../../packages/wqd-app1/dist')

console.log(distDir)
app.use(koaStatic(distDir))

const port = 8001
app.listen(port, () => {
  console.log(`服务器已启动，http://localhost:${port}`)
})
