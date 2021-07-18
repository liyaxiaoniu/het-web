process.env.NODE_ENV = 'production'

const { appDist, appPublic, appHtml } = require('@rg-wp/share')
const { webpack, fs } = require('@rg-wp/config')

// 清空dist文件夹
fs.emptyDirSync(appDist)
// 复制public里面的文件
fs.copySync(appPublic, appDist, {
  dereference: true,
  filter: (file) => file !== appHtml,
})

const config = require('./webpack.config')

webpack(config, (err) => {
  if (err) console.log(err)
})
