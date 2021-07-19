// import { registerApplication, start, unloadApplication } from 'single-spa'
import * as singleSpa from 'single-spa'
import { loaderAssets } from './loader'
import { LcProps } from './types'
import { fetchVendor } from '../vendor'
import { createWindowProxy } from './helper'

window.__rg_wqd__ = true // 微前端标志, 用于给子应用使用
window.__singleSpa__ = singleSpa

//  `wqd_vendor@http://localhost:4000/__wqd_vendor__.js?t=3243424`
const apps = [
  {
    name: 'app1',
    // url: 'http://localhost:8001', // 生产环境
    url: 'http://localhost:8000', // 开发环境
  },
  {
    name: 'demo',
    // url: 'http://localhost:9001', // 生产环境
    url: 'http://localhost:9000', // 开发环境
  },
]
/**
 * 初始化微前端
 * @param contentEl
 * @returns
 */
export async function init(contentEl: HTMLDivElement) {
  apps.forEach((config) => {
    const { name, url } = config
    const win = (window[`${name}_window`] = createWindowProxy()) // window对象的代理

    const activeWhen = `/${name}`
    const customProps = {
      activeWhen,
      url,
      win,
      el: contentEl,
      fetchVendor,
    } as any

    singleSpa.registerApplication<LcProps>({
      name,
      app: applicationFn,
      activeWhen,
      customProps,
    })
  })
  return singleSpa.start
}

/**
 * App加载方法
 * @param lcProps
 * @returns
 */
async function applicationFn(lcProps: LcProps) {
  const lc = await loaderAssets(lcProps)
  console.log('生命周期', lc)

  return lc
}
