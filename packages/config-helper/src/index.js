import { getScriptQuery } from './helper'
import { createInstance } from './setting-view'
/**
 * 触发设置
 * @param key
 * @param args
 */
function wqdTrigger(key = 'open', ...args) {
  switch (key) {
    case 'init': {
      init(args[0])
    }
  }
}
window.wqdTrigger = wqdTrigger

const query = getScriptQuery() // 脚本参数
if (query?.init) init()
let instance
/**
 * 初始化
 * @param el
 */
function init(el) {
  const target = el || document
  target.ondblclick = (e) => {
    console.log(e.shiftKey)
    if (e.shiftKey) {
      e.preventDefault() //阻止默认行为
      if (!instance) instance = createInstance()
      instance.show()
      // 其他代码
    }
  }
}

init()

instance = createInstance()
instance.show()
export default wqdTrigger
