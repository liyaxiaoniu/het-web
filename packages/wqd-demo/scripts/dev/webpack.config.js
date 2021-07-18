const { webpack, merge } = require('@rg-wp/config')
const baseConfig = require('../webpack.base.config')

// const { resolveSrc, nodeEnv } = require('@rg-wp/share')

const config = merge(baseConfig, {
  // devtool: 'inline-source-map',
  devtool: 'inline-cheap-module-source-map',

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = config
