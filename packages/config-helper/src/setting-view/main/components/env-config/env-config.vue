<template>
  <div>
    <rg-title-block title="后台环境配置"></rg-title-block>

    <rg-form-item label="后台环境">
      <rg-radio
        name="env"
        v-for="item in envList"
        :key="item.value"
        :text="`${item.value}( ${item.text} )`"
        :value="item.value"
        :checked="env === item.value"
        @change="hanlderChange"
      />
    </rg-form-item>
  </div>
</template>
<script>
import RgFormItem from '@/components/form-item'
import RgRadio from '@/components/radio'
import { getState } from '@/store'
import RgTitleBlock from '@/components/title-block'

export default {
  name: 'env-config',
  components: {
    RgTitleBlock,
    RgFormItem,
    RgRadio,
  },
  created() {
    this.envList = [
      { value: 'fat1', text: 'http://192.36.3.4' },
      { value: 'fat2', text: 'http://192.36.3.4' },
      { value: 'fat3', text: 'http://192.36.3.4' },
      { value: 'fat4', text: 'http://192.36.3.4' },
      { value: 'dev1', text: 'http://192.36.3.4' },
      { value: 'dev2', text: 'http://192.36.3.4' },
      { value: 'dev3', text: 'http://192.36.3.4' },
    ]
    this.env = getState('env') || ''
  },
  methods: {
    // 处理点击事件
    hanlderChange(value) {
      this.env = value
    },

    getParams() {
      return {
        env: this.env,
      }
    },
  },
}
</script>
