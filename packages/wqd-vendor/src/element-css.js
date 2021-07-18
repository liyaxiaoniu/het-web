/* webpack/runtime/css loading */

function miniCssF(chunkId) {
  return `css/${chunkId}.css`
  // return 'css/' + chunkId + '.' + '464aef36' + '.css'
}

const createStylesheet = (chunkId, fullhref, resolve, reject) => {
  const linkTag = document.createElement('link')

  linkTag.rel = 'stylesheet'
  linkTag.type = 'text/css'
  const onLinkComplete = (event) => {
    // avoid mem leaks.
    linkTag.onerror = linkTag.onload = null
    if (event.type === 'load') {
      resolve()
    } else {
      const errorType =
        event && (event.type === 'load' ? 'missing' : event.type)
      const realHref = (event && event.target && event.target.href) || fullhref
      const err = new Error(
        'Loading CSS chunk ' + chunkId + ' failed.\n(' + realHref + ')',
      )
      err.code = 'CSS_CHUNK_LOAD_FAILED'
      err.type = errorType
      err.request = realHref
      linkTag.parentNode.removeChild(linkTag)
      reject(err)
    }
  }
  linkTag.onerror = linkTag.onload = onLinkComplete
  linkTag.href = fullhref

  document.head.appendChild(linkTag)
  return linkTag
}
const findStylesheet = (href, fullhref) => {
  const existingLinkTags = document.getElementsByTagName('link')
  for (let i = 0; i < existingLinkTags.length; i++) {
    const tag = existingLinkTags[i]
    const dataHref = tag.getAttribute('data-href') || tag.getAttribute('href')
    if (
      tag.rel === 'stylesheet' &&
      (dataHref === href || dataHref === fullhref)
    )
      return tag
  }
  const existingStyleTags = document.getElementsByTagName('style')
  for (let i = 0; i < existingStyleTags.length; i++) {
    const tag = existingStyleTags[i]
    const dataHref = tag.getAttribute('data-href')
    if (dataHref === href || dataHref === fullhref) return tag
  }
}
const loadStylesheet = (chunkId) => {
  return new Promise((resolve, reject) => {
    const href = miniCssF(chunkId)
    const fullhref = __webpack_require__.p + href
    if (findStylesheet(href, fullhref)) return resolve()
    createStylesheet(chunkId, fullhref, resolve, reject)
  })
}
// object to store loaded CSS chunks
const installedCssChunks = {
  loader: 0,
}

const loaderCss = (chunkId, promises = []) => {
  const cssChunks = { element: 1 }
  if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId])
  else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
    promises.push(
      (installedCssChunks[chunkId] = loadStylesheet(chunkId).then(
        () => {
          installedCssChunks[chunkId] = 0
        },
        (e) => {
          delete installedCssChunks[chunkId]
          throw e
        },
      )),
    )
  }
}

loaderCss('element')
