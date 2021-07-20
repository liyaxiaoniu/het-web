<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rg-radio-group',
  props: {
    value: String,
  },
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
}
</style>
