import { AppProps } from 'single-spa'

export type CustomProps = {
  activeWhen: string
  url: string
  el: HTMLDivElement
  win: Window
  fetchVendor: (src: string | string[]) => Promise<any>
}
export type LcProps = CustomProps & AppProps
