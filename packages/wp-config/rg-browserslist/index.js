const browserslist = require('browserslist')

exports.getTargets = function getTargets(opitons = []) {
  const strs = [
    // '',
    // '> 1%',
    // 'edge>89',
    // 'defaults', // 表示> 0.5%, last 2 versions, Firefox ESR, not dead
    // 'last 2 versions',
    // 'not dead',
    'chrome>=89',
    // 'chrome>=66',

    ...opitons,
  ]
  return browserslist(strs)
}
