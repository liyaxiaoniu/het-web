// const { isDev } = require('@rg-wp/share')

function useExternals(config) {
  config.externals = {
    vue: '__vendor__.vue',
    'vue-router': `__vendor__['vue-router']`,
    axios: '__vendor__.axios',
  }
}
exports.useExternals = useExternals
