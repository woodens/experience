### 1.数据类型
- 六种 原型 数据类型:
    - Boolean.  布尔值，true 和 false.
    - null. 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或其他变量完全不同。
    - undefined.  变量未定义时的属性。
    - Number.  表示数字，例如： 42 或者 3.14159。
    - String.  表示字符串，例如："Howdy"
    - Symbol ( 在 ECMAScript 6 中新添加的类型).。一种数据类型，它的实例是唯一且不可改变的。
- 以及 Object 对象

Objects 和 functions 是本语言的其他两个基本要素。你可以将对象视为存放值的命名容器，而将函数视为你的应用程序能够执行的过程(procedures)。

#### 1.1 typeof方法可以查看基本的变量类型：

类型 | 类型  | typeof
---|--- |---
数字   | number     | number
字符串 | string     | string
布尔   | boolean    | boolean
对象   | object     | object
数组   | array      | object
函数   | function   | function
未定义 | undefined  | undefined
空     | null       | object
非数字 | NaN        | number
日期   | Date       | object
```
注意： typeof Math        Object
      typeof Function    function
      typeof String      function
      typeof Number      function
      typeof Date        function
      ...
```

### 1.2.1 数据类型分类方式
- 在 JavaScript 中有 5 中不同的数据类型：
    - string
    - number
    - boolean
    - object
    - function
- 3 种对象类型：
    - Object
    - Date
    - Array

- 2 个不包含任何值的数据类型：
    - null
    - undefined


### 1.2.2 数据类型的另一种分类

- 基本类型
    - Undefined
    - Null 
    - Boolean
    - Number
    - String
- 引用类型
    - Object
    - Array
    - Date
    - RegExp
    - Function
    - Math
    - Map
    - Set
    - Global(window)
### 注意
- switch 语句会使用恒等计算符(===)进行比较
- Undefined 不是 Null
```
在 JavaScript 中, null 用于对象, undefined 用于变量，属性和方法。
对象只有被定义才有可能为 null，否则为 undefined。
如果我们想测试对象是否存在，在对象还没定义时将会抛出一个错误。
```
### 详解类型
- 超类 Object
    - 构造函数
        - new Object()
        - new Object(value)
    - 属性
        - constructor
    - 方法
        - hasOwnProperty()        检查是否有非继承的属性
        - isPrototypeOf()         检查对象是否是指定对象的原型
        - propertyIsEnumerable()  检查指定的对象是否存在
        - toLocaleString()        返回对象本地化的字符串
        - toString()              返回对象的字符串
        - valueOf()               返回对象原始值(如果存在)
- 数组 Array
    - 构造函数
        - new Array()
        - new Array(size)
        - new Array(element0,element1,...,elementn)
    - 属性
        - length
    - 方法
        - concat(value|[value1,value2][,[value3,value4]]...)
           `将N个数组或者数组+元素进行合并`
        - join([separator])
            `用分隔符将元素连接成字符串（默认分隔符为逗号）`
        - pop()`删除数组最后一个元素,将数组长度-1，返回最后一个元素`
        - push()
        - reverse()
        - shift()
        - slice()
        - sort()
        - splice()
        - toLocaleString()
        - toString()
        - unshift()

### 常用技巧

- 检查对象类型

        /* 检测对象类型
         * @param: obj {JavaScript Object}
         * @param: type {String} 以大写开头的 JS 类型名
         * @return: {Boolean}
         */
        function is(obj, type)  {
          return Object.prototype.toString.call(obj).slice(8, -1) === type;
        }
### 常见问题
- 数组的concat与push区别
    - 返回值不同 concat返回合并后的数组;push返回新数组的长度
    - push 遇到数组参数时，把整个数组参数作为一个元素；而 concat 则是拆开数组参数，一个元素一个元素地加进去
    - push 直接改变当前数组；concat 不改变当前数组
- e.target 与 e.currentTarget区别
    - e.target指触发事件的dom，不包含通过冒泡传递事件的dom元素；
      e.currentTarget指触发当前事件的dom，包含通过冒泡传递事件的dom元素
   