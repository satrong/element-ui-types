import type { TComponent, Size } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/color-picker#attributes
 */
export type TElColorPicker = TComponent<{
  /** 绑定值 */
  value?: string
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** 尺寸 */
  size?: Size
  /** 是否支持透明度选择，默认值 `false` */
  showAlpha?: boolean
  /** 写入 v-model 的颜色的格式，`show-alpha` 为 `false`时默认值为 `hex`, `show-alpha` 为 `true`时默认值为 `rgb` */
  colorFormat?: 'hsl' | 'hsv' | 'hex' | 'rgb'
  /** ColorPicker 下拉框的类名 */
  popperClass?: string
  /** 预定义颜色 */
  predefine?: string[]
  /**
   * 当绑定值变化时触发
   * @param value 当前值
   */
  onChange: (value: string) => void
  /**
   * 面板中当前显示的颜色发生改变时触发
   * @param value 当前显示的颜色值
   */
  onActiveChange: (value: string) => void
}>

declare module 'vue' {
  interface GlobalComponents {
    ElColorPicker: TElColorPicker
  }
}
