const vendorExports = (window.__vendor__ = {
  fetchVendor,
})
Object.setPrototypeOf(vendorExports, null)

// /**
//  * 获取vendor
//  * @param  key
//  */
export async function fetchVendor(key) {
  let keys
  if (Array.isArray(key)) keys = key
  else keys = [key]

  const promises = []
  keys.forEach((key) => {
    if (vendorExports[key]) return
    promises.push(loadVendor(key))
  })
  if (promises.length === 0) return

  await Promise.all(promises)
}

function loadVendor(key) {
  switch (key) {
    case 'vue': {
      return import(
        /* webpackChunkName: "vue" */
        './vue'
      )
    }
    case 'moment': {
      return import(
        /* webpackChunkName: "moment" */
        './moment'
      )
    }
    case 'lodash': {
      return import(
        /* webpackChunkName: "lodash" */
        './lodash'
      )
    }
    default: {
      throw new Error(`请求加载文件${key}失败`)
    }
  }
}
