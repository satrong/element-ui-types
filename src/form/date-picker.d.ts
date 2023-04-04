import type { Component } from 'vue'
import type { TComponent, Size } from '../helper'

export interface ElDatePickerShortcut {
  /** 标题文本 */
  text: string
  /** 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date()) */
  onClick: (vm: Component) => void
}

/**
 * @link https://element.eleme.cn/#/zh-CN/component/date-picker#picker-options
 */
export interface ElDatePickerOptions {
  /** 设置快捷选项，需要传入 `{ text, onClick }` */
  shortcuts?: ElDatePickerShortcut[]
  /** 设置禁用状态，参数为当前日期，要求返回 Boolean */
  disabledDate?: (date: Date) => boolean
  /** 设置日期的 className */
  cellClassName?: (date: Date) => void
  /** 周起始日，默认值 `7` */
  firstDayOfWeek?: number
  /** 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效 */
  onPick?: (obj: { maxDate: Date, minDate: Date }) => void
}

/**
 * @link https://element.eleme.cn/#/zh-CN/component/date-picker#attributes
 */
export type ElDatePicker = TComponent<{
  /** 绑定值， _DatePicker_ 类型为 `Date`， _DateRangePicker_ 类型为 `Date[]` */
  value?: Date | Date[] | string
  /** 完全只读，默认值 `false` */
  readonly?: boolean
  /** 禁用，默认值 `false` */
  disabled?: boolean
  /** 文本框可输入，默认值 `true` */
  editable?: boolean
  /** 是否显示清除按钮，默认值 `true` */
  clearable?: boolean
  /** 输入框尺寸 */
  size?: Size
  /** 非范围选择时的占位内容 */
  placeholder?: string
  /** 范围选择时开始日期的占位内容 */
  startPlaceholder?: string
  /** 范围选择时结束日期的占位内容 */
  endPlaceholder?: string
  /** 显示类型，默认值 `date` */
  type?: 'year' | 'month' | 'date' | 'dates' | 'months' | 'years' | 'week' | 'datetime' | 'datetimerange' | 'daterange' | 'monthrange'
  /** 显示在输入框中的格式，默认值 `yyyy-MM-dd` */
  format?: string
  /** 对齐方式，默认值 `left` */
  align?: 'left' | 'center' | 'right'
  /** DatePicker 下拉框的类名 */
  popperClass?: string
  /** 当前时间日期选择器特有的选项 */
  pickerOptions?: ElDatePickerOptions
  /** 选择范围时的分隔符，默认值 `'-'` */
  rangeSeparator?: string
  /** 可选，选择器打开时默认显示的时间 */
  defaultValue?: Date
  /** 范围选择时选中日期所使用的当日内具体时刻，数组，长度为 2，每项值为字符串，形如 `12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00` */
  defaultTime?: string[]
  /** 可选，绑定值的格式。不指定则绑定值为 Date 对象，默认值 `yyyy-MM-dd` */
  valueFormat?: string
  /** 原生属性 */
  name?: string
  /** 在范围选择器里取消两个日期面板之间的联动，默认值 `false` */
  unlinkPanels?: boolean
  /** 自定义头部图标的类名，默认值 `el-icon-date` */
  prefixIcon?: string
  /** 自定义清空图标的类名，默认值 `el-icon-circle-close` */
  clearIcon?: string
  /** 输入时是否触发表单的校验，默认值 `true` */
  validateEvent?: boolean
  /** DetePicker 自身是否插入至 body 元素上。默认值 `true` */
  appendToBody?: boolean
  /**
   * 用户确认选定的值时触发
   * @param value 组件绑定值。格式与绑定值一致，可受 value-format 控制
   */
  onChange: (value: Date | Date[]) => void
  /** 当 input 失去焦点时触发 */
  onBlur?: (instance: Component) => void
  /** 当 input 获得焦点时触发 */
  onFocus?: (instance: Component) => void
}, {
  /** 使 input 获取焦点 */
  focus: () => void
}>
