const component = () => import(/* webpackChunkName: "about" */ './about')
// import router from '@/router'
export const route = {
  path: '/about',
  name: `about_${Math.random()}`,
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
