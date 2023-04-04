import type { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from './checkbox'
import type { ElRadio, ElRadioButton, ElRadioGroup } from './radio'
import type { ElInput, ElAutocomplete } from './input'
import type { ElInputNumber } from './input-number'
import type { ElSelect, ElOption, ElOptionGroup } from './select'
import type { ElCascader, ElCascaderPanel } from './cascader'
import type { ElSwitch } from './switch'
import type { ElSlider } from './slider'
import type { ElTimePicker } from './time-picker'
import type { ElDatePicker } from './date-picker'
import type { ElUpload } from './upload'
import type { ElRate } from './rate'
import type { ElColorPicker } from './color-picker'
import type { ElTransfer } from './transfer'
import type { ElForm, ElFormItem } from './form'

export interface Form {
  ElCheckbox: ElCheckbox
  ElCheckboxGroup: ElCheckboxGroup
  ElCheckboxButton: ElCheckboxButton
  ElRadio: ElRadio
  ElRadioGroup: ElRadioGroup
  ElRadioButton: ElRadioButton
  ElInput: ElInput
  ElAutocomplete: ElAutocomplete
  ElInputNumber: ElInputNumber
  ElSelect: ElSelect
  ElOptionGroup: ElOptionGroup
  ElOption: ElOption
  ElCascader: ElCascader
  ElCascaderPanel: ElCascaderPanel
  ElSwitch: ElSwitch
  ElSlider: ElSlider
  ElTimePicker: ElTimePicker
  ElDatePicker: ElDatePicker
  ElUpload: ElUpload
  ElRate: ElRate
  ElColorPicker: ElColorPicker
  ElTransfer: ElTransfer
  ElForm: ElForm
  ElFormItem: ElFormItem
}
