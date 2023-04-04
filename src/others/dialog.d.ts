import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `default` Dialog 的内容
 *  - `title` Dialog 标题区的内容
 *  - `footer` Dialog 按钮操作区的内容
 * @link https://element.eleme.cn/#/zh-CN/component/dialog#attributes
 */
export type ElDialog = TComponent<{
  /** 是否显示 Dialog，支持 .sync 修饰符，默认值 `false` */
  visible?: boolean
  /** Dialog 的标题，也可通过具名 slot （见下表）传入 */
  title?: string
  /** Dialog 的宽度，默认值 `50%` */
  width?: string
  /** 是否为全屏 Dialog，默认值 `false` */
  fullscreen?: boolean
  /** Dialog CSS 中的 margin-top 值，默认值 `15vh` */
  top?: string
  /** 是否需要遮罩层，默认值 `true` */
  modal?: boolean
  /** 遮罩层是否插入至 body 元素上，若为 `false`，则遮罩层会插入至 Dialog 的父元素上，默认值 `true` */
  modalAppendToBody?: boolean
  /** Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 `false` */
  appendToBody?: boolean
  /** 是否在 Dialog 出现时将 body 滚动锁定，默认值 `true` */
  lockScroll?: boolean
  /** Dialog 的自定义类名 */
  customClass?: string
  /** 是否可以通过点击 modal 关闭 Dialog，默认值 `true` */
  closeOnClickModal?: boolean
  /** 是否可以通过按下 ESC 关闭 Dialog，默认值 `true` */
  closeOnPressEscape?: boolean
  /** 是否显示关闭按钮，默认值 `true` */
  showClose?: boolean
  /** 关闭前的回调，会暂停 Dialog 的关闭 */
  beforeClose?: (done: () => void) => void
  /** 是否对头部和底部采用居中布局，默认值 `false` */
  center?: boolean
  /** 关闭时销毁 Dialog 中的元素，默认值 `false` */
  destroyOnClose?: boolean
  /** Dialog 打开的回调 */
  onOpen: () => void
  /** Dialog 打开动画结束时的回调 */
  onOpened: () => void
  /** Dialog 关闭的回调 */
  onClose: () => void
  /** Dialog 关闭动画结束时的回调 */
  onClosed: () => void
}>
