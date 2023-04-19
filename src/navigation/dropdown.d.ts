import type { TComponent, Size, ButtonType } from '../helper'

/**
 * ## Slot
 *  - `default` 触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件
 *  - `dropdown` 下拉列表，通常是 <el-dropdown-menu> 组件
 * @link https://element.eleme.cn/#/zh-CN/component/dropdown#dropdown-attributes
 */
export type ElDropdown = TComponent<{
  /** 菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效) */
  type?: ButtonType
  /** 菜单尺寸，在split-button为 true 的情况下也对触发按钮生效 */
  size?: Size
  /** 下拉触发元素呈现为按钮组，默认值 `false` */
  splitButton?: boolean
  /** 菜单弹出位置，默认值 `bottom-end` */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
  /** 触发下拉的行为，默认值 `hover` */
  trigger?: 'hover' | 'click'
  /** 是否在点击菜单项后隐藏菜单，默认值 `true` */
  hideOnClick?: boolean
  /** 展开下拉菜单的延时（仅在 trigger 为 hover 时有效），默认值 `250` */
  showTimeout?: number
  /** 收起下拉菜单的延时（仅在 trigger 为 hover 时有效），默认值 `150` */
  hideTimeout?: number
  /** Dropdown 组件的 tabindex，默认值 `0` */
  tabindex?: number
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** split-button 为 true 时，点击左侧按钮的回调 */
  onClick: () => void
  /**
   * 点击菜单项触发的事件回调
   * @param command dropdown-item 的指令
   */
  onCommand: (command: string) => void
  /**
   * 下拉框出现/隐藏时触发
   * @param visible 出现则为 true，隐藏则为 false
   */
  onVisibleChange: (visible: boolean) => void
}>

export type ElDropdownMenu = TComponent<{
  slot: 'dropdown'
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/dropdown#dropdown-menu-item-attributes
 */
export type ElDropdownItem = TComponent<{
  /** 指令 */
  command?: any
  /** 禁用，默认值 `false` */
  disabled?: boolean
  /** 显示分割线，默认值 `false` */
  divided?: boolean
  /** 图标类名 */
  icon?: string
}>
