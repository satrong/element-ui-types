import type { CreateElement, VNode } from 'vue'
import type { TComponent } from '../helper'

interface IItem {
  key: any
  label: string
  disabled: boolean
  [key: string]: any
}

type TWhich = 'left' | 'right'

/**
 * ## Slot
 *  - `default` 自定义数据项的内容，参数为 `{ option }`
 *  - `left-footer` 左侧列表底部的内容
 *  - `right-footer` 右侧列表底部的内容
 * @link https://element.eleme.cn/#/zh-CN/component/transfer#attributes
 */
export type TElTransfer = TComponent<{
  /** 绑定值 */
  value?: any[]
  /** Transfer 的数据源 */
  data?: IItem[]
  /** 是否可搜索，默认值 `false` */
  filterable?: boolean
  /** 搜索框占位符，默认值 `请输入搜索内容` */
  filterPlaceholder?: string
  /** 自定义搜索方法 */
  filterMethod?: (query: string, items: IItem) => boolean
  /** 右侧列表元素的排序策略：若为 `original`，则保持与数据源相同的顺序；若为 `push`，则新加入的元素排在最后；若为 `unshift`，则新加入的元素排在最前，默认值 `original` */
  targetOrder?: 'original' | 'push' | 'unshift'
  /** 自定义列表标题 */
  titles?: string[]
  /** 自定义按钮文案 */
  buttonTexts?: [string, string]
  /** 自定义数据项渲染函数 */
  renderContent?: (h: CreateElement, option: IItem) => VNode
  /** 列表顶部勾选状态文案，默认值 `{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}'` */
  format: { noChecked: string, hasChecked: string }
  /** 数据源的字段别名 */
  props: { key: string, label: string, disabled: string }
  /** 初始状态下左侧列表的已勾选项的 key 数组，默认值 `[]` */
  leftDefaultChecked: any[]
  /** 初始状态下右侧列表的已勾选项的 key 数组，默认值 `[]` */
  rightDefaultChecked: any[]
  /**
   * 右侧列表元素变化时触发
   * @param value 当前值
   */
  onChange: (value: any[], which: TWhich, movedValues: any[]) => void
  /**
   * 左侧列表元素被用户选中 / 取消选中时触发
   * @param checkedKeys 当前被选中的元素的 key 数组
   * @param currentCheckedKeys 选中状态发生变化的元素的 key 数组
   */
  onLeftCheckChange: (checkedKeys: any[], currentCheckedKeys: any) => void
  /**
   * 右侧列表元素被用户选中 / 取消选中时触发
   * @param checkedKeys 当前被选中的元素的 key 数组
   * @param currentCheckedKeys 选中状态发生变化的元素的 key 数组
   */
  onRightCheckChange: (checkedKeys: any[], currentCheckedKeys: any) => void
}, {
  /**
   * 清空某个面板的搜索关键词
   * @param which 'left' / 'right'，指定需要清空的面板
   */
  clearQuery: (which: TWhich) => void
}>

declare module 'vue' {
  interface GlobalComponents {
    ElTransfer: TElTransfer
  }
}
