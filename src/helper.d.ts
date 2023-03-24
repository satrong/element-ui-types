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

export type Size = 'medium' | 'small' | 'mini'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

export type ThemeType = 'success' | 'warning' | 'danger' | 'info'
