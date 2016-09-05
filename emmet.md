### 嵌套操作

```
>: Child
+: Sibling
^: Climb-up
*: 乘法, 如 ul<li*5，将生成如下结果
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
(): 分组，如 (header>ul>li*2)+footer>p，结果如下
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
```

### 属性操作

ID和Class，如div#header.class1.class2.class3, 结果如下:
```
<div id="footer" class="class1 class2 class3"></div>
```
也可以自定义属性，如td[title="hello" colspan=3]，属性可以不用引号，结果如下：
```
<td title="Hello world!" colspan="3"></td>
```

### 序列

结合之前的嵌套操作和属性操作, 通过*和$可以输出数字序列, 如ul>li.item$*3，结果如下:
```
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
</ul>
```
通过@, 可以改变数字序列的顺序以及基数，如ul>li$@2-*3

```
<ul>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
</ul>
```

### 文字

{}: 通过大括号(curly braces)在元素中插入文字, 如a{Click me}:
```
<a href="">Click me</a>
```
注意 a{click}+b{here} 和 a>{click}+b{here} 的区别:
```
<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>
```