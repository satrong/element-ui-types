import type { TComponent, NoticeType, EffectType } from '../helper'

/**
 * ## Slot
 *  - `default`  描述
 *  - `title` 标题的内容
 * @link https://element.eleme.cn/#/zh-CN/component/alert#attributes
 */
export type TElAlert = TComponent<{
  /** 标题 */
  title?: string
  /** 主题，默认值 `info` */
  type?: NoticeType
  /** 辅助性文字。也可通过默认 slot 传入 */
  description?: string
  /** 是否可关闭，默认值 `true` */
  closable?: boolean
  /** 文字是否居中，默认值 `true` */
  center?: boolean
  /** 关闭按钮自定义文本 */
  closeText?: string
  /** 是否显示图标，默认值 `false` */
  showIcon?: boolean
  /** 选择提供的主题，默认值 `light` */
  effect?: EffectType
  /** 关闭 alert 时触发的事件 **/
  onClose: () => void
}>

declare module 'vue' {
  interface GlobalComponents {
    ElAlert: TElAlert
  }
}
