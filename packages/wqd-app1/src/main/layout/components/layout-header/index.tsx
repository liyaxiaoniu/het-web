import { Component, Vue } from 'vue-property-decorator'
import style from './index.module.less'

@Component({})
export default class LayoutHeader extends Vue {
  private render() {
    return (
      <div class={style.box}>
        <div class={[style.inner, 'main-inner']}>顶部</div>
      </div>
    )
  }
}
