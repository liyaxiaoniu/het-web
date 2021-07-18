const component = () =>
  import(/* webpackChunkName: "dashboard" */ './menu1-2-1.vue')

export const route = {
  component,
}
export const menu = {
  title: '菜单1-2-1',
}
