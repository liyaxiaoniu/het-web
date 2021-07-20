<template>
  <div class="box">
    <input class="input" type="text" />
  </div>
</template>

<script>
export default {
  name: 'rg-input',
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
  font-weight: 24px;
}
.input {
  border: 1px solid #aaa;
  padding: 0px 10px;
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  color: #333;
  font-size: inherit;
  line-height: inherit;
  height: 34px;
}
</style>
