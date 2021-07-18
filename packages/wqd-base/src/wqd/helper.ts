/**
 * 创建window的代理对象
 * @returns
 */
export function createWindowProxy() {
  const win = window as any
  const proxyWin = {} as any
  if (win.Proxy) {
    // 用Proxy 作为代理
    const p = new Proxy(proxyWin, {
      get(obj, prop) {
        return prop in obj ? obj[prop] : win[prop]
      },
      set(obj, prop, value) {
        obj[prop] = value
        return true
      },
    })
    return p
  }
  // 使用Object.defineProperty
  Object.keys(win).forEach((key) => {
    Object.defineProperty(proxyWin, key, {
      get() {
        return win[key]
      },
    })
  })
  return proxyWin
}
