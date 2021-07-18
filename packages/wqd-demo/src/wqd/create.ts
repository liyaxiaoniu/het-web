import { RgRouterView, init as routerInit } from '@/router'
import Vue from 'vue'
import Layout from '../layout/index.vue'
export async function create(lcProps: LcProps) {
  Vue.config.productionTip = false
  const router = routerInit(lcProps) // 初始化路由
  const elWrapper = lcProps.el
  const el = document.createElement('div')
  elWrapper.append(el)

  const instance = new Vue({
    router,
    render: (h) => h(Layout),
  })
  instance.$mount(el)
  return instance
}
