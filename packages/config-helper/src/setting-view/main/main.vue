<template>
  <div class="mask" ref="mask" v-show="isShow">
    <div class="popView">
      <div class="scroll">
        <div>
          <div>
            <EnvConfig ref="envConfig"></EnvConfig>
            <acc-cfg ref="accCfg"></acc-cfg>
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

<script lang="js">
import { getState, saveState  } from "@/store";
import RgFormItem from '@/components/form-item'
import RgInput from '@/components/input'
import RgRadio from '@/components/radio'
import RgTitleBlock from "@/components/title-block";

import RgCheckbox from '@/components/checkbox'
import EnvConfig  from "./components/env-config";
import AccCfg  from "./components/acc-cfg";

export default {
  name: 'rg-main',
  components : {
    AccCfg,
    EnvConfig,
    // RgFormItem ,
    // RgInput,
    // RgTitleBlock,
    // RgCheckbox,
  },
  created(){


  },
  data() {
    return {
      isShow: false,
    }
  },

  methods: {



    handlerClickConfirm() {
      const {envConfig} = this.$refs
      // console.log(this.env );
      saveState({
        ...envConfig.getParams(),
      })
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
  padding: 10px;
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
