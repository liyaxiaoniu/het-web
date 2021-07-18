const { appHtml, isPro } = require('@rg-wp/share')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * wepack使用HTMLplugin
 * @param config
 * @param options
 */
function useHtmlPlugin(config, options = {}) {
  const { plugins } = config

  const index = plugins.findIndex(
    (plugin) => plugin.constructor === HtmlWebpackPlugin,
  )
  if (index > 0) {
    process.exit(
      new Error('已经使用了HtmlPlugin, 请检查是否重复设置htmlPlugin'),
    )
  }

  plugins.push(getHtmlPlugin(options))
}
exports.useHtmlPlugin = useHtmlPlugin

/**
 * 获取webpack htmlplugin
 * @param {*} options
 * @returns
 */
function getHtmlPlugin(options = {}) {
  return new HtmlWebpackPlugin(getOptions(options))
}

/**
 * 获取html的options
 * @param opts
 * @returns
 */
function getOptions(opts) {
  const options = {
    template: appHtml,
    inject: 'body',

    // templateParameters: function() {
    // },
  }
  if (isPro) {
    Object.assign(options, {
      minify: false, // TODO:
      // removeComments: false,
      // collapseWhitespace: false,
      // removeRedundantAttributes: false,
      // useShortDoctype: false,
      // removeEmptyAttributes: false,
      // removeStyleLinkTypeAttributes: false,
      // keepClosingSlash: false,
      // minifyJS: false,
      // minifyCSS: false,
      // minifyURLs: false,
    })
  }
  Object.assign(options, opts)
  // console.log('htmlPluginOptions', options)

  return options
}
