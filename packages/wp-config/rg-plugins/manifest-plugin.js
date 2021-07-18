// const { isPro, isDev } = require('@rg-wp/share')
/**
 * wepack 使用 ManifestPlugin
 * @param {*} config
 * @param {*} options
 */
function useManifestPlugin(config, options = {}) {
  const { plugins } = config
  plugins.push(getManifestPlugin(options))
}
exports.useManifestPlugin = useManifestPlugin

/**
 * 获取ManifestPlugin
 * @param {*} options
 * @returns
 */
function getManifestPlugin(options = {}) {
  return new (require('webpack-manifest-plugin').WebpackManifestPlugin)({
    fileName: 'static-manifest.json',
    generate: (seed, files, entrypoints) => {
      const manifestFiles = {}
      files.forEach(({ name, chunk, path }) => {
        if (!chunk) return
        manifestFiles[chunk.name] = path
      })
      // console.log(entrypoints, files)
      return { manifestFiles, entrypoints }
    },
  })
}
