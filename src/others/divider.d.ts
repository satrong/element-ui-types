import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/divider#divider-attributes
 */
export type ElDivider = TComponent<{
  /** 设置分割线方向 */
  direction?: 'horizontal' | 'vertical'
  /** 设置分割线文案的位置，默认值 `center` */
  contentPosition?: 'left' | 'right' | 'center'
}>
