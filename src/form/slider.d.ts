import { type TComponent, type Size } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/slider#attributes
 */
export type ElSlider = TComponent<{
  /** 绑定值，默认值 `0` */
  value?: number
  /** 最小值，默认值 `0` */
  min?: number
  /** 最大值，默认值 `100` */
  max?: number
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** 步长，默认值 `1` */
  step?: number
  /** 是否显示输入框，仅在非范围选择时有效，默认值 `false` */
  showInput?: boolean
  /** 在显示输入框的情况下，是否显示输入框的控制按钮，默认值 `true` */
  showInputControls?: boolean
  /** 输入框的尺寸，默认值 `small` */
  inputSize?: Size | 'large'
  /** 是否显示间断点，默认值 `false` */
  showStops?: boolean
  /** 是否显示 tooltip，默认值 `true` */
  showTooltip?: boolean
  /** 格式化 tooltip message */
  formatTooltip?: (value: number) => string
  /** 是否为范围选择，默认值 `false` */
  range?: boolean
  /** 是否竖向模式，默认值 `false` */
  vertical?: boolean
  /** Slider 高度，竖向模式时必填 */
  height?: string
  /** 屏幕阅读器标签 */
  label?: string
  /** 输入时的去抖延迟，毫秒，仅在show-input等于true时有效，默认值 `300` */
  debounce?: number
  /** tooltip 的自定义类名 */
  tooltipClass?: string
  /** 标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式 */
  marks?: Record<number, string | { style: Record<string, any>, label: string }>
  /**
   * 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）
   * @param value 改变后的值
   */
  onChange?: (value: number) => void
  /**
   * 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）
   * @param value 改变后的值
   */
  onInput?: (value: number) => void
}>
