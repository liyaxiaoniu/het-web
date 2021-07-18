import { Component, Vue } from "vue-property-decorator"

import style from "./index.module.less"

@Component({})
export default class LayoutFooter extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private render(h: CreateElement) {
    return (
      <div class={style.box}>
        <div class={style.inner}>底部</div>
      </div>
    )
  }
}
