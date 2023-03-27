import { type Component } from 'vue'
import { type TComponent, type Size } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/time-picker#time-select-options
 */
interface TimeSelectOptions {
  /** 开始时间，默认值 `09:00` */
  start?: string
  /** 结束时间，默认值 `18:00` */
  end?: string
  /** 间隔时间，默认值 `00:30` */
  step?: string
  /** 最小时间，小于该时间的时间段将被禁用，默认值 `00:00` */
  minTime?: string
  /** 最大时间，大于该时间的时间段将被禁用，默认值 `—` */
  maxTime?: string
}

/**
 * @link https://element.eleme.cn/#/zh-CN/component/time-picker#time-picker-options
 */
interface TimePickerOptions {
  /** 可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'] */
  selectableRange?: string | string[]
  /**
   * 时间格式化(TimePicker)，默认值 `'HH:mm:ss'`
   * - 小时：HH
   * - 分：mm
   * - 秒：ss
   * - AM/PM：A
   */
  format?: string
}

/**
 * @link https://element.eleme.cn/#/zh-CN/component/time-picker#attributes
 */
export type TTimePicker = TComponent<{
  /** 绑定值， _TimePicker_ 类型为 `Date`， _TimeSelect_ 类型为 `string` */
  value?: Date | string
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
  /** 是否为时间范围选择，仅对 _TimePicker_ 有效，默认值 `false` */
  isRange?: boolean
  /** 是否使用箭头进行时间选择，仅对 _TimePicker_ 有效，默认值 `false` */
  arrowControl?: boolean
  /** 对齐方式，默认值 `left` */
  align?: 'left' | 'center' | 'right'
  /** _TimePicker_ 下拉框的类名 */
  popperClass?: string
  /** 当前时间日期选择器特有的选项参考下表，默认值 `{}` */
  pickerOptions?: TimeSelectOptions | TimePickerOptions
  /** 选择范围时的分隔符，默认值 `'-'` */
  rangeSeparator?: string
  /** 可选，仅 _TimePicker_ 时可用，绑定值的格式。不指定则绑定值为 Date 对象 */
  valueFormat?: string
  /** 可选，选择器打开时默认显示的时间 */
  defaultValue?: Date | string
  /** 原生属性 */
  name?: string
  /** 自定义头部图标的类名，默认值 `el-icon-time` */
  prefixIcon?: string
  /** 自定义清空图标的类名，默认值 `el-icon-circle-close` */
  clearIcon?: string
  /**
   * 用户确认选定的值时触发
   * @param value 组件绑定值
   */
  onChange?: (value: Date | string) => void
  /**
   * 当 input 失去焦点时触发
   * @param value 组件实例
   */
  onFocus?: (instance: Component) => void
  /**
   * 当 input 获得焦点时触发
   * @param value 组件实例
   */
  onBlur?: (instance: Component) => void
}, {
  /** 使 input 获取焦点 */
  focus: () => void
}>

declare module 'vue' {
  interface GlobalComponents {
    ElTimePicker: TTimePicker
  }
}
