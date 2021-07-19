const { webpack } = require('@rg-wp/config')

const { useCssLess } = require('@rg-wp/config/rg-css')
const { useVue2 } = require('@rg-wp/config/rg-vue2')
const { useJs } = require('@rg-wp/config/rg-script')
const { useOutput } = require('@rg-wp/config/rg-output')
const { useImg } = require('@rg-wp/config/rg-file')

const { useResolve } = require('@rg-wp/config/rg-resolve')
const { useExternals } = require('@rg-wp/config/rg-externals')
const {
  useDefinePlugin,
  useHtmlPlugin, //
  useBundleAnalyzerPlugin,
  useManifestPlugin,
} = require('@rg-wp/config/rg-plugins')
const { isPro, nodeEnv, resolveSrc, appDist } = require('@rg-wp/share')
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin

const config = {
  mode: nodeEnv,
  // devtool: 'source-map',
  // devtool: false,
  target: 'web',
  entry: {
    main: resolveSrc('index.ts'),
    // main: resolveSrc('test/index.ts'),
  },

  module: { rules: [] },
  plugins: [
    // webpack5 模块联邦
    new ModuleFederationPlugin({
      // filename: 'remoteEntry.js',
      remotes: {
        vendor: `wqd_vendor@http://localhost:4000/__wqd_vendor__.js?t=3243424`, //cdn地址
      },
    }),
  ],
}

useCssLess(config)
useJs(config, { jsx: false, decorators: false })
useOutput(config)
useVue2(config)
useImg(config)

useResolve(config)
// useExternals(config)
// useHtmlPlugin(config)
useDefinePlugin(config)

// console.log('config', config)

module.exports = config
