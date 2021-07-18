const { webpack, merge } = require('@rg-wp/config')
const baseConfig = require('../webpack.base.config')

// const { isPro, nodeEnv, resolveSrc, appDist } = require('@rg-wp/share')

const config = merge(baseConfig, {
  bail: true, // Stop compilation early in production
  // devtool: 'source-map',
  devtool: false,
  optimization: {
    // minimize: true,
    minimize: false, // TODO
    // minimizer: [
    //   new (require('terser-webpack-plugin'))({
    //     extractComments: true,
    //   }),
    // ],
    moduleIds: 'named', // 模块id用相对路径
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      // chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        corejs: {
          minSize: 1,
          test: /[\\/]node_modules[\\/]core-js[\\/]/,
          name: 'core-js',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
})

// console.log('config', config)

module.exports = config
