<template>
  <div class="navbar">
    <hamburger @change="handlerToggleClick" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from './components/hamburger'
// import ErrorLog from '@/components/ErrorLog'
// import Screenfull from '@/components/Screenfull'
// import SizeSelect from '@/components/SizeSelect'
// import Search from '@/components/HeaderSearch'

export default {
  components: {
    // Breadcrumb,
    Hamburger,
    // ErrorLog,
    // Screenfull,
    // SizeSelect,
    // Search,
  },
  computed: {
    // ...mapGetters(['sidebar', 'avatar', 'device']),
  },
  methods: {
    handlerToggleClick(value) {
      console.log(value)
      // this.$store.dispatch('app/toggleSideBar')
    },
    // async logout() {
    //   await this.$store.dispatch('user/logout')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    // },
  },
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
