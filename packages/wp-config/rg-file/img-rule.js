/**
 * 使用解析规则
 * @param config
 */
function useImg(config, options) {
  const { module } = config
  module.rules.push(getImgRule(options))
}
exports.useImg = useImg

/**
 * 获取图片解析规则
 * @param {*} options
 * @returns
 */
function getImgRule(options = {}) {
  const dirPath = `${options.context || 'static'}/media`

  return {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: require.resolve('url-loader'),
    options: {
      limit: options.limit || 1000,
      name: `${dirPath}/[name].[hash:8].[ext]`,
    },
  }
}
exports.getImgRule = getImgRule
