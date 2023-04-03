import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `reference` 触发 Popconfirm 显示的 HTML 元素
 * @link https://element.eleme.cn/#/zh-CN/component/popconfirm#attributes
 */
export type TElPopconfirm = TComponent<{
  /** 标题 */
  title?: string
  /** 确认按钮文字 */
  confirmButtonText?: string
  /** 取消按钮文字 */
  cancelButtonText?: string
  /** 确认按钮类型，默认值 `primary` */
  confirmButtonType?: string
  /** 取消按钮类型，默认值 `text` */
  cancelButtonType?: string
  /** Icon，默认值 `el-icon-question` */
  icon?: string
  /** Icon 颜色，默认值 `#f90` */
  iconColor?: string
  /** 是否隐藏 Icon，默认值 `false` */
  hideIcon?: boolean
  /** 点击确认按钮时触发 */
  onConfirm: () => void
  /** 点击取消按钮时触发 */
  onCancel: () => void
}>

declare module 'vue' {
  interface GlobalComponents {
    ElPopconfirm: TElPopconfirm
  }
}
