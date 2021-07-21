<template>
  <div>
    <rg-title-block title="账号密码设置"></rg-title-block>
    <div>
      <rg-form-item label="账号">
        <rg-input :value="acc"></rg-input>
      </rg-form-item>
      <rg-form-item label="密码">
        <rg-input></rg-input>
      </rg-form-item>
      <rg-form-item label="备注">
        <rg-input></rg-input>
      </rg-form-item>
    </div>
  </div>
</template>
<script>
import RgFormItem from '@/components/form-item'
// import RgRadio from '@/components/radio'
import RgInput from '@/components/input'

import { getState } from '@/store'
import RgTitleBlock from '@/components/title-block'

const stateKey = 'accData'
export default {
  name: 'env-config',
  components: {
    RgTitleBlock,
    RgFormItem,
    RgInput,
    // RgRadio,
  },
  created() {
    const data = getState(stateKey) || {}
    this.acc = data.acc || 'rogen' // 账号
    this.pwd = data.pwd || '3234234' // 密码
    debugger
    this.history = data.history
  },
  methods: {
    getParams() {
      return {
        [stateKey]: {
          acc: this.acc,
          pwd: this.pwd,
          history: this.history,
        },
      }
    },
  },
}
</script>
