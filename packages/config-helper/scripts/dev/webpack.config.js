const { webpack, merge } = require('@rg-wp/config')
const baseConfig = require('../webpack.base.config')

const config = merge(baseConfig, {
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = config
