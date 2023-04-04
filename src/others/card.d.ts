import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/card#attributes
 */
export type ElCard = TComponent<{
  /** 设置 header，也可以通过 slot#header 传入 DOM */
  header?: string
  /** 设置 body 的样式，默认值 `{ padding: '20px' }` */
  bodyStyle?: Record<string, any>
  /** 设置阴影显示时机，默认值 `always` */
  shadow?: 'always' | 'hover' | 'never'
}>
