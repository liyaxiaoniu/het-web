import './styles/index.less'
import { asyncInit } from './main'

import { init as wqdInit } from './wqd'
import { navigateToUrl } from 'single-spa'
import { fetchVendor } from './vendor'
main()

async function main() {
  // 加载vue基础组件
  await fetchVendor(['vue', 'vue-router', 'axios'])
  // 初始化框架
  const { contentEl } = await asyncInit()
  // // 初始化微前端
  const start = await wqdInit(contentEl)
  start({ urlRerouteOnly: true })
  // 默认进入项目1
  if (location.pathname === '/') navigateToUrl('/demo')

  require('./config-helper')
}
