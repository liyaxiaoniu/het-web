process.env.NODE_ENV = 'production'

const fs = require('fs-extra')

const { paths } = require('@rg-wp/share')
const { runWebpack } = require('@rg-wp/config')

// 清空dist文件夹
fs.emptyDirSync(paths.appDist)
// 复制public里面的文件
fs.copySync(paths.appPublic, paths.appDist, {
  dereference: true,
  filter: (file) => file !== paths.appHtml,
})

runWebpack(require('./webpack.config'))
