import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `default` 自定义头像展示内容
 * @link https://element.eleme.cn/#/zh-CN/component/avatar#attributes
 */
export type ElAvatar = TComponent<{
  /** 设置头像的图标类型，参考 Icon 组件 */
  icon: string
  /** 设置头像的大小，默认值 `large` */
  size: 'large' | 'medium' | 'small' | number
  /** 设置头像的形状，默认值 `circle` */
  shape: 'circle' | 'square'
  /** 图片头像的资源地址 */
  src: string
  /** 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像 */
  srcSet: string
  /** 描述图像的替换文本 */
  alt: string
  /** 当展示类型为图片的时候，设置图片如何适应容器框，默认值 `cover` */
  fit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  /** 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 */
  onError: (e: Event) => boolean
}>
