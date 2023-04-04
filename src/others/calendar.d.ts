import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `dateCell` 自定义日期内容，scoped 参数为 `{ date: Date, data: { type: 'prev-month' | 'current-month' | 'next-month', isSelected: boolean; day: string } }`
 * @link https://element.eleme.cn/#/zh-CN/component/calendar#attributes
 */
export type TElCalendar = TComponent<{
  /** 绑定值 */
  value?: Date | string | number
  /** 时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。 */
  range?: Date[]
  /** 周起始日，默认值 `1` */
  firstDayOfWeek?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}>

declare module 'vue' {
  interface GlobalComponents {
    ElCalendar: TElCalendar
  }
}
