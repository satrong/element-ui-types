import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/layout#row-attributes
 */
export type ElRow = TComponent<{
  /** 栅格间隔，默认值 `0` */
  gutter?: number
  /** 布局模式，可选 `flex`，现代浏览器下有效 */
  type?: 'flex'
  /** flex 布局下的水平排列方式 */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  /** flex 布局下的垂直排列方式 */
  align?: 'top' | 'middle' | 'bottom'
  /** 自定义元素标签，默认值 `div` */
  tag?: string
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/layout#col-attributes
 */
export type ElCol = TComponent<{
  /** 栅格占据的列数，默认值 `24` */
  span?: number
  /** 栅格左侧的间隔格数，默认值 `0` */
  offset?: number
  /** 栅格向右移动格数，默认值 `0` */
  push?: number
  /** 栅格向左移动格数，默认值 `0` */
  pull?: number
  /** <768px 响应式栅格数或者栅格属性对象 */
  xs?: number | { span?: number, offset?: number }
  /** ≥768px 响应式栅格数或者栅格属性对象 */
  sm?: number | { span?: number, offset?: number }
  /** ≥992px 响应式栅格数或者栅格属性对象 */
  md?: number | { span?: number, offset?: number }
  /** ≥1200px 响应式栅格数或者栅格属性对象 */
  lg?: number | { span?: number, offset?: number }
  /** ≥1920px 响应式栅格数或者栅格属性对象 */
  xl?: number | { span?: number, offset?: number }
  /** 自定义元素标签，默认值 `div` */
  tag?: string
}>
