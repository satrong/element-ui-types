# element-ui-types

为 ElementUI 提供在 Volar 下的类型支持。

## 安装

#### 1. 安装依赖

```bash
npm i element-ui-types -D

# 或者
pnpm add element-ui-types -D
```

#### 2. 配置 tsconfig.json

```json
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

#### 3. 重启 IDE

## 类型

```html
<template>
  <ElForm ref="formRef">
    ...
  </ElForm>
</template>

<script lang="ts" setup>
  import type { ElForm } from 'element-ui-types'

// 将 ref 的类型设置为 `ElForm`
const formRef = ref<InstanceType<ElForm>>()

// 调用表单的方法
formRef.value?.validate(valid => {
  // 此处可以得到 `valid` 的类型为 `boolean`
})
</script>
```

![](https://raw.githubusercontent.com/satrong/element-ui-types/main/demo.gif)
