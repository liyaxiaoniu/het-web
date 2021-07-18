const vendorExports = {} as { [key: string]: any }
window.__vendor__ = vendorExports
Object.setPrototypeOf(vendorExports, null)

export async function fetchVendor(key: string | string[]) {
  const keys = Array.isArray(key) ? key : [key]
  const promises: Promise<any>[] = []
  const values: any[] = []
  keys.forEach((key) => {
    let tempVal = vendorExports[key]
    if (tempVal) {
      values.push(tempVal)
      return
    }
    promises.push(
      loadVendor(key).then((m) => {
        tempVal = m.default
        vendorExports[key] = tempVal
        values.push(tempVal)
        return tempVal
      }),
    )
  })
  if (promises.length === 0) return Promise.resolve(values)
  return await Promise.all(promises)
}

function loadVendor(key: string) {
  switch (key) {
    case 'vue': {
      return import('vendor/vue')
    }
    case 'vue-router': {
      return import('vendor/vue-router')
    }
    case 'axios': {
      return import('vendor/axios')
    }
    case 'moment': {
      return import('vendor/moment')
    }

    case 'lodash': {
      return import('vendor/lodash')
    }
    default: {
      throw new Error(`请求加载文件${key}失败`)
    }
  }
}
