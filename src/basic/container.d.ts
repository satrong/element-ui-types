import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/container#container-attributes
 */
export type ElContainer = TComponent<{
  /** 子元素的排列方向。子元素中有 el-header 或 el-footer 时为 `vertical`，否则为 `horizontal` */
  direction?: 'horizontal' | 'vertical'
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/container#header-attributes
 */
export type ElHeader = TComponent<{
  /** 顶栏高度，默认值 `60px` */
  height?: string
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/container#aside-attributes
 */
export type ElAside = TComponent<{
  /** 侧边栏宽度，默认值 `300px` */
  width?: string
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/container#footer-attributes
 */
export type ElFooter = TComponent<{
  /** 底栏高度，默认值 `60px` */
  height?: string
}>
