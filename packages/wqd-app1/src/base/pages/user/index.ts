const component = () => import(/* webpackChunkName: "user" */ './user')
export const route = {
  path: '/user',
  name: `user_${Math.random()}`,
  component,
  meta: {},
}

export const routes = [route]
