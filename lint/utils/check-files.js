const { ESLint } = require('eslint')

/**
 * 检查文件是否有lint错误
 * @param {string[]} files 文件路径列表
 * @returns {boolean} 校验的结果
 */
exports.checkFiles = async function (files) {
  const instance = new ESLint({
    overrideConfigFile: 'lint/.eslintrc.js',
    ignorePath: 'lint/.eslintignore',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  })
  const results = await instance.lintFiles(files)
  // results = ESLint.getErrorResults(results)
  let isValid = true
  results.forEach(({ filePath, messages, errorCount, warningCount }) => {
    if (errorCount === 0 && warningCount === 0) return
    isValid = false
    console.log(filePath)
    console.log(`error: ${errorCount}, warning: ${warningCount}`)
    messages.forEach(({ message }) => {
      console.warn(message)
    })
  })
  return isValid
}
