import VueRouter from 'vue-router'
import { Component, Vue } from 'vue-property-decorator'
import { routes as baseRoutes } from '@/base'

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
  Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
  ])
  Vue.use(VueRouter)
  console.log(baseRoutes)

  const base = wqdProps ? wqdProps.activeWhen : '/'
  const tempRouter = new VueRouter({
    mode: 'history',
    base,
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      ...baseRoutes,
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
