<template>
  <div class="app-wrapper" ref="appWrapper">
    <div class="sidebar-container" ref="sidebarContainer">
      <sidebar />
    </div>

    <div class="main-container" ref="mainContainer">
      <div class="top-fix-container" ref="topFix">
        <navbar />
        <tags-view />
      </div>
      <div class="app-main">
        <rg-router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import TagsView from './components/tags-view'
import { RgRouterView } from '@/router'
export default {
  name: 'Layout',
  components: {
    //   AppMain,
    Navbar,
    //   RightPanel,
    //   Settings,
    RgRouterView,
    Sidebar,
    TagsView,
  },
  created() {
    this.$nextTick(() => {
      // 动态设置宽度
      const { mainContainer, topFix, appWrapper, sidebarContainer } = this.$refs
      mainContainer.style.paddingTop = `${topFix.offsetHeight}px`
      appWrapper.style.paddingLeft = `${sidebarContainer.offsetWidth}px`
    })
  },

  methods: {},
}
</script>

<style lang="less" scoped>
.app-wrapper {
  // @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  padding-left: 210px;
}

.sidebar-container {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
.main-container {
  height: 100%;
  position: relative;
}
.top-fix-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.app-main {
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}
</style>
