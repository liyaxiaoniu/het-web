// import { generateUUID } from '@/libs'

const component = () => import(/* webpackChunkName: "home" */ './home')
// import router from '@/router'
export const route = {
  path: '/home',
  name: `home_${Math.random()}`,
  component,
  meta: {
    // topMenuKey: 'home', // 顶部菜单高亮的key
    // key: 'home',
  },
}

// export const go = () => {
//   router.push({ name: route.name })
// }
export const routes = [route]
