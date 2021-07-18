const { isDev, isPro } = require('@rg-wp/share')
const { getTargets } = require('../rg-browserslist')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.MiniCssExtractPlugin = MiniCssExtractPlugin

/**
 * css导出规则
 */

function getMiniCssLoader(options) {
  return {
    loader: MiniCssExtractPlugin.loader,
    options: {
      esModule: false,
    },
  }
}
exports.getMiniCssLoader = getMiniCssLoader

/**
 * style rule
 */
function getStyleLoader(options) {
  return {
    loader: require.resolve('style-loader'),
  }
}
exports.getStyleLoader = getStyleLoader

/**
 * css导出方式的规则
 * @param options
 * @returns
 */
function getCssExportLoader(options = {}) {
  if (isUseMiniCss(options)) return getMiniCssLoader(options)
  return getStyleLoader(options)
}
exports.getCssExportLoader = getCssExportLoader

/**
 * css加载处理方式
 */
function getCssLoader(options = {}) {
  return {
    loader: require.resolve('css-loader'),
    options: {
      sourceMap: false,
      esModule: false,
      modules: options.modules
        ? {
            localIdentName: '[name]_[local]_[hash:base64:5]',
          }
        : false,
      importLoaders: 2,
    },
  }
}
exports.getCssLoader = getCssLoader

/**
 * postcss加载处理方式
 */
function getPostcssLoader(opitons) {
  return {
    loader: require.resolve('postcss-loader'),
    options: {
      sourceMap: false,
      postcssOptions: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: getTargets(),
          }),
        ],
      },
    },
  }
}
exports.getPostcssLoader = getPostcssLoader

/**
 * 判断是否使用mini css
 * @param {*} options
 * @returns
 */
function isUseMiniCss(options = {}) {
  const isMiniCss = options.isMiniCss
  if (typeof isMinCss === 'boolean') return isMiniCss
  return options.isMiniCss || isPro
}
exports.isUseMiniCss = isUseMiniCss

/**
 * 使用MinicssPlugin
 * @param plugins
 */
function useMiniCssPlugin(plugins, options) {
  const isUse = plugins.some((plugin) => {
    return plugin.constructor === MiniCssExtractPlugin
  })
  if (!isUse) {
    const dirPath = `${options.context || 'static'}/css`
    plugins.push(
      new MiniCssExtractPlugin({
        experimentalUseImportModule: true,
        filename: `${dirPath}/[name].[contenthash:8].css`,
        chunkFilename: `${dirPath}/[name].[contenthash:8].css`,
      }),
    )
  }
}
exports.useMiniCssPlugin = useMiniCssPlugin
