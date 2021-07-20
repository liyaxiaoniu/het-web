<template>
  <div class="form-item" role="rg-form-item">
    <div class="text">{{ label }} :</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rg-form-item',
  props: {
    label: String,
  },
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.form-item {
  font-size: 16px;
  & + & {
    margin-top: 5px;
  }
}
.text {
  line-height: 34px;
  float: left;
  width: 150px;
  text-align: right;
  color: #333;
}
.content {
  min-height: 34px;
  padding-left: 160px;
  width: 100%;
  height: 100%;
}
</style>
