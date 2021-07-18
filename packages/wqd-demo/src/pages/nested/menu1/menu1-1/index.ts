const component = () => import(/* webpackChunkName: "menu" */ './menu1-1.vue')

export const route = {
  component,
}
export const menu = {
  title: '菜单1-1',
}
