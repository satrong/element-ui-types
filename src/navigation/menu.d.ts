import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/menu#menu-attribute
 */
export type ElMenu = TComponent<{
  /** 模式，默认值 `vertical` */
  mode?: 'horizontal' | 'vertical'
  /** 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用），默认值 `false` */
  collapse?: boolean
  /** 菜单的背景色（仅支持 hex 格式），默认值 `#ffffff` */
  backgroundColor?: string
  /** 菜单的文字颜色（仅支持 hex 格式），默认值 `#303133` */
  textColor?: string
  /** 当前激活菜单的文字颜色（仅支持 hex 格式），默认值 `#409EFF` */
  activeTextColor?: string
  /** 当前激活菜单的 index */
  defaultActive?: string
  /** 当前打开的 sub-menu 的 index 的数组 */
  defaultOpeneds?: string[]
  /** 是否只保持一个子菜单的展开，默认值 `false` */
  uniqueOpened?: boolean
  /** 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)，默认值 `hover` */
  menuTrigger?: 'hover' | 'click'
  /** 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转，默认值 `false` */
  router?: boolean
  /** 是否开启折叠动画，默认值 `true` */
  collapseTransition?: boolean
  /**
   * 菜单激活回调
   * @param index 选中菜单项的 index
   * @param indexPath 选中菜单项的 index path
   */
  onSelect?: (index: string, indexPath: string[]) => void
  /**
   * sub-menu 展开的回调
   * @param index 打开的 sub-menu 的 index
   * @param indexPath 打开的 sub-menu 的 index path
   */
  onOpen?: (index: string, indexPath: string[]) => void
  /**
   * sub-menu 收起的回调
   * @param index 收起的 sub-menu 的 index
   * @param indexPath 收起的 sub-menu 的 index path
   */
  onClose?: (index: string, indexPath: string[]) => void
}, {
  /**
   * 展开指定的 sub-menu
   * @param index 需要打开的 sub-menu 的 index
   */
  open: (index: string) => void
  /**
   * 收起指定的 sub-menu
   * @param index 需要收起的 sub-menu 的 index
   */
  close: (index: string) => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/menu#submenu-attribute
 */
export type ElSubMenu = TComponent<{
  /** 唯一标志，默认值 `null` */
  index?: string
  /** 弹出菜单的自定义类名 */
  popperClass?: string
  /** 展开 sub-menu 的延时，默认值 `300` */
  showTimeout?: number
  /** 收起 sub-menu 的延时，默认值 `300` */
  hideTimeout?: number
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性，默认值 `一级子菜单：true / 非一级子菜单：false` */
  popperAppendToBody?: boolean
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/menu#menu-item-attribute
 */
export type ElMenuItem = TComponent<{
  /** 唯一标志 */
  index?: string
  /** Vue Router 路径对象 */
  route?: Record<string, any>
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/menu#menu-group-attribute
 */
export type ElMenuItemGroup = TComponent<{
  /** 分组标题 */
  title?: string
}>
