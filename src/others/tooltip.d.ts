import type { TComponent, EffectType, Placement } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/tooltip#attributes
 */
export type ElTooltip = TComponent<{
  /** 状态是否可见，默认值 `false` */
  value?: boolean
  /** 默认提供的主题，默认值 `dark` */
  effect?: EffectType
  /** 显示的内容，也可以通过 slot#content 传入 DOM */
  content?: string
  /** Tooltip 的出现位置 */
  placement?: Placement
  /** Tooltip 是否可用，默认值 `false` */
  disabled?: boolean
  /** 出现位置的偏移量，默认值 `0` */
  offset?: number
  /** 定义渐变动画，默认值 `el-fade-in-linear` */
  transition?: string
  /** 是否显示 Tooltip 箭头，更多参数可见Vue-popper，默认值 `true` */
  visibleArrow?: boolean
  /** popper.js 的参数，默认值 `{ boundariesElement: 'body', gpuAcceleration: false }` */
  popperOptions?: Record<string, any>
  /** 延迟出现，单位毫秒，默认值 `0` */
  openDelay?: number
  /** 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效，默认值 `false` */
  manual?: boolean
  /** 为 Tooltip 的 popper 添加类名 */
  popperClass?: string
  /** 鼠标是否可进入到 tooltip 中，默认值 `true` */
  enterable?: boolean
  /** Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏，默认值 `0` */
  hideAfter?: number
  /** Tooltip 组件的 tabindex，默认值 `0` */
  tabindex?: number
}>
