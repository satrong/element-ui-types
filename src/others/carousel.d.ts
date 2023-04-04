import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/carousel#carousel-attributes
 */
export type TElCarousel = TComponent<{
  /** 走马灯的高度 */
  height?: string
  /** 初始状态激活的幻灯片的索引，从 0 开始，默认值 `0` */
  initialIndex?: number
  /** 指示器的触发方式 */
  trigger?: 'click'
  /** 是否自动切换，默认值 `true` */
  autoplay?: boolean
  /** 自动切换的时间间隔，单位为毫秒，默认值 `3000` */
  interval?: number
  /** 指示器的位置 */
  indicatorPosition?: 'outside' | 'none'
  /** 切换箭头的显示时机，默认值 `hover` */
  arrow?: 'always' | 'hover' | 'never'
  /** 走马灯的类型 */
  type?: 'card'
  /** 是否循环显示，默认值 `true` */
  loop?: boolean
  /** 走马灯展示的方向，默认值 `horizontal` */
  direction?: 'horizontal' | 'vertical'
  /**
   * 幻灯片切换时触发
   * @param index 目前激活的幻灯片的索引，原幻灯片的索引
   */
  onChange?: (index: number) => void
}, {
  /**
   * 手动切换幻灯片
   * @param index 需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值
   */
  setActiveItem: (index: number) => void
  /** 切换至上一张幻灯片 */
  prev: () => void
  /** 切换至下一张幻灯片 */
  next: () => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/carousel#carousel-item-attributes
 */
export type TElCarouselItem = TComponent<{
  /** 幻灯片的名字，可用作 setActiveItem 的参数 */
  name?: string
  /** 该幻灯片所对应指示器的文本 */
  label?: string
}>

declare module 'vue' {
  interface GlobalComponents {
    ElCarousel: TElCarousel
    ElCarouselItem: TElCarouselItem
  }
}
