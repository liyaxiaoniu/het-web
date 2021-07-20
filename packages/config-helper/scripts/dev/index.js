process.env.NODE_ENV = 'development'
const devServerConfig = require('./webpackDevServer.config')

const config = require('./webpack.config')
// const { appDist } = require('@rg-wp/share')
const { webpack, WebpackDevServer, chalk } = require('@rg-wp/config')

const compiler = webpack(config)

const devServer = new WebpackDevServer(compiler, devServerConfig)

const PORT = 5000
devServer.listen(PORT, '0.0.0.0', (err) => {
  if (err) throw err

  console.log(chalk.cyan('Starting the development server...\n'))
  // openBrowser(urls.localUrlForBrowser)
})

// fs.emptyDirSync(appDist)
// const compiler = webpack(config, (err) => {
//   if (err) console.log(err)
// })
