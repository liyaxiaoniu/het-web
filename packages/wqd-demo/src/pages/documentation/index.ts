const component = () =>
  import(/* webpackChunkName: "documentation" */ './documentation.vue')
export const route = {
  component,
}

export const menu = {
  title: '文档',
  icon: 'document',
}
