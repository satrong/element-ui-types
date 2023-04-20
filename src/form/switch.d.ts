import { type TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/switch#attributes
 */
export type ElSwitch = TComponent<{
  /** 绑定值 */
  value?: boolean | string | number
  /** 是否禁用 */
  disabled?: boolean
  /** switch 的宽度（像素） */
  width?: number
  /** switch 打开时所显示图标的类名，设置此项会忽略 active-text */
  activeIconClass?: string
  /** switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text */
  inactiveIconClass?: string
  /** switch 打开时的文字描述 */
  activeText?: string
  /** switch 关闭时的文字描述 */
  inactiveText?: string
  /** switch 打开时的值，默认值 `true` */
  activeValue?: boolean | string | number
  /** switch 关闭时的值，默认值 `false` */
  inactiveValue?: boolean | string | number
  /** switch 打开时的背景色，默认值 `#409EFF` */
  activeColor?: string
  /** switch 关闭时的背景色，默认值 `#C0CCDA` */
  inactiveColor?: string
  /** switch 对应的 name 属性 */
  name?: string
  /** 改变 switch 状态时是否触发表单的校验，默认值 `true` */
  validateEvent?: boolean
  onChange?: (value: any) => void
}, {
  /** 使 Switch 获取焦点 */
  focus: () => void
}>
