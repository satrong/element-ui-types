import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `default` 自定义底部内容
 *  - `image` 自定义图片
 *  - `description` 自定义描述文字
 * @link https://element.eleme.cn/#/zh-CN/component/empty#empty-attributes
 */
export type ElEmpty = TComponent<{
  /** 图片地址 */
  image: string
  /** 图片大小（宽度） */
  imageSize: number
  /** 文本描述 */
  description: string
}>

declare module 'vue' {
  interface GlobalComponents {
    ElEmpty: ElEmpty
  }
}
