<template>
  <label class="box">
    <input
      class="input"
      type="checkbox"
      :name="name"
      :value="value"
      @change="handlerChange"
    />
    <div class="text">{{ text }}</div>
  </label>
</template>

<script>
export default {
  name: 'rg-checkbox',
  props: {
    value: String,
    text: String,
    name: String,
    checked: Boolean,
  },
  data() {
    // return {}
  },
  methods: {
    handlerChange(e) {
      console.log(e.target.value)
      this.$emit('change', e.target.value)
    },
  },
}
</script>
<style lang="less" scoped>
.box {
  display: inline-block;
  padding: 0 10px;
  // display: flex;
  // align-items: center;
}
.input {
  border: 1px solid #aaa;
  color: #333;
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  height: 34px;
  vertical-align: middle;
  width: 14px;
}
.text {
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
}
</style>
