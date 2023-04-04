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

在 `compilerOptions` 下的 `types` 中添加 `element-ui-types`，如下：

```json
{
  "compilerOptions": {
    "types": ["element-ui-types/2.7"]
  }
}
```

> 如果 vue 版本低于 2.7，可以使用 `element-ui-types/2.6`。
>
> ⚠注意：我测试了在 __vue 2.6 版本__ template 模板的属性和事件都没有提示，目前还不知道怎么解决。

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
