import type { TComponent, Size } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/radio#radio-attributes
 */
export type ElRadio = TComponent<{
  /** 绑定值 */
  value?: string | number | boolean
  /** Radio 的 value */
  label?: string | number | boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示边框 */
  border?: boolean
  /** Radio 的尺寸，仅在 border 为真时有效 */
  size?: Size
  /** 原生 name 属性 */
  name?: string
  /**
   * 绑定值变化时触发的事件
   * @param value 选中的 Radio label 值
   */
  onInput: (value: unknown) => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/radio#radio-group-attributes
 */
export type ElRadioGroup = TComponent<{
  /** 绑定值 */
  value?: string | number | boolean
  /** Radio 的尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 */
  size?: Size
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** 按钮形式的 Radio 激活时的文本颜色，默认值 `#ffffff` */
  textColor?: string
  /** 按钮形式的 Radio 激活时的填充色和边框色，默认值 `#409EFF` */
  fill?: string
  /**
   * 绑定值变化时触发的事件
   * @param value 选中的 Radio label 值
   */
  onInput: (value: unknown) => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/radio#radio-button-attributes
 */
export type ElRadioButton = TComponent<{
  /** Radio 的 value */
  label?: string | number
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** 原生 name 属性 */
  name?: string
}>
