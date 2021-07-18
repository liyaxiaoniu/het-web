<template>
  <el-menu-item v-if="!menu.children" :index="menu.key">
    <template v-slot:title>
      <i :class="'el-icon-' + menu.icon" v-if="menu.icon"></i>
      <span>{{ menu.title }}</span>
    </template>
  </el-menu-item>

  <el-submenu v-else :index="menu.key">
    <template v-slot:title>
      <i :class="'el-icon-' + menu.icon" v-if="menu.icon"></i>
      <span>{{ menu.title }}</span>
    </template>
    <sidebar-item
      v-for="child in menu.children"
      :key="child.key"
      :menu="child"
    />
  </el-submenu>
</template>

<script>
export default {
  name: 'SidebarItem',
  // components: { Item, AppLink },
  // mixins: [FixiOSBug],
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
