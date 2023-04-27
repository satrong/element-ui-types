import type { VNode } from 'vue'
import type { TComponent } from '../helper'

/**
 * ## Slot
 *  - `prefix` 数值的前缀
 *  - `suffix` 数值的后缀
 *  - `formatter` 自定义数值展示
 *  - `title` 数值的标题
 * @version 2.15.11+
 * @link https://element.eleme.cn/#/zh-CN/component/statistic#statistic-attributes
 */
export type ElStatistic = TComponent<{
  /** 数值内容。如果为倒计时模式，则类型为 `string` */
  value?: string | number
  /** 设置小数点，默认值 `.` */
  decimalSeparator?: string
  /** 自定义数值展示 */
  formatter?: (param: { value: string | number }) => VNode
  /** 设置千分位标识符，默认值 `,` */
  groupSeparator?: string
  /** 数值精度，默认值 `0` */
  precision?: number
  /** 设置数值的前缀 */
  prefix?: string
  /** 设置数值的后缀 */
  suffix?: string
  /** 数值的标题 */
  title?: string
  /** 设置数值的样式 */
  valueStyle?: Record<string, string>
  /** 设置倍率，默认值 `1000` */
  rate?: number
  /** 是否开启倒计时功能，默认值 `false` */
  timeIndices?: boolean
  /** 格式化倒计时展示，默认值 `HH:mm:ss`。 `time-indices` 为 `true` 时生效 */
  format?: string
  /** 在 _倒计时_ 的功能中开启 */
  onChange?: (value: Date) => void
  /** 在 _倒计时_ 完成后启动 */
  onFinish?: (value: boolean) => void
}, {
  /** 暂停倒计时 */
  suspend: (isStop: boolean) => string
}>
