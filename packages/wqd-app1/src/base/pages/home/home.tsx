import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import banner from './components/banner/images/ban2.jpg'
// import { mutations } from '@/base/layout/store'
import style from './index.module.less'

@Component({})
export default class Home extends Vue {
  private checkList = ['', '复选框 A']
  private radio = 1
  private input = ''
  private render() {
    return (
      <div class={style.box}>
        <img src={banner} alt='' class={style.img} />
        <el-input placeholder='请输入内容'></el-input>

        <el-checkbox-group vModel={this.checkList}>
          <el-checkbox label='复选框 A'></el-checkbox>
          <el-checkbox label='复选框 B'></el-checkbox>
          <el-checkbox label='复选框 C'></el-checkbox>
          <el-checkbox label='禁用' disabled></el-checkbox>
          <el-checkbox label='选中且禁用'></el-checkbox>
        </el-checkbox-group>
        <el-radio-group vModel={this.radio}>
          <el-radio label='3'>备选项</el-radio>
          <el-radio label='6'>备选项</el-radio>
          <el-radio label='9'>备选项</el-radio>
        </el-radio-group>
        <el-radio-group vModel={this.radio}>
          <el-radio-button label='上海'></el-radio-button>
          <el-radio-button label='北京'></el-radio-button>
          <el-radio-button label='广州'></el-radio-button>
          <el-radio-button label='深圳'></el-radio-button>
        </el-radio-group>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type='primary'>主要按钮</el-button>
          <el-button type='success'>成功按钮</el-button>
          <el-button type='info'>信息按钮</el-button>
          <el-button type='warning'>警告按钮</el-button>
          <el-button type='danger'>危险按钮</el-button>
        </el-row>
        <el-row>
          <el-col span={24}>
            <i class='el-icon-edit'></i>
            <i class='el-icon-share'></i>
            <i class='el-icon-delete'></i>
            <el-button type='primary' icon='el-icon-search'>
              搜索
            </el-button>
            <div class='grid-content bg-purple-dark'></div>
          </el-col>
        </el-row>
        <el-row>
          <el-button icon='el-icon-search' circle></el-button>
          <el-button type='primary' icon='el-icon-edit' circle></el-button>
          <el-button type='success' icon='el-icon-check' circle></el-button>
          <el-button type='info' icon='el-icon-message' circle></el-button>
          <el-button type='warning' icon='el-icon-star-off' circle></el-button>
          <el-button type='danger' icon='el-icon-delete' circle></el-button>
        </el-row>
        <div>
          <el-link href='https://element.eleme.io' target='_blank'>
            默认链接
          </el-link>
          <el-link type='primary'>主要链接</el-link>
          <el-link type='success'>成功链接</el-link>
          <el-link type='warning'>警告链接</el-link>
          <el-link type='danger'>危险链接</el-link>
          <el-link type='info'>信息链接</el-link>
          <el-radio v-model={this.radio} label='1'>
            备选项
          </el-radio>
          <el-radio v-model={this.radio} label='2'>
            备选项
          </el-radio>
        </div>
        <el-button
          onClick={() => {
            this.$router.push('/about')
          }}>
          跳转
        </el-button>
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
