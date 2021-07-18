/**
 * 创建
 * @param {*} options
 * @returns
 */
function getPresetJsx(options = {}) {
  return [
    require('@vue/babel-preset-jsx'),
    {
      vModel: true,
      vOn: false,
      compositionAPI: !!options.compositionAPI,
      functional: true,
      injectH: true, // 自动添加h
    },
  ]
}
exports.getPresetJsx = getPresetJsx
