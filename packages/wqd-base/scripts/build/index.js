process.env.NODE_ENV = 'production'

const { resolveDist, appPublic, appDist, appHtml } = require('@rg-wp/share')
const { webpack, chalk, fs } = require('@rg-wp/config')

fs.emptyDirSync(appDist)
fs.copySync(appPublic, appDist, {
  dereference: true,
  filter: (file) => file !== appHtml,
})

const config = require('./webpack.config')
const compiler = webpack(config, (err) => {
  if (err) console.log(err)
})
