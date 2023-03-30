import type { TComponent, ButtonType } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/link#attributes
 */
export type TElLink = TComponent<{
  /** 类型 */
  type?: Exclude<ButtonType, 'text'>
  /** 是否下划线，默认值 `true` */
  underline?: boolean
  /** 是否禁用状态，默认值 `false` */
  disabled?: boolean
  /** 原生 href 属性 */
  href?: string
  /** 图标类名 */
  icon?: string
}>

declare module 'vue' {
  interface GlobalComponents {
    ElLink: TElLink
  }
}
