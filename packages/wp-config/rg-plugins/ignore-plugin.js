const webpack = require('webpack')
// const { isPro, isDev } = require('@rg-wp/share')

/**
 * webpack 使用IgnorePlugin
 * @param {*} config
 * @param {*} options
 */
function useIgnorePlugin(config, options = {}) {
  const { plugins } = config

  plugins.push(getIgnorePlugin(options))
}
exports.useIgnorePlugin = useIgnorePlugin

/**
 * 获取IgnorePlugin
 * @param {*} options
 * @returns
 */
function getIgnorePlugin(options = {}) {
  return new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  })
}
exports.getIgnorePlugin = getIgnorePlugin
