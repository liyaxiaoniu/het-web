const { webpack } = require('@rg-wp/config')

const { useCssLess } = require('@rg-wp/config/rg-css')
const { useVue2 } = require('@rg-wp/config/rg-vue2')
const {
  useJsTs,
  getBabelLoader,
  getTsLoader,
  getTsRule,
} = require('@rg-wp/config/rg-script')
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
const { getBabelConfig } = require('@rg-wp/config/rg-babel')

const babelConfig = getBabelConfig({
  jsx: true,
  decorators: true,
  plugins: [
    [
      require('@rg-wp/config/rg-babel/plugins/var-change-babel-plugin'),
      { window: 'demo_window' },
    ],
  ],
})

const babelloader = getBabelLoader({ babelConfig })

const config = {
  mode: nodeEnv,
  // devtool: 'source-map',
  devtool: false,
  target: 'web',
  entry: {
    main: resolveSrc('index.ts'),
    // main: resolveSrc('test/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [babelloader, getTsLoader({})],
      },
      {
        test: /\.(js|jsx)$/,
        use: [babelloader],
      },
    ],
  },
  plugins: [],
}

useCssLess(config)
useOutput(config)
useVue2(config)
useImg(config)

useResolve(config)
useExternals(config)
useHtmlPlugin(config)
useDefinePlugin(config)

// console.log('config', config)

module.exports = config
