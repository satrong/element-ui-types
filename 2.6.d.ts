import type { Basic } from './src/basic/component'
import type { Form } from './src/form/component'
import type { Data } from './src/data/component'
import type { Navigation } from './src/navigation/component'
import type { Notice } from './src/notice/component'
import type { Others } from './src/others/component'

declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends Basic, Form, Data, Navigation, Notice, Others {}
}
