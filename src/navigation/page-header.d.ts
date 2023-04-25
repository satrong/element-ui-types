import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `title` 标题内容
 *  - `content` 内容
 * @link https://element.eleme.cn/#/zh-CN/component/page-header#attributes
 */
export type ElPageHeader = TComponent<{
  /** 标题，默认值 `返回` */
  title?: string
  /** 内容 */
  content?: string
  /** 点击左侧区域触发 */
  onBack?: () => void
}>
