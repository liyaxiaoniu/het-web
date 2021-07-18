/* eslint-disable @typescript-eslint/no-empty-interface */
export {}
type LcFn = (props?: any) => unknown
declare global {
  interface Window {
    // 打包后的文件对象
    __manifest__?: { files: string[]; entrypoints: string[] }
    // 微前端标志位
    __rg_wqd__?: boolean
    // 微前端生命周期函数
    __wqd_lc__?: {
      bootstrap: LcFn
      mount: LcFn
      unmount: LcFn
      update?: LcFn
    }
    [key: string]: any
  }

  namespace JSX {
    // jsx标签指向的函数必须返回VNode
    interface Element {
      // render: any
    }

    // interface ElementAttributesProperty {
    //   props // 指定用来使用的属性名
    // }

    interface ElementAttrs {
      type
    }

    interface ElementClass {}
    interface IntrinsicElements {
      [elem: string]: {
        class?: string | string[]
        [elem: string]: any
      }
    }
  }
}
