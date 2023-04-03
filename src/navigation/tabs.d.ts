import type { Component } from 'vue'
import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/tabs#tabs-attributes
 */
export type TElTabs = TComponent<{
  /** 绑定值，选中选项卡的 name，默认值为 第一个选项卡的 name */
  value?: string
  /** 风格类型 */
  type?: 'card' | 'border-card'
  /** 标签是否可关闭，默认值 `false` */
  closable?: boolean
  /** 标签是否可增加，默认值 `false` */
  addable?: boolean
  /** 标签是否同时可增加和关闭，默认值 `false` */
  editable?: boolean
  /** 选项卡所在位置，默认值 `top` */
  tabPosition?: 'top' | 'right' | 'bottom' | 'left'
  /** 标签的宽度是否自撑开，默认值 `false` */
  stretch?: boolean
  /** 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换 */
  beforeLeave?: (activeName: string, oldActiveName: string) => boolean | Promise<boolean>
  /**
   * tab 被选中时触发
   * @param tab 被选中的标签 tab 实例
   */
  onTabClick?: (tab: Component) => void
  /**
   * 点击 tab 移除按钮后触发
   * @param name 被删除的标签的 name
   */
  onTabRemove?: (name: string) => void
  /** 点击 tabs 的新增按钮后触发 */
  onTabAdd?: () => void
  /** 点击 tabs 的新增按钮或 tab 被关闭后触发 */
  onEdit?: (targetName: string, action: 'add' | 'remove') => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/tabs#tab-pane-attributes
 */
export type TElTabPane = TComponent<{
  /** 选项卡标题 */
  label?: string
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /**
   * 与选项卡绑定值 value 对应的标识符，表示选项卡别名
   * @default 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'
   */
  name?: string
  /** 标签是否可关闭，默认值 `false` */
  closable?: boolean
  /** 标签是否延迟渲染，默认值 `false` */
  lazy?: boolean
}>

declare module 'vue' {
  interface GlobalComponents {
    ElTabs: TElTabs
    ElTabPane: TElTabPane
  }
}
