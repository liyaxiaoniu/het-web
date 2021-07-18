const { isDev, appDist } = require('@rg-wp/share')

// 出口配置
function useOutput(config, options = {}) {
  const obj = {
    path: appDist,
    // 告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。此选项默认值是 false，并且不应该用于生产环境(production)，但是对阅读开发环境(development)中的生成代码(generated code)极其有用。
    // pathinfo: isDev,
    // clean: true,
    publicPath: '/', // 必须使用绝对路径, 否则子应用二级目录在开发环境不生效
    // library: `${name}-[name]`,
    // library: `vue-app`,
    // libraryTarget: 'umd',
  }
  if (isDev) {
    obj.filename = '[name].bundle.js'
    obj.chunkFilename = '[name].chunk.js'
  } else {
    const dirPath = `${options.context || 'static'}/js`
    obj.filename = `${dirPath}/[name].[contenthash:8].js`
    obj.chunkFilename = `${dirPath}/[name].[contenthash:8].chunk.js`
  }
  config.output = obj
}
exports.useOutput = useOutput
