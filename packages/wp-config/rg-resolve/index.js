const { appSrc } = require('@rg-wp/share')
/**
 * 使用webpack resolve
 * @param config
 */
function useResolve(config, options = {}) {
  config.resolve = {
    extensions: options.extensions || [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.vue',
      '.json',
    ],
    alias: {
      '@': appSrc,
      // packages: paths.appPackages,
    },
  }
}
exports.useResolve = useResolve
