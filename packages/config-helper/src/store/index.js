let state = null
const localKey = 'rg-evn-key'

/**
 * 获取数据
 * @param {*} key
 * @returns
 */
export function getState(key) {
  if (!state) initState()
  if (key) return state[key]
  return { ...state }
}

/**
 * 保存状态
 * @param {*} data
 */
export function saveState(data) {
  state = data
  localStorage.setItem(localKey, JSON.stringify(data))
}

/**
 * 初始化state
 * @returns
 */
function initState() {
  const dataStr = localStorage.getItem(localKey)
  if (!dataStr) return {}
  state = JSON.parse(dataStr)
}
