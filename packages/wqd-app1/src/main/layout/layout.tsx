// import { RenderContext } from 'vue'
import style from './index.module.less'
import LayoutHeader from './components/layout-header'
// import LayoutFooter from './components/layout-footer'

export const Layout = ({ children }: any) => {
  return (
    <div class={style.box}>
      <div class={style.headerBox}>
        <LayoutHeader></LayoutHeader>
      </div>
      <div class={style.inner}>
        <div>{children}</div>
      </div>
    </div>
  )
}
