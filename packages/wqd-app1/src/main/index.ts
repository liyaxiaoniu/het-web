import Vue from 'vue'
import './styles/index.less'
import './element-ui'

import { init as routerInit, RgRouterView } from '../router'
import { Layout } from './layout'
import './element-ui'
// import '@/svg'
console.log('单独运行')

const router = routerInit() // 初始化路由
Vue.config.productionTip = false
const vm = new Vue({
  router,
  render: (h) => {
    return h(Layout as any, [h(RgRouterView)])
  },
}).$mount('#app')
