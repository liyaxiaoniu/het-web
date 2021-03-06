declare module '*.less' {
  interface Stringifyable {
    /**
     * Stringifies the imported stylesheet for use with inline style tags
     */
    toString(): string
  }
  interface SelectorNode {
    /**
     * Returns the specific selector from imported stylesheet as string
     */

    [key: string]: string
  }
  const styles: SelectorNode & Stringifyable
  export const locals: {
    [key: string]: string
  }
  export default styles
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
