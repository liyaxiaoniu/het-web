const webpack = require('webpack')
const { isPro, isDev } = require('@rg-wp/share')

/**
 * webpack 使用 define Plugin
 * @param {*} config
 * @param {*} options
 */
function useDefinePlugin(config, options = {}) {
  const { plugins } = config

  plugins.push(getDefinePlugin(options))
}
exports.useDefinePlugin = useDefinePlugin

/**
 * 获取Webpack Define Plugin
 * @param {*} options
 * @returns
 */
function getDefinePlugin(options = {}) {
  return new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    __DEV__: JSON.stringify(isDev),
    __PRO__: JSON.stringify(isPro),
  })
}
exports.getDefinePlugin = getDefinePlugin
