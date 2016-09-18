### 1.数据类型

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


### 1.2.2 数据类型的另一种分

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
        
   