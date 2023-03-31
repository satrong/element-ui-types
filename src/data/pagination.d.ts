import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `default` 自定义内容，需要在 layout 中列出 slot
 * @link https://element.eleme.cn/#/zh-CN/component/pagination#attributes
 */
export type TElPagination = TComponent<{
  /** 是否使用小型分页样式，默认值 `false` */
  small?: boolean
  /** 是否为分页按钮添加背景色，默认值 `false` */
  background?: boolean
  /** 每页显示条目个数，支持 `.sync` 修饰符，默认值 `10` */
  pageSize?: number
  /** 总条目数 */
  total?: number
  /** 总页数，`total` 和 `page-count` 设置任意一个就可以达到显示页码的功能；如果要支持 `page-sizes` 的更改，则需要使用 `total` 属性 */
  pageCount?: number
  /** 页码按钮的数量，当总页数超过该值时会折叠，默认值 `7` */
  pagerCount?: number
  /** 当前页数，支持 `.sync` 修饰符，默认值 `1` */
  currentPage?: number
  /** 组件布局，子组件名用逗号分隔，默认值 `'prev, pager, next, jumper, ->, total'` */
  layout?: string
  /** 每页显示个数选择器的选项设置，默认值 `[10, 20, 30, 40, 50, 100]` */
  pageSizes?: number[]
  /** 每页显示个数选择器的下拉框类名 */
  popperClass?: string
  /** 替代图标显示的上一页文字 */
  prevText?: string
  /** 替代图标显示的下一页文字 */
  nextText?: string
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** 只有一页时是否隐藏，默认值 `false` */
  hideOnSinglePage?: boolean
  /**
   * pageSize 改变时会触发
   * @param pageSize 每页条数
   */
  onSizeChange?: (pageSize: number) => void
  /**
   * currentPage 改变时会触发
   * @param currentPage 当前页数
   */
  onCurrentChange?: (currentPage: number) => void
  /**
   * 用户点击上一页按钮改变当前页后触发
   * @param currentPage 当前页数
   */
  onPrevClick?: (currentPage: number) => void
  /**
   * 用户点击下一页按钮改变当前页后触发
   * @param currentPage 当前页数
   */
  onNextChange?: (currentPage: number) => void
}>

declare module 'vue' {
  interface GlobalComponents {
    ElPagination: TElPagination
  }
}
