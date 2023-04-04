import type { TComponent, Size } from '../helper'

/**
 * ## Slot
 *  - `prefix` 输入框头部内容，只对 type="text" 有效
 *  - `suffix` 输入框尾部内容，只对 type="text" 有效
 *  - `prepend` 输入框前置内容，只对 type="text" 有效
 *  - `append` 输入框后置内容，只对 type="text" 有效
 *
 * @link https://element.eleme.cn/#/zh-CN/component/input#input-attributes
 */
export type ElInput = TComponent<{
  /** 绑定值 */
  value?: string | number
  /** 输入框类型 */
  type: 'text' | 'textarea' | 'number' | 'password' | 'url' | 'email' | 'date' | 'search'
  /** 最大输入长度 */
  maxlength: number
  /** 最小输入长度 */
  minlength: number
  /** 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效，默认值 `false` */
  showWordLimit: boolean
  /** 输入框占位文本 */
  placeholder: string
  /** 是否可清空，默认值 `false` */
  clearable: boolean
  /** 是否显示切换密码图标，默认值 `false` */
  showPassword: boolean
  /** 是否禁用，默认值 `false` */
  disabled: boolean
  /** 输入框尺寸，只在 type!="textarea" 时有效 */
  size: Size
  /** 输入框头部图标 */
  prefixIcon: string
  /** 输入框尾部图标 */
  suffixIcon: string
  /** 输入框行数，只对 type="textarea" 有效，默认值 `2` */
  rows: number
  /** 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }，默认值 `false` */
  autosize: boolean | { minRows: number, maxRows: number }
  /** 原生属性，自动补全，默认值 `'off'` */
  autocomplete: 'on' | 'off'
  /** 原生属性 */
  name: string
  /** 原生属性，是否只读，默认值 `false` */
  readonly: boolean
  /** 原生属性，设置最大值 */
  max: string | number
  /** 原生属性，设置最小值 */
  min: string | number
  /** 原生属性，设置输入字段的合法数字间隔 */
  step: string | number
  /** 控制是否能被用户缩放，默认值 `'none'` */
  resize: 'none' | 'both' | 'horizontal' | 'vertical'
  /** 原生属性，自动获取焦点，默认值 `false` */
  autofocus: boolean
  /** 原生属性 */
  form: string
  /** 输入框关联的label文字 */
  label: string
  /** 输入框的tabindex */
  tabindex: string
  /** 输入时是否触发表单的校验，默认值 `true` */
  validateEvent: boolean
  /** 在 Input 失去焦点时触发 */
  onBlur: (event: FocusEvent) => void
  /** 在 Input 获得焦点时触发 */
  onFocus: (event: FocusEvent) => void
  /** 仅在输入框失去焦点或用户按下回车时触发 */
  onChange: (value: string | number) => void
  /** 在 Input 值改变时触发 */
  onInput: (value: string | number) => void
  /** 在点击由 clearable 属性生成的清空按钮时触发 */
  onClear: () => void
}, {
  /** 使 input 获取焦点 */
  focus: () => void
  /** 使 input 失去焦点 */
  blur: () => void
  /** 选中 input 中的文字 */
  select: () => void
}>

/**
 * ## Slot
 *  - `prefix` 输入框头部内容
 *  - `suffix` 输入框尾部内容
 *  - `prepend` 输入框前置内容
 *  - `append` 输入框后置内容
 *  - `default` 默认插槽，scoped slot 参数为 `{ item }`
 *
 * @link https://element.eleme.cn/#/zh-CN/component/input#autocomplete-attributes
 */
export type ElAutocomplete = TComponent<{
  /** 输入框占位文本 */
  placeholder: string
  /** 禁用，默认值 `false` */
  disabled: boolean
  /** 输入建议对象中用于显示的键名，默认值 `value` */
  valueKey: string
  /** 必填值，输入绑定值 */
  value?: string
  /** 获取输入建议的去抖延时，默认值 `300` */
  debounce: number
  /** 菜单弹出位置，可选值 `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end`，默认值 `bottom-start` */
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
  /** 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 */
  fetchSuggestions: (queryString: string, callback: (data: any[]) => void) => void
  /** Autocomplete 下拉列表的类名 */
  popperClass: string
  /** 是否在输入框 focus 时显示建议列表，默认值 `true` */
  triggerOnFocus: boolean
  /** 原生属性 */
  name: string
  /** 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件，默认值 `false` */
  selectWhenUnmatched: boolean
  /** 输入框关联的label文字 */
  label: string
  /** 输入框头部图标 */
  prefixIcon: string
  /** 输入框尾部图标 */
  suffixIcon: string
  /** 是否隐藏远程加载时的加载图标，默认值 `false` */
  hideLoading: boolean
  /** 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 `false`，默认值 `true` */
  popperAppendToBody: boolean
  /** 是否默认突出显示远程搜索建议中的第一项，默认值 `false` */
  highlightFirstItem: boolean
  /**
   * 点击选中建议项时触发
   * @param item 选中的建议项
   */
  onSelect: (item: unknown) => void
  /** 在 Input 值改变时触发 */
  onChange: (value: string | number) => void
}, {
  /** 使 input 获取焦点 */
  focus: () => void
}>
