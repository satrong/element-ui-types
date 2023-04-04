import type { TComponent, Size, ButtonType } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/button#attributes
 */
export type ElButton = TComponent<{
  /** 尺寸 */
  size?: Size
  /** 类型 */
  type?: ButtonType
  /** 是否朴素按钮，默认值 `false` */
  plain?: boolean
  /** 是否圆角按钮，默认值 `false` */
  round?: boolean
  /** 是否圆形按钮，默认值 `false` */
  circle?: boolean
  /** 是否加载中状态，默认值 `false` */
  loading?: boolean
  /** 是否禁用状态，默认值 `false` */
  disabled?: boolean
  /** 图标类名 */
  icon?: string
  /** 是否默认聚焦，默认值 `false` */
  autofocus?: boolean
  /** 原生 type 属性，默认值 `button` */
  nativeType?: 'button' | 'submit' | 'reset'
}>
