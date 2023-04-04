import type { TComponent, NoticeType } from '../helper'

/**
 * ## Slot
 *  - `icon` 自定义图标
 *  - `title` 自定义标题
 *  - `subTitle` 自定义二级标题
 *  - `extra` 自定义底部额外区域
 * @link https://element.eleme.cn/#/zh-CN/component/result#result-attributes
 */
export type ElResult = TComponent<{
  /** 标题 */
  title?: string
  /** 二级标题 */
  subTitle?: string
  /** 图标类型，默认值 `info` */
  icon?: NoticeType
}>
