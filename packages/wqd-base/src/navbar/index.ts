import Navbar from './navbar'

import Vue from 'vue'

export function create(el: HTMLDivElement) {
  const elWrapper = document.createElement('div')
  el.append(elWrapper)

  const instance = new Vue({
    render: (h: any) => h(Navbar),
  })
  instance.$mount(elWrapper)
  return instance
}
// export { Navbar }
