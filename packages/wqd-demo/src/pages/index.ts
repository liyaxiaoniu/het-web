const ctx = require.context('./', true, /^\.(\/([0-9a-z-]+)){1,}\/index.ts$/)

const routeMap = {} as any
const menuMap = {} as any
ctx.keys().forEach((key) => {
  const path = key.substring(1, key.length - 9)
  const { route, menu } = ctx(key)
  if (route) {
    routeMap[path] = createRoute(route, path)
  }
  if (menu) {
    menuMap[path] = menu
    menu.key = path
    if (route) menu.path = path
  }
})

export const menuTree = getMenuTree(menuMap)

/**
 * 获取菜单列表
 * @param menuMap
 */
function getMenuTree(menuMap: any) {
  const tree: any[] = []
  Object.keys(menuMap).forEach((key) => {
    const menu = menuMap[key]
    const pKey = key.substring(0, key.lastIndexOf('/'))
    if (!pKey) {
      tree.push(menu) // 根菜单
      return
    }
    const pMenu = menuMap[pKey]
    if (!pMenu) {
      throw new Error(
        `路径错误: 路径${pKey}下面没有给出index.ts,或者没有导出 menu对象`,
      )
    }
    const children = pMenu.children || (pMenu.children = [] as any[])
    children.push(menu)
  })
  return tree
}

/**
 * 创建路由
 * @param originRoute
 */
function createRoute(originRoute: any, path: string) {
  const route = { ...originRoute }
  route.path = path
  return route
}
console.log(routeMap)

export const routes = Object.values(routeMap)
