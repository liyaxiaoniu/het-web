const { getBabelLoader } = require('./script-helper')
const { isPro } = require('@rg-wp/share')
/**
 * 获取ts Rule
 * @param options
 * @returns
 */
function getTsRule(options = {}) {
  return {
    // test: /\.(ts|tsx)$/,
    test: options.jsx ? /\.(ts|tsx)$/ : /\.ts$/,
    // include: paths.appSrc,
    use: [
      getBabelLoader(options), //
      getTsLoader(options),
    ],
  }
}
exports.getTsRule = getTsRule

/**
 * webpack直接使用ts rule
 * @param config
 * @param options
 */
function useTs(config, options = {}) {
  const { module } = config
  module.rules.push(getTsRule(options))
}
exports.useTs = useTs

/**
 * 使用jsts解析
 */
function useJsTs(config, options = {}) {
  const babelloader = getBabelLoader(options)
  const tsRule = {
    test: options.jsx ? /\.(ts|tsx)$/ : /\.ts$/,
    use: [babelloader, getTsLoader(options)],
  }
  const jsRule = {
    test: options.jsx ? /\.(js|jsx)$/ : /\.js$/,
    use: [babelloader],
  }
  const { module } = config
  module.rules.push(tsRule)
  module.rules.push(jsRule)
}
exports.useJsTs = useJsTs

/**
 * 获取tsloader
 * @returns
 */
function getTsLoader(options) {
  return {
    loader: require.resolve('ts-loader'),
    options: {
      transpileOnly: true,
      happyPackMode: isPro, // 开启多线程打包
      appendTsxSuffixTo: ['\\.vue$'],
    },
  }
}
exports.getTsLoader = getTsLoader
