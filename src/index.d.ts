import type { Basic } from './basic/component'
import type { Form } from './form/component'
import type { Data } from './data/component'
import type { Navigation } from './navigation/component'
import type { Notice } from './notice/component'
import type { Others } from './others/component'

export type { ButtonType, EffectType, NoticeType, Placement, Size, ThemeType } from './helper'
export type { Rule, RuleItem, Rules } from './async-validator-type'
export * from './basic/index'
export * from './form/index'
export * from './data/index'
export * from './notice/index'
export * from './navigation/index'
export * from './others/index'

// 2.7版本以上
declare module 'vue' {
  export interface GlobalComponents extends Basic, Form, Data, Navigation, Notice, Others {}
}

// 2.7版本以下
declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends Basic, Form, Data, Navigation, Notice, Others {}
}
