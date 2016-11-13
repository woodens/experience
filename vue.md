- vue组件props的命名形式

HTML 特性不区分大小写。当使用非字符串模版时，prop的名字形式会从 camelCase 转为 kebab-case（短横线隔开）
例：

```<template id="child">{{myMessage.name}}<template>```

```<child :my-message="parentMsg"></child>```

```Vue.component('child', {
props: ['myMessage'],
  template: '#child'
});
```

- vue-devtools使用
1. 下载vue-devtools插件
2. 扩展中设置url地址可打开
3. 在调用vue的页面在引入vue.js之后js设置`Vue.config.devtools = true;`
