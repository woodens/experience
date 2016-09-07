### scss 语法
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
