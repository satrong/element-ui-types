import type { TComponent } from '../helper'

type AccordionValue = string | number

/**
 * @link https://element.eleme.cn/#/zh-CN/component/collapse#collapse-attributes
 */
export type TElAccordion = TComponent<{
  /** 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array) */
  value?: AccordionValue | AccordionValue[]
  /** 是否手风琴模式，默认值 `false` */
  accordion?: boolean
  /**
   * 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)
   */
  onChange?: (activeNames: string | string[]) => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/collapse#collapse-item-attributes
 */
export type TElAccordionItem = TComponent<{
  /** 唯一标志符 */
  name?: AccordionValue
  /** 面板标题 */
  title?: string
  /** 是否禁用 */
  disabled?: boolean
}>

declare module 'vue' {
  interface GlobalComponents {
    ElAccordion: TElAccordion
    ElAccordionItem: TElAccordionItem
  }
}
