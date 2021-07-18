const fs = require('fs-extra')
const { appDist } = require('@rg-wp/share')

fs.emptyDirSync(appDist)
