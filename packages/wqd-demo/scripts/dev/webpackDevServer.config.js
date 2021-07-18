const { appDist } = require('@rg-wp/share')

module.exports = {
  compress: true,

  contentBase: [appDist],

  hot: true,

  // overlay: { warnings: false, errors: true },

  inline: true,

  // historyApiFallback: true,
}
