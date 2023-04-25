import type { TComponent, Placement } from '../helper'

/**
 * ## Slot
 *  - `default` Popover 内嵌 HTML 文本
 *  - `reference` 触发 Popover 显示的 HTML 元素
 * @link https://element.eleme.cn/#/zh-CN/component/popover#attributes
 */
export type ElPopover = TComponent<{
  /** 状态是否可见，默认值 `false` */
  value?: boolean
  /** 触发方式，默认值 `click` */
  trigger?: 'click' | 'focus' | 'hover' | 'manual'
  /** 标题 */
  title?: string
  /** 显示的内容，也可以通过 slot 传入 DOM */
  content?: string
  /**
   * 宽度
   * @default 最小宽度 150px
   */
  width?: string | number
  /** 出现位置 */
  placement?: Placement
  /** Popover 是否可用，默认值 `false` */
  disabled?: boolean
  /** 出现位置的偏移量，默认值 `0` */
  offset?: number
  /** 定义渐变动画，默认值 `fade-in-linear` */
  transition?: string
  /** 是否显示 Tooltip 箭头，更多参数可见Vue-popper，默认值 `true` */
  visibleArrow?: boolean
  /** popper.js 的参数，默认值 `{ boundariesElement: 'body', gpuAcceleration: false }` */
  popperOptions?: Record<string, any>
  /** 为 popper 添加类名 */
  popperClass?: string
  /** 触发方式为 hover 时的显示延迟，单位为毫秒，默认值 `0` */
  openDelay?: number
  /** 触发方式为 hover 时的隐藏延迟，单位为毫秒，默认值 `200` */
  closeDelay?: number
  /** Popover 组件的 tabindex，默认值 `0` */
  tabindex?: number
  /** 显示时触发 */
  onShow?: () => void
  /** 显示动画播放完毕后触发 */
  onAfterEnter?: () => void
  /** 隐藏时触发 */
  onHide?: () => void
  /** 隐藏动画播放完毕后触发 */
  onAfterLeave?: () => void
}>
