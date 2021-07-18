/**
 * 使用less
 * @param config
 */
function useSvg(config, opitons = {}) {
  const { module } = config
  module.rules.push()
}
exports.useSvg = useSvg

/**
 * 获取svg规则
 * @param opitons
 * @returns
 */
function getSvgRule(opitons = {}) {
  return {
    test: /\.svg$/,

    // include: [paths.appSvg],
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
      {
        loader: require.resolve('vue-svg-loader'),
        // options: {},
      },

      // {
      //   loader: require.resolve('svg-sprite-loader'),
      //   options: {
      //     // symbolId: 'icon-[name]',
      //     // extract: true, // 单独文件导出
      //     // spriteFilename: (svgPath) => `sprite${svgPath.substr(-4)}`,
      //   },
      // },
    ],

    // oneOf: [
    //   {
    //     exclude: [paths.appSvg],
    //     use: [
    //       {
    //         loader: require.resolve('babel-loader'),
    //       },
    //       {
    //         loader: require.resolve('vue-svg-loader'),
    //         options: {
    //           // svgo: {
    //           //   plugins: [
    //           //     { removeDoctype: true },
    //           //     { removeComments: true },
    //           //     { removeViewBox: false },
    //           //   ],
    //           //   removeViewBox: false,
    //           // },
    //         },
    //       },
    //     ],
    //   },

    // ],
  }
}
exports.getSvgRule = getSvgRule
