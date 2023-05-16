Provide types support for ElementUI under Volar.

## Install and usage

#### 1. Install _element-ui-types_


```bash
npm i element-ui-types -D

# Or
pnpm add element-ui-types -D
```

#### 2. Add the following configuration to _tsconfig.json_

```json
// tsconfig.json
{
  "vueCompilerOptions": {
    "target": 2.7,
    // "target": 2, // For Vue version <= 2.6.14
  },
  "compilerOptions": {
    "types": ["element-ui-types"]
  }
}
```

#### 3. Reload IDE

## Demo

```html
<template>
  <ElForm ref="formRef">
    ...
  </ElForm>
</template>

<script lang="ts" setup>
import { type Form } from 'element-ui'

const formRef = ref<InstanceType<typeof Form>>()

formRef.value?.validate(valid => {
  // `valid` is type of  `boolean`
})
</script>
```

![](https://raw.githubusercontent.com/satrong/element-ui-types/main/demo.gif)
