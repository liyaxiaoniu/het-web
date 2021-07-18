const { ESLint } = require('eslint')
;(async function main() {
  // 1. Create an instance.
  const eslint = new ESLint({
    overrideConfigFile: 'lint/.eslintrc.js',
    ignorePath: 'lint/.eslintignore',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fix: true,
  })

  // 2. Lint files.
  const results = await eslint.lintFiles([
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.vue',
  ])

  // 3. Modify the files with the fixed code.
  await ESLint.outputFixes(results)

  // 3. Format the results.
  const formatter = await eslint.loadFormatter('stylish')
  const resultText = formatter.format(results)

  // 4. Output it.
  console.log(resultText)
})().catch((error) => {
  process.exitCode = 1
  console.error(error)
})
