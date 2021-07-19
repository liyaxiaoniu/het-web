process.env.NODE_ENV = 'development'
const config = require('./webpack.config')
const { webpack, chalk } = require('@rg-wp/config')

const compiler = webpack(config, (err) => {
  if (err) console.log(err)
})
