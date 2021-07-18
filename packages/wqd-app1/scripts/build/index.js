process.env.NODE_ENV = 'production'

const { appDist, appPublic, appHtml } = require('@rg-wp/share')
const { fs, webpack } = require('@rg-wp/config')

// 清空dist文件夹
fs.emptyDirSync(appDist)
// 复制public里面的文件
fs.copySync(appPublic, appDist, {
  dereference: true,
  filter: (file) => file !== appHtml,
})

webpack(require('./webpack.config'), (err) => {
  if (err) console.log(err)
})
