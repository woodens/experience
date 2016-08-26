### 主要内容
- 浮动float
- 定位position
- 行高line-height
- 水平居中与垂直居中
- 滑动门
- html调色原理
- 盒子模型
- 双飞翼布局及圣杯布局

### 定位position
- #### relative
    即使偏移，位置还在。实质就是靠近最近的元素进行偏移。```解释：可以理解为让自身元素的原点（0，0）进行偏移（左上），相对于自己移动。    ```
- #### absolute
    偏移了，位置就没了，靠最近的relative/absolute进行偏移。``` 解释：absolute 进行偏移的时候默认先去寻找外面position属性设为 absolute 或者 relative 的元素，如果有相对 它进行偏移，如果没有相对于浏览器左上角（0，0）进行偏移。```
- #### fixed
    相对于浏览器的窗口的位置，没有依赖感
- #### static(默认)

### 定位 top
- 当position为static时，计算值是auto
- 为relative时
   -  如果top和bottom都是auto，则它们的计算值是0
   -  如果top和bottom其中一个为auto，则auto相当于另一个的负值，即top = -bottom；
   -  如果top和bottom的值都不为auto，则忽略bottom

### margin折叠常规
- margin折叠只发生在块级元素上；
- 浮动元素的margin不与任何margin发生折叠;
- 绝对定位元素的margin不与任何margin发生折叠；
- 根元素的margin不与其它任何margin发生折叠;

### 样式的权重
- important > 内联 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 通配符 > 继承
-   CSS样式权重的两个重要因素
    -   样式的优先级跟样式定义的顺序有关
    -   权值的大小跟选择器的类型和数量有关
```
 注意：一般来说，在同一个CSS文件中，如果有两个同名的样式，则后定义的会覆盖先定义的
```
- 一个selector的权重表示方式：0.0.0.0，即·``` 内嵌样式.ID样式.(类,伪类,以及属性个数).(伪元素和标签元素个数)```
```
注：通配符和继承得到的CSS属性对权重没有影响
权重的比较并不一定可靠   例 1.0.0.0>0.11.1.1
```

### display:inline-block引发的间隙
解决方式


    .outer {
        font-size: 0;
        -webkit-text-size-adjust:none;/**取消Chrome浏览器最小字体限制*/
    }
    .outer .inner {
        font-size: 12px;
    }
说明：现在chrome浏览器已经取消最小字体限制

### 垂直居中
.outer{
    display: table;
}
.inner{
  display: table-cell;
  vertical-align: middle;
}
### 水平居中
- text-align:center;
- margin:0 auto;


### 整体居中


    position: absolute;
    top: 50%;
    left: 50%;
    top:400px;
    height: 400px;
    width: 300px;
    margin-top: -200px;
    margin-left:-150px;

### 圣杯布局
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>圣杯布局</title>
        <style>
        html,
        body {
            margin: 0;
            padding: 0;
        }

        .container {
            border: 1px solid;
            padding: 0 100px;
            width: 500px;
        }

        .container:after {
            content: '';
            display: block;
            clear: both;
            height: 0;
        }

        .main {
            width: 100%;
            height: 300px;
            background-color: red;
            float: left;
        }

        .aside {
            width: 100px;
            height: 100px;
            background: blue;
            float: left;
            position: relative;
            left: -100px;
            margin-left: -100%;
        }

        .extra {
            width: 100px;
            height: 100px;
            float: left;
            background: yellow;
            position: relative;
            left: 100px;
            margin-left: -100px;
        }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="main"></div>
            <div class="aside"></div>
            <div class="extra"></div>
        </div>
    </body>

    </html>

### 双飞翼布局

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>双飞翼布局</title>
        <style>
        html,
        body {
            margin: 0;
            padding: 0;
        }

        .container {
            border: 1px solid;
            width: 500px;
        }

        .container:after {
            content: '';
            display: block;
            clear: both;
            height: 0;
        }

        .main {
            width: 100%;
            height: 300px;
            float: left;
        }

        .main .wrap {
            background: pink;
            height: 300px;
            margin-left: 100px;
            margin-right: 100px;
        }

        .aside {
            width: 100px;
            height: 100px;
            background: blue;
            float: left;
            margin-left: -100%;
        }

        .extra {
            width: 100px;
            height: 100px;
            float: left;
            background: yellow;
            margin-left: -100px;
        }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="main">
                <div class="wrap"></div>
            </div>
            <div class="aside"></div>
            <div class="extra"></div>
        </div>
    </body>
    </html>

两种布局的对比
1. 两种布局方式都是把主列放在文档流最前面，使主列优先加载；
2. 两者在实现上的相同点在于都让三列浮动，然后通过负外边距形成三列布局；
3. 两种布局方式的不同在于如何处理中间主列的位置：圣杯布局是利用父容器的左右内边距定位；双飞翼布局是把主列嵌套在div后利用主列的左右外边距定位。