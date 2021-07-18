import { Component } from 'vue-property-decorator'
import Vue from 'vue'
// import { mutations } from '@/base/layout/store'
import style from './index.module.less'
const opitons = [
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' },
]
@Component({})
export default class Home extends Vue {
  private value = '选项4'
  private render() {
    return (
      <div class={style.box}>
        <el-select vModel={this.value} placeholder='请选择'>
          {opitons.map(({ value, label }) => {
            return (
              <el-option key={value} label={label} value={value}></el-option>
            )
          })}
        </el-select>
      </div>
    )
  }
  // private beforeRouteEnter(to: any, from: any, next: () => void) {
  //   mutations.setIsListenScroll(true)
  //   next()
  // }
  // private beforeRouteLeave(to: any, form: any, next: () => void) {
  //   mutations.setIsListenScroll(false)
  //   next()
  // }
}
