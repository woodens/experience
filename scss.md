### scss 语法
- 文件后缀名
- 导入（@import）
- 注释 （/*  */  //）
- 普通变量 $
- 默认变量 !default
- 特殊变量使用 #{$def}
- 多值变量
    - list
    ```
    (nth($var,$index),length($list)，join($list1,$list2,[$separator])，append($list,$value,[$separator]))
    ```
    - map
        - $map: (key1: value1, key2: value2, key3: value3)
        - map-get($map,$key),map-merge($map1,$map2)，map-keys($map)，map-values($map)
- 嵌套
    - 选择器嵌套
    - 属性嵌套
    - @at-root(跳出父级)
- 混合(mixin)
    - 声明 @mixin mixin($var1:50,$var2){}
    - 使用 @include mixin
    - 无参数mixin
    - 有参数
    - 多个参数
    - 多组参数 @mixin box-shadow($shadow...)
    - @content
    
    
- 继承 
    - 选择器继承 @extend
    - 占位选择器 % @extend调用
- 函数

- 条件判断及循环
    - @if判断
    - 三目判断 ```if($condition, $if_true, $if_false)```
    - for循环 
        - ```@for $var from <start> through <end>```
        - ```@for $var from <start> to <end>```
    - @each循环
        - ```@each $var in <list or map>```





- 嵌套规则
```
div{
    width:200px;
    a{color:blue;}
}
```
转换
```
div{
    width:200px;
}
div a{
    color:blue;
}
```

- 参照父级&
```
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
```
转换为
```
a {
  font-weight: bold;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }
  body.firefox a {
    font-weight: normal; }
```
- 嵌套属性
```
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```
to 
```
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```
