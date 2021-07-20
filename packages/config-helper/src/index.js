import { getScriptQuery } from './helper'
import { createInstance } from './setting-view'

const query = getScriptQuery() // 脚本参数
if (query?.init) init()
let instance

/**
 * 触发设置
 * @param key
 * @param args
 */
function wqdTrigger(key = 'open', ...args) {
  switch (key) {
    case 'init': {
      init(...args)
      break
    }
    // 创建实例
    case 'create': {
      instance = createInstance(...args)
      return instance
    }
  }
}
window.wqdTrigger = wqdTrigger

/**
 * 初始化
 * @param el
 */
function init(el, Vue) {
  if (instance) return
  const target = el || document
  target.ondblclick = (e) => {
    // console.log(e.shiftKey)
    if (e.shiftKey) {
      e.preventDefault() //阻止默认行为
      if (!instance) instance = createInstance(Vue)
      instance.show()
    }
  }
  //TODO:  开发调试
  // instance = createInstance(Vue)
  // instance.show()
}

export default wqdTrigger
