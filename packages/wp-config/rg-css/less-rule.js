const { getCssRule } = require('./css-rule')

const {
  getCssExportLoader,
  getCssLoader,
  getPostcssLoader,
  useMiniCssPlugin,
  isUseMiniCss,
} = require('./helper')

/**
 * 获取less 规则
 * @param {*} options
 * @returns
 */
function getLessRule(options = {}) {
  const cssExportLoader = getCssExportLoader(options)
  const cssModulesLoader = getCssLoader({ ...options, modules: true })
  const postcssLoader = getPostcssLoader(options)
  const lessLaoder = getLessLoader(options)

  return {
    test: /\.less$/,
    // include: [paths.appSrc],
    oneOf: [
      {
        // 模块化less配置  index.module.less
        test: /\.module\.\w+$/,
        use: [cssExportLoader, cssModulesLoader, postcssLoader, lessLaoder],
      },
      {
        resourceQuery: /module/,
        use: [cssExportLoader, cssModulesLoader, postcssLoader, lessLaoder],
      },
      {
        // 普通的less 文件配置
        use: [
          cssExportLoader,
          getCssLoader({ ...options, modules: false }),
          postcssLoader,
          lessLaoder,
        ],
      },
    ],
  }
}
exports.getLessRule = getLessRule

/**
 * 使用css
 * @param config
 */
function useLess(config, options = {}) {
  const { module, plugins } = config
  module.rules.push(getLessRule(options))
  if (isUseMiniCss(options)) useMiniCssPlugin(plugins, options)
}
exports.useLess = useLess

/**
 * 使用css 和less
 * @param config
 */
function useCssLess(config, options = {}) {
  const { module, plugins } = config
  module.rules.push(getCssRule(options))
  module.rules.push(getLessRule(options))
  if (isUseMiniCss(options)) useMiniCssPlugin(plugins, options)
}
exports.useCssLess = useCssLess

/**
 * 获取 less loader
 * @param {*} options
 * @returns
 */
function getLessLoader(options) {
  return {
    loader: require.resolve('less-loader'),
    options: {
      sourceMap: false,
    },
  }
}
exports.getLessLoader = getLessLoader
