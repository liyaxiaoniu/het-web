const { getTargets } = require('../rg-browserslist')
/**
 * 创建
 * @param {*} options
 * @returns
 */
function getPresetEnv(options = {}) {
  return [
    // '@babel/preset-env',
    require('@babel/preset-env').default,
    {
      targets: getTargets(),
      useBuiltIns: 'usage', // 按需加载引入项 结合core-js@3
      corejs: { version: '3', proposals: false },
      // corejs: 2,
      loose: true,
      // debug: true,
      // include: ['es.math.sign'],
      // exclude: [
      //   // 'proposal-class-properties',
      //   // 'proposal-export-namespace-from', //
      //   // 'proposal-optional-chaining', // 可选链obj?.foo?.bar?.baz()
      // ],
    },
  ]
}
exports.getPresetEnv = getPresetEnv
