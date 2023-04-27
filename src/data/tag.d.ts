import type { TComponent, Size, ThemeType, EffectType } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/tag#attributes
 */
export type ElTag = TComponent<{
  type?: ThemeType
  /** 是否可关闭，默认值 `false` */
  closable?: boolean
  /** 是否禁用渐变动画，默认值 `false` */
  disableTransitions?: boolean
  /** 是否有边框描边，默认值 `false` */
  hit?: boolean
  /** 背景色 */
  color?: string
  /** 尺寸 */
  size?: Size
  /** 主题，默认值 `light` */
  effect?: EffectType | 'plain'
  /** 点击 Tag 时触发的事件 */
  onClick?: () => void
  /** 关闭 Tag 时触发的事件 */
  onClose?: () => void
}>
