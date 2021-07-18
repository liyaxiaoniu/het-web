const { writeFileSync } = require('fs')
const { appDist } = require('@rg-wp/share')
const key = '__wqd_app_loader__'

/**
 * 微前端子应用Manifest插件
 */
class WqdManifestWebpackPlugin {
  apply(compiler) {
    const hookOptions = {
      name: 'WqdWebpackPlugin',
      stage: Infinity,
    }

    compiler.hooks.thisCompilation.tap(hookOptions, (compilation) => {
      compilation.hooks.processAssets.tap(hookOptions, (assets) => {
        const entrypointsArray = Array.from(compilation.entrypoints.entries())
        const entrypoints = entrypointsArray.reduce(
          (e, [name, entrypoint]) =>
            Object.assign(e, { [name]: entrypoint.getFiles() }),
          {},
        )
        const entrypointFiles = entrypoints.main.filter(
          (fileName) => !fileName.endsWith('.map'),
        )
        // 组装数据
        const data = {
          entrypointFiles,
        }
        const content = `window['${key}']=${JSON.stringify(data)}`

        writeFileSync(`${appDist}/${key}.js`, content)
      })
    })
  }
}

/**
 * 获取微前端子应用Manifest插件
 * 用于生成__wqd_app_loader__.js文件, 方便基座应用调用
 * @param {*} options
 */
function getWqdMainiFestPlugin(options = {}) {
  return new WqdManifestWebpackPlugin(options)
}
exports.getWqdMainiFestPlugin = getWqdMainiFestPlugin
