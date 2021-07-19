process.env.NODE_ENV = 'production'

const { appDist } = require('@rg-wp/share')
const { webpack, chalk, fs } = require('@rg-wp/config')

fs.emptyDirSync(appDist)

const config = require('./webpack.config')
const compiler = webpack(config, (err) => {
  if (err) console.log(err)
})
