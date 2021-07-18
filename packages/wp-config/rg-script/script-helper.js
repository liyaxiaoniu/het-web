const { getBabelConfig } = require('../rg-babel')

/**
 * 获取babelLoader
 * @param options
 * @returns
 */
function getBabelLoader(options = {}) {
  const babelConfig = options.babelConfig || getBabelConfig(options)

  const babelLoaderOptions = {
    cacheDirectory: true,
    cacheCompression: false,
    compact: false,
    ...babelConfig,
  }
  return {
    loader: require.resolve('babel-loader'),
    options: babelLoaderOptions,
  }
}

exports.getBabelLoader = getBabelLoader
