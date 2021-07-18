// const { paths, isPro } = require('@rg-wp/share')
// export * from './js'
// export * from './ts'
module.exports = {
  ...require('./script-helper'),
  ...require('./javascript'),
  ...require('./typescript'),
}
