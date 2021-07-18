const component = () =>
  import(/* webpackChunkName: "dashboard" */ './dashboard.vue')

export const route = {
  component,
}
export const menu = {
  icon: 's-home',
  title: '首页',
}
