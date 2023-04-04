import type { TComponent, Size } from '../helper'

/**
 * ## Slot
 *  - `title` 自定义标题，显示在左上方
 *  - `extra` 自定义操作区，显示在右上方
 * @link https://element.eleme.cn/#/zh-CN/component/descriptions#descriptions-attributes
 */
export type ElDescriptions = TComponent<{
  /** 是否带有边框，默认值 `false` */
  border?: boolean
  /** 一行 Descriptions Item 的数量，默认值 `3` */
  column?: number
  /** 排列的方向，默认值 `horizontal` */
  direction?: 'vertical' | 'horizontal'
  /** 列表的尺寸，默认值 `medium` */
  size?: Size
  /** 标题文本，显示在左上方 */
  title?: string
  /** 操作区文本，显示在右上方 */
  extra?: string
  /** 是否显示冒号，默认值 `true` */
  colon?: boolean
  /** 自定义标签类名 */
  labelClassName?: string
  /** 自定义内容类名 */
  contentClassName?: string
  /** 自定义标签样式 */
  labelStyle?: Record<string, string>
  /** 自定义内容样式 */
  contentStyle?: Record<string, string>
}>

/**
 * ## Slot
 *  - `label` 自定义标签文本
 * @link https://element.eleme.cn/#/zh-CN/component/descriptions#descriptions-item-attributes
 */
export type ElDescriptionsItem = TComponent<{
  /** 标签文本 */
  label?: string
  /** 列的数量 */
  span?: number
  /** 自定义标签类名 */
  labelClassName?: string
  /** 自定义内容类名 */
  contentClassName?: string
  /** 自定义标签样式 */
  labelStyle?: Record<string, string>
  /** 自定义内容样式 */
  contentStyle?: Record<string, string>
}>
