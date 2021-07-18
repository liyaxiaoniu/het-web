const { fs } = require('@rg-wp/config')
const { appDist, appPublic } = require('@rg-wp/share')

fs.copySync(appPublic, appDist, {
  dereference: true,
})
