import type { VNode, Component } from 'vue'
import type { NoticeType } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/message#options
 */
export interface IElMessage {
  /** 消息文字 */
  message?: string | VNode
  /** 主题，默认值 `info` */
  type?: NoticeType
  /** 自定义图标的类名，会覆盖 type */
  iconClass?: string
  /** 是否将 message 属性作为 HTML 片段处理，默认值 `false` */
  dangerouslyUseHTMLString?: boolean
  /** 自定义类名 */
  customClass?: string
  /** 显示时间, 毫秒。设为 0 则不会自动关闭，默认值 `3000` */
  duration?: number
  /** 是否显示关闭按钮，默认值 `false` */
  showClose?: boolean
  /** 文字是否居中，默认值 `false` */
  center?: boolean
  /** 关闭时的回调函数, 参数为被关闭的 message 实例 */
  onClose?: (instance: Component) => void
  /** Message 距离窗口顶部的偏移量，默认值 `20` */
  offset?: number
  /** 关闭当前的 **/
  onClose?: () => void
}
