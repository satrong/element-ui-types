import type { TComponent, ThemeType } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/timeline#timeline-attributes
 */
export type ElTimeline = TComponent<{
  /** 指定节点排序方向，默认为正序，默认值 `false` */
  reverse?: boolean
}>

/**
 * ## Slot
 *  - `default` Timeline-Item 的内容
 *  - `dot` 自定义节点
 * @linkhttps://element.eleme.cn/#/zh-CN/component/timeline#timeline-item-attributes
 */
export type ElTimelineItem = TComponent<{
  /** 时间戳 */
  timestamp?: string
  /** 是否隐藏时间戳，默认值 `false` */
  hideTimestamp?: boolean
  /** 时间戳位置，默认值 `bottom` */
  placement?: 'top' | 'bottom'
  /** 节点类型 */
  type?: 'primary' | ThemeType
  /** 节点颜色 */
  color?: string
  /** 节点尺寸，默认值 `normal` */
  size?: 'normal' | 'large'
  /** 节点图标 */
  icon?: string
}>
