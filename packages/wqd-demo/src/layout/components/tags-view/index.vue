<template>
  <div class="tags-view"></div>
</template>

<script>
// import ScrollPane from './ScrollPane'
// import path from 'path'

export default {
  // components: { ScrollPane },
  data() {
    return {
      // visible: false,
      // top: 0,
      // left: 0,
      // selectedTag: {},
      // affixTags: [],
    }
  },
  // computed: {
  //   visitedViews() {
  //     return this.$store.state.tagsView.visitedViews
  //   },
  //   routes() {
  //     return this.$store.state.permission.routes
  //   },
  // },
  // watch: {
  //   $route() {
  //     this.addTags()
  //     this.moveToCurrentTag()
  //   },
  //   visible(value) {
  //     if (value) {
  //       document.body.addEventListener('click', this.closeMenu)
  //     } else {
  //       document.body.removeEventListener('click', this.closeMenu)
  //     }
  //   },
  // },
  // mounted() {
  //   this.initTags()
  //   this.addTags()
  // },
}
</script>

<style lang="less" scoped>
.tags-view {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>
