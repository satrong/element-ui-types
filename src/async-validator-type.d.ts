
export type RuleType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'method'
  | 'regexp'
  | 'integer'
  | 'float'
  | 'array'
  | 'object'
  | 'enum'
  | 'date'
  | 'url'
  | 'hex'
  | 'email'

export type SyncErrorType = Error | string
export type SyncValidateResult = boolean | SyncErrorType | SyncErrorType[]
export type ValidateResult = void | Promise<void> | SyncValidateResult

export interface RuleItem {
  type?: RuleType // default type is 'string'
  required?: boolean
  pattern?: RegExp | string
  min?: number // Range of type 'string' and 'array'
  max?: number // Range of type 'string' and 'array'
  len?: number // Length of type 'string' and 'array'
  enum?: Array<string | number | boolean | null | undefined> // possible values of type 'enum'
  whitespace?: boolean
  fields?: Record<string, Rule> // ignore when without required
  defaultField?: Rule // 'object' or 'array' containing validation rules
  transform?: (value: Value) => Value
  message?: string | ((a?: string) => string)
  asyncValidator?: (
    rule: InternalRuleItem,
    value: Value,
    callback: (error?: string | Error) => void,
    source: Values,
  ) => void | Promise<void>
  validator?: (
    rule: InternalRuleItem,
    value: Value,
    callback: (error?: string | Error) => void,
    source: Values,
  ) => SyncValidateResult | void
  trigger?: 'change' | 'blur'
}

export type Rule = RuleItem | RuleItem[]

export type Rules = Record<string, Rule>
