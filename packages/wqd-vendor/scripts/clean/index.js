const { fs } = require('@rg-wp/config')
const { appDist } = require('@rg-wp/share')

fs.emptyDirSync(appDist)
