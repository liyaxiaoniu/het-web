// const { webpack } = require('@rg-wp/config')

const { useCssLess } = require('@rg-wp/config/rg-css')
const { useVue2 } = require('@rg-wp/config/rg-vue2')
const { useJs } = require('@rg-wp/config/rg-script')
// const { useOutput } = require('@rg-wp/config/rg-output')
const { useImg } = require('@rg-wp/config/rg-file')

const { useResolve } = require('@rg-wp/config/rg-resolve')
// const { useExternals } = require('@rg-wp/config/rg-externals')
const {
  useDefinePlugin,
  // useHtmlPlugin, //
  // useBundleAnalyzerPlugin,
  // useManifestPlugin,
} = require('@rg-wp/config/rg-plugins')
const { isPro, nodeEnv, resolveSrc, appDist } = require('@rg-wp/share')
// const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin

const config = {
  mode: nodeEnv,
  // devtool: 'source-map',
  // devtool: false,
  // target: 'web',
  entry: {
    main: resolveSrc('index.js'),
  },
  output: {
    path: appDist,
    publicPath: '/',
    filename: 'index.js',
  },
  module: { rules: [] },
  plugins: [],
}

useCssLess(config)
useJs(config, { jsx: false, decorators: false })
// useOutput(config)
useVue2(config)
useImg(config)

useResolve(config)
// useExternals(config)
// useHtmlPlugin(config)
useDefinePlugin(config)

// console.log('config', config)

module.exports = config
