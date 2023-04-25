import type { TComponent } from '../helper'

/**
 * ## Slots
 *  - `placeholder` 图片未加载的占位内容
 * - `error` 加载失败的内容
 * @link https://element.eleme.cn/#/zh-CN/component/image#attributes
 */
export type ElImage = TComponent<{
  /** 图片源，同原生 */
  src?: string
  /** 确定图片如何适应容器框，同原生 object-fit */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  /** 原生 alt */
  alt?: string
  /** 原生 referrerPolicy */
  referrerPolicy?: string
  /** 是否开启懒加载，默认值 `false` */
  lazy?: boolean
  /**
   * 开启懒加载后，监听 scroll 事件的容器
   * @default 最近一个 overflow 值为 auto 或 scroll 的父元素
   */
  scrollContainer?: string | HTMLElement
  /** 开启图片预览功能 */
  previewSrcList?: string[]
  /** 设置图片预览的 z-index，默认值 `2000` */
  zIndex?: number
  /** 图片预览初始图片index */
  initialIndex?: number
  /** 图片加载成功触发 */
  onLoad?: (e: Event) => void
  /** 图片加载失败触发 */
  onError?: (e: Error) => void
}>
