import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `default` 用来展示真实 UI
 *  - `template` 用来展示自定义占位符
 * @link https://element.eleme.cn/#/zh-CN/component/skeleton#skeleton-attributes
 */
export type TElSkeleton = TComponent<{
  /** 是否使用动画，默认值 `false` */
  animated?: boolean
  /** 渲染多少个 template, 建议使用尽可能小的数字，默认值 `1` */
  count?: number
  /** 是否显示 skeleton 骨架屏，默认值 `true` */
  loading?: boolean
  /** 骨架屏段落数量，默认值 `4` */
  rows?: number
  /** 延迟占位 DOM 渲染的时间, 单位是毫秒，默认值 `0` */
  throttle?: number
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/skeleton#skeleton-item-attributes
 */
export type TElSkeletonItem = TComponent<{
  /** 当前显示的占位元素的样式，默认值 `text` */
  variant: 'p' | 'h1' | 'h3' | 'text' | 'caption' | 'button' | 'image' | 'circle' | 'rect'
}>

declare module 'vue' {
  interface GlobalComponents {
    ElSkeleton: TElSkeleton
    ElSkeletonItem: TElSkeletonItem
  }
}
