import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/backtop#attributes
 */
export type ElBacktop = TComponent<{
  /** 触发滚动的对象 */
  target?: string
  /** 滚动高度达到此参数值才出现，默认值 `200` */
  visibilityHeight?: number
  /** 控制其显示位置, 距离页面右边距，默认值 `40` */
  right?: number
  /** 控制其显示位置, 距离页面底部距离，默认值 `40` */
  bottom?: number
  /** 点击按钮触发的事件 */
  onClick: (e: Event) => void
}>
