const fs = require('fs-extra')
const { resolvePackages, resolveDist } = require('@rg-wp/share')
const sourceDir = resolvePackages('wqd-vendor/dist')
const targetDir = resolveDist('vendor')

console.log('源文件夹', sourceDir)
console.log('目标文件夹', targetDir)

// fs.emptyDirSync(targetDir)
fs.copySync(sourceDir, targetDir, {
  dereference: true,
  // filter: (file) => file !== paths.appHtml,
})
