import { type TComponent, type Size } from '../helper'

/**
 * Cascader 级联选择器 配置选项
 * @link https://element.eleme.cn/#/zh-CN/component/cascader#props
 */
export interface ElCascaderProps {
  /** 次级菜单的展开方式，默认值 `click` */
  expandTrigger?: 'click' | 'hover'
  /** 是否多选，默认值 `false` */
  multiple?: boolean
  /** 是否严格的遵守父子节点不互相关联，默认值 `false` */
  checkStrictly?: boolean
  /** 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 `false`，则只返回该节点的值，默认值 `true` */
  emitPath?: boolean
  /** 是否动态加载子节点，需与 `lazyLoad` 方法结合使用，默认值 `false` */
  lazy?: boolean
  /** 加载动态数据的方法，仅在 `lazy` 为 `true` 时有效 */
  lazyLoad?: (node: any, resolve: (data: any) => void) => void
  /** 指定选项的值为选项对象的某个属性值，默认值 `value` */
  value?: string
  /** 指定选项标签为选项对象的某个属性值，默认值 `label` */
  label?: string
  /** 指定选项的子选项为选项对象的某个属性值，默认值 `children` */
  children?: string
  /** 指定选项的禁用为选项对象的某个属性值，默认值 `disabled` */
  disabled?: string
  /** 指定选项的叶子节点的标志位为选项对象的某个属性值，默认值 `leaf` */
  leaf?: string
}

/**
 * ## Slot
 *  - `default` 自定义备选项的节点内容，参数为 `{ node, data }`，分别为当前节点的 Node 对象和数据
 *  - `empty` - 自定义空数据时的内容
 * @link https://element.eleme.cn/#/zh-CN/component/cascader#cascader-attributes
 */
export type ElCascader = TComponent<{
  /** 选中项绑定值 */
  value?: any
  /** 可选项数据源，键名可通过 Props 属性配置 */
  options?: any[]
  /** 配置选项 */
  props?: ElCascaderProps
  /** 尺寸 */
  size?: Size
  /** 输入框占位文本，默认值 `请选择` */
  placeholder?: string
  /** 是否禁用，默认值 `false` */
  disabled?: boolean
  /** 是否支持清空选项，默认值 `false` */
  clearable?: boolean
  /** 输入框中是否显示选中值的完整路径，默认值 `true` */
  showAllLevels?: boolean
  /** 多选模式下是否折叠Tag，默认值 `false` */
  collapseTags?: boolean
  /** 选项分隔符，默认值 `斜杠' / '` */
  separator?: string
  /** 是否可搜索选项，默认值 `false` */
  filterable?: boolean
  /** 自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中 */
  filterMethod?: (node: any, keyword: string) => boolean
  /** 搜索关键词输入的去抖延迟，毫秒，默认值 `300` */
  debounce?: number
  /** 筛选之前的钩子，参数为输入的值，若返回 `false` 或者返回 `Promise` 且被 `reject`，则停止筛选 */
  beforeFilter?: (value: any) => boolean | Promise<any>
  /** 自定义浮层类名 */
  popperClass?: string
  /**
   * 当选中节点变化时触发
   * @param value 选中节点的值
   */
  onChange?: (value: any) => void
  /**
   * 当展开节点发生变化时触发
   * @param value 各父级选项值组成的数组
   */
  onExpandChange?: (value: any[]) => void
  /**
   * 当失去焦点时触发
   */
  onBlur?: (event: Event) => void
  /**
   * 当获得焦点时触发
   */
  onFocus?: (event: Event) => void
  /**
   * 下拉框出现/隐藏时触发
   * @param visible 出现则为 true，隐藏则为 false
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * 在多选模式下，移除Tag时触发
   * @param value 移除的Tag对应的节点的值
   */
  onRemoveTag?: (value: any) => void
}, {
  /**
   * 获取选中的节点
   * @param leafOnly 是否只返回叶子节点，默认值 `false`
   */
  getCheckedNodes: (leafOnly: boolean) => any[]
}>

/**
 * ## Slot
 *  - `default` 自定义备选项的节点内容，参数为 `{ node, data }`，分别为当前节点的 Node 对象和数据
 * @link https://element.eleme.cn/#/zh-CN/component/cascader#cascaderpanel-attributes
 */
export type ElCascaderPanel = TComponent<{
  /** 选中项绑定值 */
  value?: any
  /** 可选项数据源，键名可通过 Props 属性配置 */
  options?: any[]
  /** 配置选项 */
  props?: ElCascaderProps
  /**
   * 当选中节点变化时触发
   * @param value 选中节点的值
   */
  onChange?: (value: any) => void
  /**
   * 当展开节点发生变化时触发
   * @param value 各父级选项值组成的数组
   */
  onExpandChange?: (value: any[]) => void
}>
