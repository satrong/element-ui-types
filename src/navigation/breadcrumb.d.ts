import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/breadcrumb#breadcrumb-attributes
 */
export type TElBreadcrumb = TComponent<{
  /** 分隔符，默认值 `/` */
  separator?: string
  /** 图标分隔符 class */
  separatorClass?: string
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/breadcrumb#breadcrumb-item-attributes
 */
export type TElBreadcrumbItem = TComponent<{
  /** 路由跳转对象，同 vue-router 的 to */
  to?: string | Record<string, any>
  /** 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 */
  replace?: boolean
}>

declare module 'vue' {
  interface GlobalComponents {
    ElBreadcrumb: TElBreadcrumb
    ElBreadcrumbItem: TElBreadcrumbItem
  }
}
