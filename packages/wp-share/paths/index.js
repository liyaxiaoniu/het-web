const fs = require('fs')
const { resolve } = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => resolve(appDirectory, relativePath)
const appPath = resolveApp('.')
const appSrc = resolveApp('src')
const appPublic = resolveApp('public')
const appDist = resolveApp('dist')
const appHtml = resolveApp('public/index.html')
const appPackageJson = resolveApp('package.json')
const appPackages = resolveApp('packages')
const appTsConfig = resolveApp('tsconfig.json')
const appJsConfig = resolveApp('jsconfig.json')
const appNodeModules = resolveApp('node_modules')

const resolveSrc = (relativePath) => resolve(appSrc, relativePath)
const resolveDist = (relativePath) => resolve(appDist, relativePath)

const resolvePublic = (relativePath) => resolve(appSrc, relativePath)
const resolvePackages = (relativePath) => resolve(appPackages, relativePath)
module.exports = {
  appDirectory,

  appPath,
  appSrc,
  appPublic,
  appDist,
  appHtml,
  appPackageJson,
  appPackages,
  appTsConfig,
  appJsConfig,
  appNodeModules,
  resolveApp,
  resolveSrc,
  resolveDist,
  resolvePublic,
  resolvePackages,
}
