const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

/**
 * 使用webpack分析插件
 * @param {*} config
 */
function useBundleAnalyzerPlugin(config, options = {}) {
  const { plugins } = config
  plugins.push(getBundleAnalyzerPlugin(options))
}
exports.useBundleAnalyzerPlugin = useBundleAnalyzerPlugin

/**
 * 获取webpack分析插件
 * @param {*} options
 * @returns
 */
function getBundleAnalyzerPlugin(options = {}) {
  return new BundleAnalyzerPlugin({
    analyzerMode: 'static', // 生成report.html
    openAnalyzer: false, // 是否自动打开浏览器
    generateStatsFile: true,
    statsFilename: 'webpack-stats.json',
    // 控制那些资源应该被排除
    // excludeAssets: assetName => {
    //   console.log("assetName", assetName)
    //   return true
    // },
  })
}
exports.getBundleAnalyzerPlugin = getBundleAnalyzerPlugin
