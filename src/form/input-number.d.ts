import type { TComponent, Size } from '../helper'

/**
 * InputNumber 计数器
 * @link https://element.eleme.cn/#/zh-CN/component/input-number#attributes
 */
export type ElInputNumber = TComponent<{
  /** 绑定值，默认值 `0` */
  value?: number
  /** 设置计数器允许的最小值，默认值 `-Infinity` */
  min: number
  /** 设置计数器允许的最大值，默认值 `Infinity` */
  max: number
  /** 计数器步长，默认值 `1` */
  step: number
  /** 是否只能输入 `step` 的倍数，默认值 `false` */
  stepStrictly: boolean
  /** 数值精度 */
  precision: number
  /** 计数器尺寸 */
  size: Size
  /** 是否禁用计数器，默认值 `false` */
  disabled: boolean
  /** 是否使用控制按钮，默认值 `true` */
  controls: boolean
  /** 控制按钮位置 */
  controlsPosition: 'right' | ''
  /** 原生属性 */
  name: string
  /** 输入框关联的 label 文字 */
  label: string
  /** 输入框默认 placeholder */
  placeholder: string
  /** 绑定值被改变时触发 */
  onChange: (currentValue: number, oldValue: number) => void
  /** 在组件 Input 失去焦点时触发 */
  onBlur: (e: Event) => void
  /** 在组件 Input 获得焦点时触发 */
  onFocus: (e: Event) => void
}, {
  /** 使 input 获取焦点 */
  focus: () => void
  /** 选中 input 中的文字 */
  blur: () => void
}>
