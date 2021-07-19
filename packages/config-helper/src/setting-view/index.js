// import Vue from 'vue'
import Main from './main'
/**
 * 创建vue实例
 * @returns
 */
export function createInstance(Vue = window.__vendor__.vue) {
  const el = document.createElement('div')
  document.body.append(el)

  const instance = new Vue({
    render(h) {
      return h(Main, { ref: 'main' })
    },
    methods: {
      show() {
        const main = this.$refs.main
        main.isShow = true
      },
      hide() {
        const main = this.$refs.main
        main.isShow = true
      },
    },
  })
  instance.$mount(el)
  return instance
}
