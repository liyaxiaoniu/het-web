const { declare } = require('@babel/helper-plugin-utils')
// const t = require('@babel/core').types
const chalk = require('chalk')
const name = 'rg-transform-babel-plugin'
const plugin = declare((api, options) => {
  api.assertVersion(7)
  const windowKey = options.window
  if (!windowKey) {
    console.error(chalk.red(`babel插件${name}没有指定参数window`))
    process.exit(new Error(windowKey))
  }
  return {
    name,
    visitor: {
      Identifier(path) {
        const { node } = path
        if (node.name === 'window') {
          node.name = windowKey
        }
      },
    },
  }
})
module.exports = plugin
