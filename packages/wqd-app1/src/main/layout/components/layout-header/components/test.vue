<template>
  <div :class="$style.box">
    <div>test</div>
    <div>{{ msg }}</div>
    <svg-icon name="error" />
    <svg-icon name="success" />
    <svg-icon name="clear" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import error from "@/svg/common/error.svg"

console.log("32");

@Component({})
export default class Test extends Vue {
  private msg = "rogen";
  $style!: Record<string, string>;
  private created() {
    // this.svgError = error
    console.log(this.$style);
  }
}
</script>

<style lang="less" module>
.box {
  padding: 10px;
  //   color: red;
}
</style>
