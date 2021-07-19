/**
 * 获取当前执行脚本的url上的参数
 */
export function getScriptQuery() {
  const src = document.currentScript?.getAttribute('src')
  if (!src) return null
  const i = src.lastIndexOf('?')
  if (i < 0) return null
  const queryString = src.substring(i)
  const query = Object.create(null)
  queryString.split('&').forEach((str) => {
    const [key, value] = str.split('=')
    query[key] = value || true
  })
  return query
}
