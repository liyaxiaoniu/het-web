import style from './main.module.less'
/**
 * 初始化 asyncInit
 */
export async function asyncInit() {
  const appEl = document.getElementById('app') as HTMLDivElement
  appEl.innerHTML = getTemptate()
  const elMap = {
    appEl,
    navbarEl: appEl.querySelector('[role=navbar]') as HTMLDivElement,
    contentEl: appEl.querySelector('[role=content]') as HTMLDivElement,
    layoutEl: appEl.querySelector('[role=layout]') as HTMLDivElement,
  }

  const { create } = await import('../../navbar')
  create(elMap.navbarEl)
  return {
    ...elMap,
  }
}

function getTemptate() {
  return `
  <div role='layout' class=${style.box}>
    <div class=${style.header} role='navbar'></div>
    <div class=${style.inner}>
      <div role='content' class=${style.content}>
      </div>
    </div>
  </div>
  `
}
