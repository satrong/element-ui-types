import type { TComponent, Size } from '../helper'

/**
 * ## Slots
 *  - `prefix` Select 组件头部内容
 *  - `empty` 无选项时的列表
 *  - `default` Option 组件列表
 * @link https://element.eleme.cn/#/zh-CN/component/select#select-attributes
 */
export type TElSelect = TComponent<{
  value?: string | number | boolean
  /** 是否多选，默认值 `false` */
  multiple: boolean
  /** 是否禁用，默认值 `false` */
  disabled: boolean
  /** 作为 value 唯一标识的键名，绑定值为对象类型时必填 */
  valueKey: string
  /** 输入框尺寸 */
  size: Size
  /** 是否可以清空选项，默认值 `false` */
  clearable: boolean
  /** 多选时是否将选中值按文字的形式展示，默认值 `false` */
  collapseTags: boolean
  /** 多选时用户最多可以选择的项目数，为 0 则不限制，默认值 `0` */
  multipleLimit: number
  /** select input 的 name 属性 */
  name: string
  /** select input 的 autocomplete 属性，默认值 `off` */
  autocomplete: string
  /** 占位符，默认值 `请选择` */
  placeholder: string
  /** 是否可搜索，默认值 `false` */
  filterable: boolean
  /** 是否允许用户创建新条目，需配合 filterable 使用，默认值 `false` */
  allowCreate: boolean
  /** 自定义搜索方法 */
  filterMethod: (query: string) => boolean
  /** 是否为远程搜索，默认值 `false` */
  remote: boolean
  /** 远程搜索方法，需要同时将 `filterable` 和 `remote` 设置为 `true` 才生效 */
  remoteMethod: (query: string) => void
  /** 是否正在从远程获取数据，默认值 `false` */
  loading: boolean
  /** 远程加载时显示的文字，默认值 `加载中` */
  loadingText: string
  /** 搜索条件无匹配时显示的文字，也可以使用slot="empty"设置，默认值 `无匹配数据` */
  noMatchText: string
  /** 选项为空时显示的文字，也可以使用slot="empty"设置，默认值 `无数据` */
  noDataText: string
  /** Select 下拉框的类名 */
  popperClass: string
  /** 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词，默认值 `false` */
  reserveKeyword: boolean
  /** 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用，默认值 `false` */
  defaultFirstOption: boolean
  /** 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false，默认值 `true` */
  popperAppendToBody: boolean
  /** 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单，默认值 `false` */
  automaticDropdown: boolean
  /**
   * 选中值发生变化时触发
   * @param value 当前选中的值
   */
  onChange: (value: string | number | boolean) => void
  /**
   * 下拉框出现/隐藏时触发
   * @param visible 出现则为 true，隐藏则为 false
   */
  onVisibleChange: (visible: boolean) => void
  /**
   * 多选模式下移除tag时触发
   * @param value 被移除的tag的值
   */
  onRemoveTag: (value: string | number) => void
  /** 可清空的单选模式下用户点击清空按钮时触发 */
  onClear: () => void
  /** 当 input 失去焦点时触发 */
  onBlur: (e: Event) => void
  /** 当 input 获得焦点时触发 */
  onFocus: (e: Event) => void
}, {
  /** 使 input 获取焦点 */
  focus: () => void
  /** 使 input 失去焦点，并隐藏下拉框 */
  blur: () => void
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/select#option-group-attributes
 */
export type ElOptionGroup = TComponent<{
  /** 分组的组名 */
  label: string
  /** 是否将该分组下所有选项置为禁用，默认值 `false` */
  disabled: boolean
}>

/**
 * @link https://element.eleme.cn/#/zh-CN/component/select#option-attributes
 */
export type ElOption = TComponent<{
  /** 选项的值 */
  value: any
  /** 选项的标签，若不设置则默认与 value 相同 */
  label: string | number
  /** 是否禁用该选项，默认值 `false` */
  disabled: boolean
}>

declare module 'vue' {
  interface GlobalComponents {
    ElSelect: TElSelect
    ElOptionGroup: ElOptionGroup
    ElOption: ElOption
  }
}
