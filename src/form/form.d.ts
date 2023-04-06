import type { TComponent, Size } from '../helper'
import type { Rules, RuleItem } from '../async-validator-type'

type TInvalidFields = Record<string, Array<{ message: string, field: string }>>
export type ElFormValidateCallback = (valid: boolean, invalidFields: TInvalidFields) => void

/**
 * @link https://element.eleme.cn/#/zh-CN/component/form#form-attributes
 */
export type ElForm = TComponent<{
  /** 表单数据对象 */
  model?: Record<string, any>
  /** 表单验证规则 */
  rules?: Rules
  /** 行内表单模式，默认值 `false` */
  inline?: boolean
  /** 表单域标签的位置，如果值为 `left` 或者 `right` 时，则需要设置 `label-width`，默认值 `right` */
  labelPosition?: 'left' | 'right' | 'top'
  /** 表单域标签的宽度，例如 `50px`。作为 `Form` 直接子元素的 `form-item` 会继承该值。支持 `auto`。 */
  labelWidth?: string
  /** 表单域标签的后缀 */
  labelSuffix?: string
  /** 是否隐藏必填字段的标签旁边的红色星号，默认值 `false` */
  hideRequiredAsterisk?: boolean
  /** 是否显示校验错误信息，默认值 `true` */
  showMessage?: boolean
  /** 是否以行内形式展示校验信息，默认值 `false` */
  inlineMessage?: boolean
  /** 是否在输入框中显示校验结果反馈图标，默认值 `false` */
  statusIcon?: boolean
  /** 是否在 `rules` 属性改变后立即触发一次验证，默认值 `true` */
  validateOnRuleChange?: boolean
  /** 用于控制该表单内组件的尺寸，可选值为 `medium`、`small`、`mini` */
  size?: Size
  /** 是否禁用该表单内的所有组件。若设置为 `true`，则表单内组件上的 `disabled` 属性不再生效，默认值 `false` */
  disabled?: boolean
  /**
   * 任一表单项被校验后触发
   * @param prop 被校验的表单项 prop 值
   * @param valid 校验是否通过
   * @param errorMessage 错误消息（如果存在）
   */
  onValidate: (prop: string, valid: boolean, errorMessage: string | null) => void
}, {
  /** 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise */
  validate: (callback: ElFormValidateCallback) => Promise<boolean>
  /** 对部分表单字段进行校验的方法 */
  validateField: (prop: string | string[], callback: (errorMessage: string) => void) => void
  /** 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 */
  resetFields: () => void
  /** 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 */
  clearValidate: (props?: string | string[]) => void
}>

/**
 * ## Slot
 *  - `default` Form Item 的内容
 *  - `label` 标签文本的内容
 *  - `error` 自定义表单校验信息的显示方式，参数为 `{ error }`
 * @link https://element.eleme.cn/#/zh-CN/component/form#form-item-slot
 */
export type ElFormItem = TComponent<{
  /** 表单域 model 字段，在使用 `validate`、`resetFields` 方法的情况下，该属性是必填的 */
  prop?: string
  /** 标签文本 */
  label?: string
  /** 表单域标签的的宽度，例如 `50px`。支持 `auto`。 */
  labelWidth?: string
  /** 是否必填，如不设置，则会根据校验规则自动生成，默认值 `false` */
  required?: boolean
  /** 表单验证规则 */
  rules?: RuleItem[]
  /** 表单域验证错误信息, 设置该值会使表单验证状态变为 `error`，并显示该错误信息 */
  error?: string
  /** 是否显示校验错误信息，默认值 `true` */
  showMessage?: boolean
  /** 以行内形式展示校验信息，默认值 `false` */
  inlineMessage?: boolean
  /** 用于控制该表单域下组件的尺寸 */
  size?: Size
}, {
  /** 对该表单项进行重置，将其值重置为初始值并移除校验结果 */
  resetField: () => void
  /** 移除该表单项的校验结果 */
  clearValidate: () => void
}>
