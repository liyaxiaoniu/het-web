const component = () => import(/* webpackChunkName: "menu2" */ './menu2.vue')

export const route = {
  component,
}

export const menu = {
  icon: 's-grid',
  title: '菜单2',
}
