const path = require('path')
// const fs = require('fs')

const appDirectory = process.cwd()

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
exports.resolveApp = resolveApp
