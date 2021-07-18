process.env.NODE_ENV = 'development'
const {
  webpack,
  WebpackDevMiddleware,
  express,
  chalk,
} = require('@rg-wp/config')
const config = require('./webpack.config')

const app = express()

const compiler = webpack(config)
const middleware = WebpackDevMiddleware(compiler, {
  // 这里是对 webpackDevMiddleware 的一些配置，具体其他配置我们下面已经列出来了。
  // 绑定中间件的公共路径,与webpack配置的路径相同
  // publicPath: config.output.publicPath,
  // quiet: true, //向控制台显示任何
  // serverSideRender: true,
})

app.use(middleware)

const PORT = 9000
app.listen(PORT, function (err) {
  if (err) return console.log(err)
  console.log(chalk.cyan('成功启动：localhost:' + PORT))
})
