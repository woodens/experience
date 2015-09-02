jQuery插件开发方式主要有三种：

*  通过$.extend()来扩展jQuery
*  通过$.fn 向jQuery添加新的方法
*  通过$.widget()应用jQuery UI的部件工厂方式创建

第一种方式太简单，仅仅是在jQuery命名空间或者理解成jQuery身上添加了一个静态方法而已，所以我们调用通过$.extend()添加的函数时
直接通过$符号调用（$.myfunction()）而不需要选中DOM元素($('#example').myfunction())，这种方式无法利用jQuery强大的选择器带来
的便利，要处理DOM元素以及将插件更好地运用于所选择的元素身上，还是需要使用第二种开发方式
通常我们使用第二种方法来进行简单插件开发，说简单是相对于第三种方式。第三种方式是用来开发更高级jQuery部件的，该模式开发出来
的部件带有很多jQuery内建的特性，比如插件的状态信息自动保存，各种关于插件的常用方法等










请按照以下的方式（安全结构良好的代码）编写插件
```javascript
;(function($,window,document,undefined){
    //我们的代码。。
    //blah blah blah...
})(jQuery,window,document);
```
例：
```javascript
;(function($, window, document,undefined) {
    //定义Beautifier的构造函数
    var Beautifier = function(ele, opt) {
        this.$element = ele,
        this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        },
        this.options = $.extend({}, this.defaults, opt)
    }
    //定义Beautifier的方法
    Beautifier.prototype = {
        beautify: function() {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
        }
    }
    //在插件中使用Beautifier对象
    $.fn.myPlugin = function(options) {
        //创建Beautifier的实体
        var beautifier = new Beautifier(this, options);
        //调用其方法
        return beautifier.beautify();
    }
})(jQuery, window, document);
``` 
 
 
 编写中的注意事项：
* 在代码开头加一个分号<br> 
>用来充当自调用匿名函数的第一对括号容易与别人定义的函数相连，中间没有分号造成我们的代码无法正常解析进而报错 <br>
  所以好的做法是我们在代码开头加一个分号，这在任何时候都是一个好的习惯
* 将系统变量以参数形式传递到插件内部可以提高访问速度
> 至于这个undefined，稍微有意思一点，为了得到没有被修改的undefined，我们并没有传递这个参数，但却在接收时接收了它，<br>
> 因为实际并没有传，所以‘undefined’那个位置接收到的就是真实的'undefined'了
* 命名规范
    *  a:变量及函数命名 一般使用驼峰命名法（CamelCase）
    *  b:在JavaScript中多用单引号
* 插件开发请使用面向对象思维
> 因为如果不这样，你可能需要一个方法的时候就去定义一个function，当需要另外一个方法的时候，再去随便定义一个function，
> 同样，需要一个变量的时候，毫无规则地定义一些散落在代码各处的变量
* 保护好默认参数
    * 示例代码a
```javascript  
    var defaults = {
        'color': 'red',
        'fontSize': '12px'
    };
  var settings = $.extend(defaults, options);
```
    * 示例代码b
```javascript
  var defaults = {
        'color': 'red',
        'fontSize': '12px'
    };
  var settings = $.extend({},defaults, options);//将一个空对象做为第一个参数
```  
> 示例代码a中调用extend时会将defaults的值改变，这样不好，因为它作为插件因有的一些东西应该维持原样，另外就是如果你
> 在后续代码中还要使用这些默认值的话，当你再次访问它时它已经被用户传进来的参数更改了
> 示例代码b中将一个新的空对象做为$.extend的第一个参数，defaults和用户传递的参数对象紧随其后，这样做的好处是所有值
> 被合并到这个空对象上，保护了插件里面的默认值
* 让插件接收参数
> 一个强劲的插件是可以让使用者随意定制的，这要求我们提供在编写插件时就要考虑得全面些，尽量提供合适的参数
* 支持链式调用
> 要让插件不打破jQuery支持链式调用的特性（选择好DOM元素后可以不断地调用其他方法），只需return一下即可
