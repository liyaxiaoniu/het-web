/**
 * 使用less
 * @param config
 */
function useFont(config, options) {
  const { module } = config
  module.rules.push(getFontRule(options))
}
exports.useFont = useFont

/**
 * 获取字体处理
 * @param context
 * @returns
 */
function getFontRule(options = {}) {
  const dirPath = `${options.context || 'static'}/font`
  return {
    test: /\.(eot|woff2?|ttf)$/,
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          name: '[name]-[hash:5].min.[ext]',
          limit: options.limit || 1000, // fonts file size <= 5KB, use 'base64'; else, output svg file
          // publicPath: `${dirPath}/`,
          outputPath: `${dirPath}/`,
        },
      },
    ],
  }
}
exports.getFontRule = getFontRule
