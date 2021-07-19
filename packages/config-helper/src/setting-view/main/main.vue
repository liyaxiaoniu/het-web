<template>
  <div class="mask" ref="mask" @click="handlerClickMask" v-show="isShow">
    <div class="popView">
      <div class="scroll">
        <div></div>
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

<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
  // created() {
  //   this.$style = style
  // },
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    },
    handlerClickMask(e) {
      if (e.target === this.$refs.mask) this.isShow = false
    },
    handlerClickConfirm() {
      this.isShow = false
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
}
.scroll {
  height: 100%;
  overflow-y: scroll;
  > div {
    height: 1000px;
  }
  // background-color: cyan ;
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
