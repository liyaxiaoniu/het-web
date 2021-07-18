const { getPresetEnv } = require('./preset-env')
const { getPresetJsx } = require('./preset-jsx')
// import { create as createPluginComponent } from './plugin-component'
const { isDev, isPro } = require('@rg-wp/share')
/**
 * 获取babelconfig
 * @param {*} options
 * @returns
 */
exports.getBabelConfig = function getBabelConfig(
  options = {
    jsx: false,
    decorators: false,
    debug: false,
  },
) {
  const presets = []
  let plugins = []
  if (Array.isArray(options.plugins)) {
    plugins = [...options.plugins]
  }

  if (isPro) presets.push(getPresetEnv(options))

  // 支持vue的jsx语法
  if (options.jsx) presets.push(getPresetJsx(options))

  //解析装饰器语法
  if (options.decorators) {
    plugins.push(
      [
        require('@babel/plugin-proposal-decorators'), // 装饰器插件
        { legacy: true }, // 配置兼容老语法
      ],
      [
        require('@babel/plugin-proposal-class-properties'), // 类属性插件
        { loose: true }, //值为true的时候, class 语法的编译用assign的方式, 否则用 Object.defineProperty
      ],
    )
  }

  const config = {
    // webpack 打包的 library 是 module.exports 的方式，所以没添加这个配置时，使用 import 来加载 webpack 打包的 library 得到的是 undefined。
    sourceType: 'unambiguous',
    presets,
    plugins,
  }
  if (options.debug) console.log('babel config:', config)

  return config
}

exports.getPresetEnv = getPresetEnv
exports.getPresetJsx = getPresetJsx
