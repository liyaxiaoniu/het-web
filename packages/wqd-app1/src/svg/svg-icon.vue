<template>
  <svg :class="$style.box" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts">
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="less" module>
.box {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  line-height: 1;
  &.scoped-svg-animation {
    animation: rotate 2s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
