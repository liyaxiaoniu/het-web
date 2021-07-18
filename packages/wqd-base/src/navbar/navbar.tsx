// import { unloadApplication } from 'single-spa'
import style from './index.module.less'
const Navbar = () => {
  return (
    <div class={style.box}>
      <div class={style.inner}>
        <el-button
          type='danger'
          onClick={() => {
            history.pushState(null, '', '/app1')
          }}>
          app1
        </el-button>
        <el-button
          onClick={() => {
            history.pushState(null, '', '/demo')
          }}>
          demo
        </el-button>
        <el-button
          onClick={() => {
            history.pushState(null, '', '/test')
          }}>
          test
        </el-button>
        <el-button
          onClick={() => {
            window.__singleSpa__.unloadApplication('app1')

            // history.pushState(null, '', '/test')
          }}>
          销毁app1
        </el-button>
      </div>
    </div>
  )
}

export default Navbar
