import type { VNode } from 'vue'
import type { NoticeType } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/notification#options
 */
export interface IElNotification {
  /** 标题 */
  title?: string
  /** 说明文字 */
  message?: string | VNode
  /** 是否将 message 属性作为 HTML 片段处理，默认值 `false` */
  dangerouslyUseHTMLString?: boolean
  /** 主题样式，如果不在可选值内将被忽略 */
  type?: NoticeType
  /** 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖 */
  iconClass?: string
  /** 自定义类名 */
  customClass?: string
  /** 显示时间, 毫秒。设为 0 则不会自动关闭，默认值 `4500` */
  duration?: number
  /** 自定义弹出位置，默认值 `top-right` */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  /** 是否显示关闭按钮，默认值 `true` */
  showClose?: boolean
  /** 关闭时的回调函数 */
  onClose?: () => void
  /** 点击 Notification 时的回调函数 */
  onClick?: () => void
  /** 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量，默认值 `0` */
  offset?: number
  /** 关闭当前的 Notification **/
  onClose?: () => void
}
