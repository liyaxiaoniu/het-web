const {
  getCssExportLoader,
  getCssLoader,
  getPostcssLoader,
  useMiniCssPlugin,
  isUseMiniCss,
} = require('./helper')

/**
 * 获取css规则
 * @param {*} options
 * @returns
 */
function getCssRule(options = {}) {
  const cssExportLoader = getCssExportLoader(options)
  const cssModulesLoader = getCssLoader({ ...options, modules: true })
  const postcssLoader = getPostcssLoader(options)

  return {
    test: /\.css$/,
    // include: [paths.appSrc],
    oneOf: [
      {
        test: /\.module\.\w+$/,
        use: [cssExportLoader, cssModulesLoader, postcssLoader],
      },
      {
        // vue.less?module .vue 文件里面的 模块化 css
        resourceQuery: /module/,
        use: [cssExportLoader, cssModulesLoader, postcssLoader],
      },
      {
        // 普通的css 文件配置
        use: [
          cssExportLoader,
          getCssLoader({ ...options, modules: false }),
          postcssLoader,
        ],
      },
    ],
  }
}
exports.getCssRule = getCssRule

/**
 * 使用css
 * @param config
 */
function useCss(config, options = {}) {
  const { module, plugins } = config
  module.rules.push(getCssRule(options))
  if (isUseMiniCss(options)) useMiniCssPlugin(plugins, options)
}
exports.useCss = useCss
