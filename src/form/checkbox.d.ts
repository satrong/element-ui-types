import type { TComponent, Size } from '../helper'

export type TElCheckbox = TComponent<{
  /** 绑定值 */
  value: string | number | boolean
  /** 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） */
  label: string | number | boolean
  /** 选中时的值 */
  trueLabel: string | number
  /** 没有选中时的值 */
  falseLabel: string | number
  /** 是否禁用 */
  disabled: boolean
  /** 是否显示边框 */
  border: boolean
  /** Checkbox 的尺寸，仅在 border 为真时有效 */
  size: Size
  /** 原生 name 属性 */
  name: string
  /** 当前是否勾选 */
  checked: boolean
  /** 设置 indeterminate 状态，只负责样式控制 */
  indeterminate: boolean
  /**
   * 当绑定值变化时触发的事件
   * @param value 更新后的值
   */
  onChange: (value: unknown) => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-group-attributes
 */
export type TElCheckboxGroup = TComponent<{
  /** 绑定值 */
  value: string | number | boolean
  /** 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 */
  size: Size
  /** 是否禁用，默认值 `false` */
  disabled: boolean
  /** 可被勾选的 checkbox 的最小数量 */
  min: number
  /** 可被勾选的 checkbox 的最大数量 */
  max: number
  /** 按钮形式的 Checkbox 激活时的文本颜色，默认值 `#ffffff` */
  textColor: string
  /** 按钮形式的 Checkbox 激活时的填充色和边框色，默认值 `#409EFF` */
  fill: string
  /**
   * 当绑定值变化时触发的事件
   * @param value 更新后的值
   */
  onChange: (value: unknown) => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-button-attributes
 */
export type TElCheckboxButton = TComponent<{
  /** 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） */
  label: string | number | boolean
  /** 选中时的值 */
  trueLabel: string | number
  /** 没有选中时的值 */
  falseLabel: string | number
  /** 是否禁用，默认值 `false` */
  disabled: boolean
  /** 原生 name 属性 */
  name: string
  /** 当前是否勾选，默认值 `false` */
  checked: boolean
}>

declare module 'vue' {
  export interface GlobalComponents {
    ElCheckbox: TElCheckbox
    ElCheckboxGroup: TElCheckboxGroup
    ElCheckboxButton: TElCheckboxButton
  }
}
