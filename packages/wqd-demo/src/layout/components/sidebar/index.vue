<template>
  <div class="sidebar">
    <div>
      <el-menu
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        :router="true"
      >
        <sidebar-item v-for="menu in menuTree" :key="menu.key" :menu="menu" />
      </el-menu>
    </div>
  </div>
</template>

<script>
import { menuTree } from '@/pages'
import SidebarItem from './sidebar-item.vue'
export default {
  name: 'Sidebar',

  components: { SidebarItem },
  // computed: {
  //   ...mapGetters(['permission_routes', 'sidebar']),
  //   activeMenu() {
  //     const route = this.$route
  //     const { meta, path } = route
  //     // if set path, the sidebar will highlight the path you set
  //     if (meta.activeMenu) {
  //       return meta.activeMenu
  //     }
  //     return path
  //   },
  //   showLogo() {
  //     return this.$store.state.settings.sidebarLogo
  //   },
  computed: {
    menuTree: () => menuTree,
  },

  //   isCollapse() {
  //     return !this.sidebar.opened
  //   },
  // },
}
</script>
<style lang="less" scoped>
.sidebar {
  width: 210px;
  background-color: #304156;

  overflow: hidden;
  height: 100%;
  & > div {
    height: 100%;
    overflow-y: scroll;
  }
}
</style>
