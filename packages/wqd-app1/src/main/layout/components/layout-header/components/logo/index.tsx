import { Component, Vue } from "vue-property-decorator"
import style from "./index.module.less"
import { go as homeGo } from "@/base/pages/home"
const SvgLogo = () => import("./logo.svg")

@Component({})
export default class Logo extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private render(h: CreateElement) {
    return (
      <div class={style.box} onClick={homeGo}>
        <SvgLogo class={style.svg}></SvgLogo>
      </div>
    )
  }
}
