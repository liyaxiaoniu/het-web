<template>
  <div class="mask" ref="mask" v-show="isShow">
    <div class="popView">
      <div class="scroll">
        <div>
          <div>
            <rg-form-item label='后台环境' >
              <rg-radio 
                name='env' 
                v-for="item in envList" 
                :key="item.value" 
                :text='`${item.value }( ${item.text} )`' 
                :value='item.value' 
                :checked="env===item.value"
                @change="hanlderChange" />
            </rg-form-item>
            <h1>账号密码设置</h1>
            <div >
              <rg-form-item label='账号' >
                <rg-input ></rg-input>
              </rg-form-item>
              <rg-form-item label='密码' >
                <rg-input ></rg-input>
              </rg-form-item>
              <rg-form-item label='备注' >
                <rg-input ></rg-input>
              </rg-form-item>
            </div>
            
          </div>
        </div>
      </div>
      <div class="bottom">
        <el-button @click="handlerClickConfirm" type="primary">
          确定
        </el-button>
        <el-button @click="handlerClickCancel">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script lang='js'>
import { getState, saveState  } from "@/store";
import RgFormItem from '@/components/form-item'
import RgInput from '@/components/input'
import RgRadio from '@/components/radio'
import RgCheckbox from '@/components/checkbox'

export default {
  name: 'rg-main',
  components : {
    RgFormItem , 
    RgInput,
    RgRadio,
    RgCheckbox,
  },
  created(){
    this.envList = [
      {value: 'fat1', text: 'http://192.36.3.4' },
      {value: 'fat2',text: 'http://192.36.3.4' },
      {value: 'fat3', text: 'http://192.36.3.4'},
      {value: "fat4",text: 'http://192.36.3.4' },
      {value: 'dev1', text: 'http://192.36.3.4'},
      {value: 'dev2', text: 'http://192.36.3.4'},
      {value: 'dev3', text: 'http://192.36.3.4'},
    ]
    const state = getState()
    
    this.env = state.env || ''
  }, 
  data() {
    return {
      isShow: false,
    }
  },
  
  methods: {
    hanlderChange(value ){
    
      this.env = value 
    },
    
    
    handlerClickConfirm() {
      console.log(this.env );
      saveState({
        env: this.env 
      })
      // this.isShow = false
    },
    handlerClickCancel() {
      this.isShow = false
    },
  },
}
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  z-index: 1000000;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  // display: none;
}
.popView {
  position: absolute;
  height: 100%;
  width: 70%;
  background-color: #fff;
  top: 0;
  right: 0;
  padding-bottom: 50px;
  box-sizing: border-box;
}
.scroll {
  height: 100%;
  overflow-y: scroll;
  padding:  10px ;
}
.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
}
</style>
