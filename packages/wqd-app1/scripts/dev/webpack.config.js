const { webpack, merge } = require('@rg-wp/config')
const baseConfig = require('../webpack.base.config')

const config = merge(baseConfig, {
  // devtool: 'cheap-module-source-map',
  devtool: 'inline-cheap-module-source-map',

  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 200,
  //   poll: 1000,
  //   ignored: ['**/node_modules'],
  // },

  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
})
module.exports = config
