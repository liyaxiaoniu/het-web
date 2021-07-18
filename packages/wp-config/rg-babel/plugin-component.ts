/**
 * 创建
 * @param {*} options
 * @returns
 */
export function create(options = {}) {
  return [
    require('babel-plugin-component'),
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk',
    },
  ]
}
