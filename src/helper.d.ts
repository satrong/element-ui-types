import type {
  DefineComponent,
  ExtractPropTypes,
  ComputedGetter,
  WritableComputedOptions,
  ComponentPropsOptions
} from 'vue'

type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>

type EmitsOptions = ObjectEmitsOptions | string[]

type TComponent<
  Props extends Record<string, any>,
  Methods extends Record<string, () => void> = unknown
> = DefineComponent<
Pick<Props, 'value'>,
unknown,
unknown,
Record<string, ComputedGetter<any> | WritableComputedOptions<any>>,
Methods,
any,
any,
EmitsOptions,
string,
Readonly<Pick<Props, 'value'> extends ComponentPropsOptions ? ExtractPropTypes<Props> : Props>,
Readonly<ExtractPropTypes<Omit<Props, 'value'>>>
>

export type Size = 'medium' | 'small' | 'mini' | ''

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'

export type ThemeType = 'success' | 'warning' | 'danger' | 'info'

export type NoticeType = 'success' | 'warning' | 'info' | 'error'

export type EffectType = 'light' | 'dark'

export type Placement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
