import { LifeCycles, LifeCycleFn } from 'single-spa'
import { LcProps } from './types'
export let loaderAssets: (lcProps: LcProps) => Promise<LifeCycles<any>>

if (process.env.NODE_ENV === 'development') {
  loaderAssets = async function loaderDevAssets(lcProps: LcProps) {
    const entry = `${lcProps.url}/main.bundle.js`

    if (await loaderFile(entry)) {
      // 加载文件没有报错
      return formatLifeCycle(lcProps)
    }
    console.error(`请求文件${entry}失败, 尝试以生产模式去加载`)
    return await loaderProdAssets(lcProps)
  }
} else {
  loaderAssets = loaderProdAssets
}

/*
 * 生产环境文件加载模块
 */
async function loaderProdAssets(lcProps: LcProps) {
  const key = '__wqd_app_loader__'
  const { url, name } = lcProps
  const entry = `${url}/${key}.js?${new Date().getTime()}`
  console.log('加载文件', entry)
  if (!(await loaderFile(entry))) {
    throw new Error(`请求文件文件${entry}失败`)
  }

  const loaderData = window[key] as any
  delete window[key]

  if (!loaderData) {
    throw new Error(
      `${url},name: ${name}, 没有给出文件资源资源对象, window.${key} 数据为空`,
    )
  }

  const { entrypointFiles, vendors } = loaderData

  // 加载vendor依赖
  if (Array.isArray(vendors)) {
    await lcProps.fetchVendor(vendors)
  }

  // 加载入口资源
  const promises: Promise<any>[] = []
  entrypointFiles.forEach((file: string) => {
    const src = `${url}/${file}`
    if (file.substr(-3) === 'css') {
      promises.push(loaderCssFile(src))
    } else {
      promises.push(loaderFile(src))
    }
  })
  await Promise.all(promises)

  // 格式化生命周期
  return formatLifeCycle(lcProps)
}

/**
 * 格式化生命周期
 * @param lifeCycle
 */
function formatLifeCycle(lcProps: LcProps) {
  const lcMap = ensureLcMap(lcProps)

  const tempLifecycle = new Object(null) as LifeCycles<any>
  let tempLcProps: LcProps | null
  // boostrap
  const bootstrapLc = ensureLc(lcMap, 'bootstrap', lcProps)
  // const globelKey = `${lcProps.name}_window` // window对象的代理

  tempLifecycle.bootstrap = (lcProps: LcProps) => {
    // window[globelKey] = Object.assign({}, window)

    return runLc(lcProps, bootstrapLc)
  }
  // mount
  const mountLc = ensureLc(lcMap, 'mount', lcProps)
  tempLifecycle.mount = (lcProps: LcProps) => {
    const el = document.createElement('div')
    el.setAttribute('app-name', lcProps.name)
    el.style.height = '100%'
    lcProps.el.appendChild(el)
    tempLcProps = { ...lcProps, el }

    return runLc(tempLcProps as LcProps, mountLc)
  }
  // unmount
  const unmountLc = ensureLc(lcMap, 'unmount', lcProps)
  tempLifecycle.unmount = (lcProps: LcProps) => {
    tempLcProps?.el.remove()
    return runLc(tempLcProps as LcProps, unmountLc)
  }
  // @ts-ignore
  const unloadLc = lcMap.unload
  if (typeof unloadLc === 'function') {
    // @ts-ignore
    tempLifecycle.unload = (lcProps: LcProps) => {
      // delete window[globelKey] // 删除全局window对象
      tempLcProps = null
      return runLc(lcProps, unloadLc)
    }
  }

  return tempLifecycle
}

function ensureLcMap(lcProps: LcProps) {
  const win = lcProps.win
  const lifeCycle = win.__wqd_lc__
  // delete window.__wqd_lc__
  if (Object.prototype.toString.call(lifeCycle) !== '[object Object]') {
    throw new Error(
      `地址:${lcProps.url},App:'${lcProps.name}'没有指定生命周期函数, 请在子应用App中指定'window.__wqd_lc__'`,
    )
  }
  return lifeCycle as LifeCycles
}

function ensureLc(lcs: LifeCycles, lcName: keyof LifeCycles, lcProps: LcProps) {
  const lc = lcs[lcName]
  if (lc === undefined) {
    throw new Error(
      `应用${lcProps.name},加载地址${lcProps.url}后面, 没有导出生命周期函数 ${lcName}`,
    )
  }
  if (typeof lc !== 'function') {
    throw new Error(
      `应用${lcProps.name},加载地址${lcProps.url}后面, 生命周期函数不是${lcName}, 不是函数类型`,
    )
  }
  return lc
}
function runLc(lcProps: LcProps, fn: LifeCycleFn<any>) {
  const result = fn(lcProps) as any
  if (result?.then) return result as Promise<any>
  return Promise.resolve(result)
}

/**
 * 加载文件
 * @param src 文件路径
 * @returns
 */
function loaderFile(src: string) {
  return new Promise((res) => {
    __webpack_require__.l(src, (result: any) => {
      if (result.type === 'error') {
        res(false)
      } else {
        res(true)
      }
    })
  })
}

/**
 * 加载css文件
 * @param src 文件路径
 * @returns
 */
function loaderCssFile(src: string) {
  return new Promise((res) => {
    const linkTag = document.createElement('link')
    linkTag.rel = 'stylesheet'
    linkTag.type = 'text/css'
    const onLinkComplete = (event: Event) => {
      // avoid mem leaks.
      linkTag.onerror = linkTag.onload = null
      if (event.type === 'load') {
        res(true)
      } else {
        console.error(`加载css文件 ${src} 失败.`)
        document.head.removeChild(linkTag)
        res(false)
      }
    }
    linkTag.href = src
    // @ts-ignore
    linkTag.onerror = linkTag.onload = onLinkComplete
    document.head.appendChild(linkTag)
  })
}
