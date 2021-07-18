process.env.NODE_ENV = 'development'
const {
  webpack,
  WebpackDevMiddleware,
  chalk,
  express,
} = require('@rg-wp/config')
const config = require('./webpack.config')

const app = express()

const compiler = webpack(config)

const middleware = new WebpackDevMiddleware(compiler, {
  //
})
app.use(middleware)

const PORT = 8000
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) return console.log(err)
  console.log(chalk.cyan('成功启动：localhost:' + PORT))
})
