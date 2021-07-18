// import { registerApplication, start, unloadApplication } from 'single-spa'
import * as singleSpa from 'single-spa'
import { loaderAssets } from './loader'
import { LcProps } from './types'
import { fetchVendor } from '../vendor'
import { createWindowProxy } from './helper'

window.__rg_wqd__ = true // 微前端标志, 用于给子应用使用
window.__singleSpa__ = singleSpa

const apps = [
  {
    name: 'app1',
    // url: 'http://localhost:1992', // 生产环境
    url: 'http://localhost:8000', // 开发环境
    activeWhen: '/app1',
    // loader: import(`app1@http://localhost:8000`),
  },
  {
    name: 'demo',
    // url: 'http://localhost:1992', // 生产环境
    url: 'http://localhost:9000', // 开发环境
    activeWhen: '/demo',

    // loader: import(`app1@http://localhost:8000`),
  },
]
/**
 * 初始化微前端
 * @param contentEl
 * @returns
 */
export async function init(contentEl: HTMLDivElement) {
  apps.forEach((config) => {
    const { name, url, activeWhen } = config
    const globelKey = `${name}_window` // window对象的代理
    const win = (window[globelKey] = createWindowProxy())
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
