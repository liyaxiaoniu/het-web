/* eslint-disable @typescript-eslint/no-empty-interface */
export {}
import { ComponentRenderProxy } from '@vue/composition-api'
import Vue, { VNode } from 'vue'

type LcFn = (props?: any) => unknown
declare global {
  type LcProps = {
    url: string
    name: string
    el: HTMLElement
    activeWhen: string
    fetch: (p: string | string[]) => Promise<any>
  }

  interface Window {
    // 微前端标志位
    __rg_wqd__?: boolean
    // 微前端生命周期函数
    __wqd_lc__?: {
      bootstrap: LcFn
      mount: LcFn
      unmount: LcFn
      unload?: LcFn
    }
    // [key: string]: any
  }

  namespace JSX {
    interface Element extends VNode {}

    interface ElementAttributesProperty {
      props: any // 指定用来使用的属性名
    }

    interface ElementAttrs {}

    interface ElementClass extends ComponentRenderProxy {}

    interface IntrinsicElements {
      [elem: string]: {
        class?: string | string[]
        [elem: string]: any
      }
    }
  }
}
