import Vue from 'vue'
// 全局注册组件
import SvgIcon from './svg-icon.vue' // svg组件
Vue.component('SvgIcon', SvgIcon)

// import error from "./common/error.svg"
// console.log(error)

const requireContext = require.context('./common', false, /\.svg$/)

// 将所有svg全加载一遍
requireContext.keys().forEach(requireContext)

// console.log(requireContext)
// console.log(requireContext.keys())
// console.log(requireContext.id)
// console.log("request.resolve()", requireContext.resolve("./error.svg"))
// console.log(requireContext.resolve)
