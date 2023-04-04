import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/progress#attributes
 */
export type ElProgress = TComponent<{
  /** 百分比（必填），取值 `0` 到 `100`，默认值 `0` */
  percentage: number
  /** 进度条类型，可选值为 `line`、`circle`、`dashboard`，默认值 `line` */
  type?: 'line' | 'circle' | 'dashboard'
  /** 进度条的宽度，单位 `px`，默认值 `6` */
  strokeWidth?: number
  /** 进度条显示文字内置在进度条内（只在 `type=line` 时可用），默认值 `false` */
  textInside?: boolean
  /** 进度条当前状态，可选值为 `success`、`exception`、`warning` */
  status?: 'success' | 'exception' | 'warning'
  /** 进度条背景色（会覆盖 `status` 状态颜色） */
  color?: string
  /** 环形进度条画布宽度（只在 `type` 为 `circle` 或 `dashboard` 时可用） */
  width?: number
  /** 是否显示进度条文字内容，默认值 `true` */
  showText?: boolean
  /** circle/dashboard 类型路径两端的形状，可选值为 `butt`、`round`、`square`，默认值 `round` */
  strokeLinecap?: 'butt' | 'round' | 'square'
  /** 指定进度条文字内容 */
  format?: (percentage: number) => string
  /** 指定进度条底色（支持 hex 格式） */
  defineBackColor?: string
  /** 指定进度条字体颜色（支持 hex 格式） */
  textColor?: string
}>
