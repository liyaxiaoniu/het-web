/** javascipt 相关配置 */
const { getBabelLoader } = require('./script-helper')

/**
 * 获取jsRule
 * @param options
 * @returns
 */
function getJsRule(options = {}) {
  return {
    test: options.jsx ? /\.(js|jsx)$/ : /\.js$/,
    use: [getBabelLoader(options)],
  }
}
exports.getJsRule = getJsRule

/**
 * webpack直接使用js rule
 * @param config
 * @param options
 */
function useJs(config, options) {
  const { module } = config
  module.rules.push(getJsRule(options))
}
exports.useJs = useJs
