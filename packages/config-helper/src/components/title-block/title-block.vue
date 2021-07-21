<template>
  <div class="box">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'rg-title-block',
  function: true,
  props: {
    title: String,
  },
}
</script>
<style lang="less" scoped>
.box {
  height: 60px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  position: relative;
  // display: flex;
  // align-items: center;
  &::after {
    content: ' ';
    position: absolute;
    width: 80%;
    left: 10%;
    top: 50%;
    border-bottom: 1px solid #f0f0f0;
  }
}
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  padding: 0 20px;
  background-color: #fff;
}
</style>
