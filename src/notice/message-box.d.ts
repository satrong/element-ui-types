import type { VNode, Component } from 'vue'
import type { NoticeType } from '../helper'

type TMessageBoxAction = 'confirm' | 'cancel' | 'close'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/message-box#options
 */
export interface ElMessageBoxOptions {
  /** MessageBox 标题 */
  title?: string
  /** MessageBox 消息正文内容 */
  message?: string | VNode
  /** 是否将 message 属性作为 HTML 片段处理，默认值 `false` */
  dangerouslyUseHTMLString?: boolean
  /** 消息类型，用于显示图标 */
  type?: NoticeType
  /** 自定义图标的类名，会覆盖 type */
  iconClass?: string
  /** MessageBox 的自定义类名 */
  customClass?: string
  /**
   * 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调 `function(action, instance)`
   * @param action 可选值 'confirm', 'cancel' 或 'close'
   * @param instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法
   */
  callback?: (action: TMessageBoxAction, instance: Component) => void
  /** MessageBox 是否显示右上角关闭按钮，默认值 `true` */
  showClose?: boolean
  /**
   * MessageBox 关闭前的回调，会暂停实例的关闭 `function(action, instance, done)`
   * @param action 可选值 'confirm', 'cancel' 或 'close'
   * @param instance MessageBox 实例，可以通过它访问实例上的属性和方法
   * @param done 用于关闭 MessageBox 实例
   */
  beforeClose?: (action: TMessageBoxAction, instance: Component, done: () => void) => void
  /** 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分，默认值 `false` */
  distinguishCancelAndClose?: boolean
  /** 是否在 MessageBox 出现时将 body 滚动锁定，默认值 `true` */
  lockScroll?: boolean
  /** 是否显示取消按钮，默认值 `false`（以 confirm 和 prompt 方式调用时为 true） */
  showCancelButton?: boolean
  /** 是否显示确定按钮，默认值 `true` */
  showConfirmButton?: boolean
  /** 取消按钮的文本内容，默认值 `取消` */
  cancelButtonText?: string
  /** 确定按钮的文本内容，默认值 `确定` */
  confirmButtonText?: string
  /** 取消按钮的自定义类名 */
  cancelButtonClass?: string
  /** 确定按钮的自定义类名 */
  confirmButtonClass?: string
  /** 是否可通过点击遮罩关闭 MessageBox，默认值 `true`（以 alert 方式调用时为 false） */
  closeOnClickModal?: boolean
  /** 是否可通过按下 ESC 键关闭 MessageBox，默认值 `true`（以 alert 方式调用时为 false） */
  closeOnPressEscape?: boolean
  /** 是否在 hashchange 时关闭 MessageBox，默认值 `true` */
  closeOnHashChange?: boolean
  /** 是否显示输入框，默认值 `false`（以 prompt 方式调用时为 true） */
  showInput?: boolean
  /** 输入框的占位符 */
  inputPlaceholder?: string
  /** 输入框的类型，默认值 `text` */
  inputType?: string
  /** 输入框的初始文本 */
  inputValue?: string
  /** 输入框的校验表达式 */
  inputPattern?: RegExp
  /** 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage */
  inputValidator?: () => boolean | string
  /** 校验未通过时的提示文本，默认值 `输入的数据不合法!` */
  inputErrorMessage?: string
  /** 是否居中布局，默认值 `false` */
  center?: boolean
  /** 是否使用圆角按钮，默认值 `false` */
  roundButton?: boolean
}
