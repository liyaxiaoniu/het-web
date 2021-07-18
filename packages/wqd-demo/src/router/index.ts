import VueRouter from 'vue-router'
import Vue from 'vue'
import { routes } from '@/pages'
// console.log(routes)

let router: VueRouter
export const useRouter = function () {
  return router
}
/**
 * 初始化
 */
export function init(wqdProps: LcProps) {
  // console.log(VueRouter)

  // const [VueClass, VueRouterClass] = await wqdProps.fetch(['vue', 'vue-router'])
  // Component.registerHooks([
  //   'beforeRouteEnter',
  //   'beforeRouteLeave',
  //   'beforeRouteUpdate',
  // ])
  Vue.use(VueRouter)
  // console.log(baseRoutes)

  const base = wqdProps ? wqdProps.activeWhen : '/'
  const tempRouter = new VueRouter({
    mode: 'history',
    base,
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      ...(routes as any),
    ],
  })
  // console.log(VueRouter.History)
  // setTimeout(() => {
  //   tempRouter.history.teardown()
  // }, 1000)

  router = tempRouter
  tempRouter.onError((err) => {
    console.log('路由错误', err)
  })

  return tempRouter
}

export * from './router-view'
