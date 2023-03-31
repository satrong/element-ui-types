import type { TComponent, ThemeType } from '../helper'

/**
 * https://element.eleme.cn/#/zh-CN/component/badge#attributes
 */
export type TElBadge = TComponent<{
  /** 显示值 */
  value?: string | number
  /** 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 */
  max?: number
  /** 小圆点，默认值 `false` */
  isDot?: boolean
  /** 隐藏 badge，默认值 `false` */
  hidden?: boolean
  /** 类型，默认值 `primary` */
  type?: 'primary' | ThemeType
}>

declare module 'vue' {
  interface GlobalComponents {
    ElBadge: TElBadge
  }
}
