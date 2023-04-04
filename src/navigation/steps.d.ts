import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/steps#steps-attributes
 */
export type ElSteps = TComponent<{
  /** 每个 step 的间距，不填写将自适应间距。支持百分比 */
  space?: number | string
  /** 显示方向，默认值 `horizontal` */
  direction?: 'vertical' | 'horizontal'
  /** 设置当前激活步骤，默认值 `0` */
  active?: number
  /** 设置当前步骤的状态，默认值 `process` */
  processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  /** 设置结束步骤的状态，默认值 `finish` */
  finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  /** 进行居中对齐，默认值 `false` */
  alignCenter?: boolean
  /** 是否应用简洁风格，默认值 `false` */
  simple?: boolean
}>

/**
 * ## Slot
 *  - `icon` 自定义图标
 *  - `title` 自定义标题
 *  - `description` 自定义描述性文字
 * @link https://element.eleme.cn/#/zh-CN/component/steps#step-attributes
 */
export type ElStep = TComponent<{
  /** 标题 */
  title?: string
  /** 描述性文字 */
  description?: string
  /** 图标。传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 */
  icon?: string
  /** 设置当前步骤的状态，不设置则根据 steps 确定状态 */
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success'
}>
