<template>
  <label class="box">
    <input
      class="input"
      :name="name"
      type="radio"
      :value="value"
      @change="handlerChange"
      :checked="checked"
    />
    <div class="text">{{ text }}</div>
  </label>
</template>

<script>
export default {
  name: 'rg-radio',
  props: {
    name: String,
    value: String,
    text: String,
    checked: Boolean,
  },
  data() {
    return {}
  },
  methods: {
    handlerChange(e) {
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
