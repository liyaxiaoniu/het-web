const { webpack } = require('@rg-wp/config')
// const { useCssLess } = require('@rg-wp/config/rg-css')
const { useJsTs, useJs } = require('@rg-wp/config/rg-script')
// const { useVue2 } = require('@rg-wp/config/rg-vue2')

// const { useOutput } = require('@rg-wp/config/rg-output')
// const { useResolve } = require('@rg-wp/config/rg-resolve')
// const { useExternals } = require('@rg-wp/config/rg-externals')
// const { useFont } = require('@rg-wp/config/rg-file')
const {
  useDefinePlugin,
  useIgnorePlugin,
  // useHtmlPlugin,
  // useBundleAnalyzerPlugin,
  // useManifestPlugin,
} = require('@rg-wp/config/rg-plugins')
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin

const { appDist, nodeEnv, isPro } = require('@rg-wp/share')
const config = {
  mode: nodeEnv,
  bail: true,
  devtool: false,
  module: { rules: [] },
  entry: {},
  output: {
    path: appDist,
    chunkFilename: `${nodeEnv}/[name].[contenthash:8].chunk.js`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'wqd_vendor',
      // library: { type: 'var', name: 'vendor' },
      filename: '__wqd_vendor__.js',
      exposes: {
        './vue': './src/vue2.js',
        './vue-router': './src/vue-router',
        './axios': './src/axios',
        './moment': './src/moment.js',
        './lodash': './src/lodash.js',
      },
    }),
  ],
  optimization: {
    // minimize: true,
    minimize: isPro, // TODO
    // minimizer: [
    //   new (require('terser-webpack-plugin'))({
    //     extractComments: false,
    //   }),
    // ],
    moduleIds: 'named', // 模块id用相对路径
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 5,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {},
    },
  },
}

// rules
// useCss(config, { isMinCss: true, context: nodeEnv })
// useFont(config)
useJs(config, { jsx: false })
// useFont(config, { context: nodeEnv })

// plugins
useIgnorePlugin(config)
useDefinePlugin(config)
// console.log(config)
module.exports = config
