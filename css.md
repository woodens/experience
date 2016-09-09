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
- 通过设置父容器的字体大小为0，子容器的字体大小为>0的值

    .outer {
        font-size: 0;
        -webkit-text-size-adjust:none;/**取消Chrome浏览器最小字体限制*/
    }
    .outer .inner {
        font-size: 12px;
    }
    说明：现在chrome浏览器已经取消最小字体限制
- 设置浮动
    float: left;

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

### 企业DIV使用频率高的命名方法
- 网页内容类
    - 标题: title
    - 摘要: summary
    - 箭头： arrow
    - 商标： label
    - 网站标志： logo
    - 转角/圆角： corner
    - 横幅广告： banner
    - 子菜单： subMenu
    - 搜索： search
    - 搜索框： searchBox
    - 登录： login
    - 登录条：loginbar
    - 工具条： toolbar
    - 下拉： drop
    - 标签页： tab
    - 当前的： current
    - 列表： list
    - 滚动： scroll
    - 服务： service
    - 提示信息： msg
    - 热点：hot
    - 新闻： news
    - 小技巧： tips
    - 下载： download
    - 栏目标题： title
    - 热点： hot
    - 加入： joinus
    - 注册： regsiter
    - 指南： guide
    - 友情链接： friendlink
    - 状态： status
    - 版权： copyright
    - 按钮： btn
    - 合作伙伴： partner
    - 投票： vote
    - 左右中：left right center
- 页面结构
    - 容器: container
    - 页头：header
    - 内容：content/container
    - 页面主体：main
    - 页尾：footer
    - 导航：nav
    - 侧栏：sidebar
    - 栏目：column
    - 页面外围控制整体布局宽度：wrapper
    - 左右中：left right center
- 导航
    - 导航：nav
    - 主导航：mainbav
    - 子导航：subnav
    - 顶导航：topnav
    - 边导航：sidebar
    - 左导航：leftsidebar
    - 右导航：rightsidebar
    - 菜单：menu
    - 子菜单：submenu
    - 标题: title
    - 摘要: summary
- 功能
    - 标志：logo
    - 广告：banner
    - 登陆：login
    - 登录条：loginbar
    - 注册：regsiter
    - 搜索：search
    - 功能区：shop
    - 标题：title
    - 加入：joinus
    - 状态：status
    - 按钮：btn
    - 滚动：scroll
    - 标签页：tab
    - 文章列表：list
    - 提示信息：msg
    - 当前的: current
    - 小技巧：tips
    - 图标: icon
    - 注释：note
    - 指南：guild
    - 服务：service
    - 热点：hot
    - 新闻：news
    - 下载：download
    - 投票：vote
    - 合作伙伴：partner
    - 友情链接：link
    - 版权：copyright
    
### 推荐的 CSS 书写顺序
- 显示属性
    - display
    - list-style
    - position
    - float
    - clear
- 自身属性
    - width
    - height
    - margin
    - padding
    - border
    - background
- 文本属性
    - color
    - font
    - text-decoration
    - text-align
    - vertical-align
    - white-space
    - other text
    - content
### 默认的样式
```
html,body,div,ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,table,th,td,fieldset,
form,input,button,textarea,hr,blockquote,pre{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6{font-size:100%; font-weight:bold;line-height:1em;}
ul,ol,dl{list-style-type:none;}
fieldset,img{border:none;}
table{border-collapse:collapse;table-layout:fixed;empty-cells:show;}
address,caption,cite,code,dfn,th{font-style:normal;font-weight:normal;}
ins{text-decoration:underline;}
del{text-decoration:line-through;}
q:before,q:after{content:"";}
```
