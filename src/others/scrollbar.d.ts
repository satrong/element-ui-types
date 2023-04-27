import type { TComponent } from '../helper'

export type ElScrollbar = TComponent<{
  native?: boolean
  wrapStyle?: string | Array<Record<string, string>>
  wrapClass?: string | string[] | Record<string, boolean>
  viewClass?: string | string[] | Record<string, boolean>
  viewStyle?: string | Record<string, string>
  /** 如果 container 尺寸不会发生变化，最好设置它可以优化性能 */
  noresize?: boolean
  /** 默认值 `div` */
  tag?: string
}>
