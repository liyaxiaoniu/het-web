process.env.NODE_ENV = 'development'
const devServerConfig = require('./webpackDevServer.config')
const config = require('./webpack.config')
const { webpack, WebpackDevServer, chalk } = require('@rg-wp/config')

const compiler = webpack(config)

const devServer = new WebpackDevServer(compiler, devServerConfig)

const PORT = 3000
devServer.listen(PORT, '0.0.0.0', (err) => {
  if (err) throw err

  console.log(chalk.cyan('Starting the development server...\n'))
  // openBrowser(urls.localUrlForBrowser)
})
