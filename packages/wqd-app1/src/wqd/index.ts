import { create } from './create'
// import Vue from 'vue'
export function init() {
  let instance: any

  const lc = {
    bootstrap: (lcProps: LcProps) => {
      console.log(`微前端子应用${lcProps.name}: bootstrap`)
      const url = lcProps.url
      if (url) __webpack_public_path__ = url + __webpack_public_path__ // 设置publicpath
    },
    mount: async (lcProps: LcProps) => {
      console.log(`微前端子应用${lcProps.name}: mount`)
      if (instance) return

      instance = await create(lcProps)
    },
    unmount: (lcProps: LcProps) => {
      console.log(`微前端子应用${lcProps.name}: unmount`)
      // 微应用卸载就销毁子应用
      if (instance) {
        instance.$destroy()
        instance = null
      }
    },
    unload: (lcProps: LcProps) => {
      console.log(`微前端子应用${lcProps.name}: unload`)
    },
  }

  window.__wqd_lc__ = lc
}
