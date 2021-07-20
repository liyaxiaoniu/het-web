const { webpack, merge } = require('@rg-wp/config')
const baseConfig = require('../webpack.base.config')

const config = merge(baseConfig, {
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    // // new webpack.HotModuleReplacementPlugin(),
    // new ModuleFederationPlugin({
    //   // filename: 'remoteEntry.js',
    //   remotes: {
    //     vendor: `wqd_vendor@http://localhost:4000/__wqd_vendor__.js?t=3243424`, //cdn地址
    //   },
    // }),
  ],
})

module.exports = config
