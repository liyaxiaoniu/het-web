const { merge } = require('@rg-wp/config')
const baseConfig = require('../webpack.base.config')
const { getWqdMainiFestPlugin } = require('@rg-wp/config/rg-plugins')

module.exports = merge(baseConfig, {
  bail: true, // Stop compilation early in production
  devtool: false,
  plugins: [
    getWqdMainiFestPlugin(), // 微前端子应用插件
  ],
  optimization: {
    // minimize: true ,
    minimize: false, // TODO
    // usedExports: true,
    // Automatically split vendor and commons
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
          name: 'vendor/core-js',
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
    // https://github.com/facebook/create-react-app/issues/5358
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
})
