> python 为动态语言


#python环境搭建
在[官方网站](http://www.python.org/download/)下载相应系统的文件进行安装

#### `#!/usr/bin/env python`与`#!/usr/bin/python`的区别?

脚本语言的第一行，目的就是指出，你想要你的这个文件中的代码用什么可执行程序去运行它

1. `#!/usr/bin/Python`是告诉操作系统执行这个脚本的时候，调用/usr/bin下的python解释器；
2. `#!/usr/bin/env python`这种用法是为了防止操作系统用户没有将python装在默认的/usr/bin路径里。当系统看到这一行的时候，首先会到env设置里查找python的安装路径，再调用对应路径下的解释器程序完成操作。
3. 一言以蔽之
	- `#!/usr/bin/python`相当于写死了python路径;
 	- `#!/usr/bin/env python`会去环境设置寻找python目录,推荐这种写法

#python中文编码
Python中默认的编码格式是 ASCII 格式，在没修改编码格式时无法正确打印汉字，所以在读取中文时会报错。

解决方法为只要在文件开头加入 `# -*- coding: UTF-8 -*-` 或者 `#coding=utf-8` 就行了。
建议Python文件头部都加上

```python
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
``` 


#python基础
## 注释
### 单行注释
```python
# 第一个注释
print "Hello, Python!";  # 第二个注释
```
### 多行注释
```python
'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''

"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""
```
## 数据类型
	数据类型
	Number 数字
		整数		int      1
		浮点型		float    3.444
		布尔值		bool     True False
		复数		complex  4+3j  complex(a,b)
	字符串str ''或""
		编码
			ord('A')获取字符的整数表示
			chr('2323')将整数转换为对应的字符
		计算包含多少个字符
			len('中文') #2
			len('中文'.encode('utf-8')) #6  将字符转换为bytes后len()计算的就是字节数
			len(b'ABC') #3
		文件以`UTF-8`保存
		文件以`utf-8`读取源码，在代码文件的前两行加上
			#!/usr/bin/env python3    #告诉liunx/OS X系统，这是一个Python可执行程序
			# -*- coding: utf-8 -*-   #告诉编译器按照UTF-8编码读取源代码
		占位符表示
			%d	整数
			%f	浮点数
			%s	字符串
			%x	十六进制整数
	空  None
	list 集合
		list是一种可变有序集合，元素类型可以不同
		classmates = ['Michael', 'Bob', 'Tracy'] # 变量classmates就是list
		len(classmates)                          # 获取classmates的元素个数
		classmates[0]                            # Michael
		classmates[-1]                           # Tracy 最后一个元素
		classmates.append('Adam')                # 末尾添加一个元素
		classmates.insert(1, 'Jack')             # 将Jack保存在索引为1的位置
		classmates.pop()                         # 删除末尾的元素
		classmates.pop(1)                        # 删除指定位置的元素
		classmates[1] = 'Sarah'                  # 指定位置设定值
	tuple 元组
		元组不能进行修改，其他与list无异
		t = ()                          # 空tuple
		t = ('Michael','Bob','Tracy')   # 
		t = (1)                         # 元素为1的tuple
		t = (1,)                        # 有一个元素的tuple
	dict 字典，其实就是其他语言的map
		d = {'Michael': 95, 'Bob': 75, 'Tracy': 85} # 赋值
		d['Jack'] = 90                              # 设定值
		d.get('Thomas')
		d.get('Thomas',-1)                          # 查询key为Thomas的value，默认值为-1
		d.pop('Bob')                                # 删除key为Bob的value
	set 集合,是一组无序不重复的key集合
		要创建set需要提供一个list
		s = set([1, 2, 3])

#### 类型判断函数`type()`和`isinstance()` 在判断类型时的区别？

- type()不会认为子类是一种父类类型。
- isinstance()会认为子类是一种父类类型。

### 数据类型转换

| 函数                |  描述    |
| :-------           |  :------- |
|int(x [,base])      | 将x转换为一个整数 |
|float(x)            | 将x转换到一个浮点数
complex(real [,imag])| 创建一个复数
str(x)               | 将对象 x 转换为字符串
repr(x)              | 将对象 x 转换为表达式字符串
eval(str)            | 用来计算在字符串中的有效Python表达式,并返回一个对象
tuple(s)             | 将序列 s 转换为一个元组
list(s)              | 将序列 s 转换为一个列表
set(s)               | 转换为可变集合
dict(d)              | 创建一个字典。d 必须是一个序列 (key,value)元组。
frozenset(s)         | 转换为不可变集合
chr(x)               | 将一个整数转换为一个字符
unichr(x)            | 将一个整数转换为Unicode字符
ord(x)               | 将一个字符转换为它的整数值
hex(x)               | 将一个整数转换为一个十六进制字符串
oct(x)               | 将一个整数转换为一个八进制字符串
		
## 时间处理
Python 提供了一个 time 和 calendar 模块可以用于格式化日期和时间。

- `time.time()`                                 时间戳(70年1月1日到目前为止的秒数浮点型)
- `time.localtime(time.time())`                 将时间戳转换为时间元组
- `time.asctime( time.localtime(time.time()) )` 获取最简格式化的时间
- `time.strftime(format[, t])`                  格式化日期
- `time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) `
- `time.mktime(tupletime)`                      将格式化的日期转换为时间戳
- `time.mktime(time.strptime(a,"%a %b %d %H:%M:%S %Y"))`
- `calendar.month(2017,1)`                      打印2017年1月份的日历


#### 时间相关附录：

**1. 时间struct_time元组属性**

	 序号 |	属性	| 值 
	 :-- | :--   | :-- 
	0    | tm_year	| 2008
	1    | tm_mon	   | 1 到 12
	2	  | tm_mday	| 1 到 31
	3	  | tm_hour	| 0 到 23
	4	  | tm_min	| 0 到 59
	5	  | tm_sec	| 0 到 61 (60或61 是闰秒)
	6	  | tm_wday	| 0到6 (0是周一)
	7	  | tm_yday	| 1 到 366(儒略历)
	8	  | tm_isdst	| -1, 0, 1, -1是决定是否为夏令时的旗帜
	
**2. 日期格式化符号**
 
 符号 | 描述
 :-- | :--
 %y  | 两位数的年份表示（00-99）
 %Y  | 四位数的年份表示（000-9999）
 %m  | 月份（01-12）
 %d  | 月内中的一天（0-31）
 %H  | 24小时制小时数（0-23）
 %I  | 12小时制小时数（01-12）
 %M  | 分钟数（00=59）
 %S  | 秒（00-59）
 %a  | 本地简化星期名称
 %A  | 本地完整星期名称
 %b  | 本地简化的月份名称
 %B  | 本地完整的月份名称
 %c  | 本地相应的日期表示和时间表示
 %j  | 年内的一天（001-366）
 %p  | 本地A.M.或P.M.的等价符
 %U  | 一年中的星期数（00-53）星期天为星期的开始
 %w  | 星期（0-6），星期天为星期的开始
 %W  | 一年中的星期数（00-53）星期一为星期的开始
 %x  | 本地相应的日期表示
 %X  | 本地相应的时间表示
 %Z  | 当前时区的名称
 %%  | %号本身

## 条件判断
```python
age = 3
if age >= 18:
    print('your age is', age)
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('your age is', age)
    print('teenager')
```
只要x是非零数值，非空字符串，非空集合等就会执行
```python
if x:
    print('True')
```

## 循环
1. `for x in ...`循环就是把每个元素代入变量x，然后执行缩进块的语句

	```python
	names = ['Michael', 'Bob', 'Tracy']
	for name in names:
	    print(name)
	```
	Python提供一个range()函数，可以生成一个整数序列
	
	```python
	sum = 0
	for x in range(101):
	    sum = sum + x
	print(sum)
	```
	
	循环中使用else语句
	
	```python
	for num in range(10,20):  # 迭代 10 到 20 之间的数字
   for i in range(2,num): # 根据因子迭代
      if num%i == 0:      # 确定第一个因子
         j=num/i          # 计算第二个因子
         print '%d 等于 %d * %d' % (num,i,j)
         break            # 跳出当前循环
   else:                  # 循环的 else 部分
      print num, '是一个质数'
	```
2. while循环 
	
	只要满足条件就会一直执行下去
	
   ```python
   sum = 0
	n = 99
	while n > 0:
	    sum = sum + n
	    n = n - 2
	print(sum)
   ```
   while循环中使用else，当为false时执行else
   
   ```python
   count = 0
	while count < 5:
	   print count, " is  less than 5"
	   count = count + 1
	else:
	   print count, " is not less than 5"
   ```
3. `break`     结束循环
4. `continue`  跳出当前循环直接进入下一次循环

## 迭代器

**说明**

- 迭代器有两个基本的方法：iter() 和 next()
- 字符串，列表或元组对象都可用于创建迭代器
- 使用next()和for循环两种方式进行遍历

**实例**

next(调用)

```python
list=[1,2,3,4]
it = iter(list)    # 创建迭代器对象
next(it)           # 1
next(it)           # 2
```

for循环调用

```python
list=[1,2,3,4]
it = iter(list)    # 创建迭代器对象
for x in it:
    print (x, end=" ")
```

## 函数
1. 定义函数
	
	每个函数都有返回值，默认返回None，可以返回多个值，当函数还没想好内容的时候可以pass，使调用正常通过
	
	**语法**
	
	```python
	def functionname( parameters ):
		"函数_文档字符串"
		function_suite
  		return [expression]
	```
	
	**语法说明：**
	- 函数代码块以 def 关键词开头，后接函数标识符名称和圆括号()。
	- 任何传入参数和自变量必须放在圆括号中间。圆括号之间可以用于定义参数。
	- 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
	- 函数内容以冒号起始，并且缩进。
	- return [表达式] 结束函数，选择性地返回一个值给调用方。不带表达式的return相当于返回None。
 	
2. 调用函数
	
	以下是调用函数时可使用的正式参数类型：

	- **必备参数**
 		
 		必须传入参数，不然报错
 	
	 	```python
	 	def printme( str ):
		   "打印任何传入的字符串"
		   print str
	 
		printme('My String')
		```
 	
 	- **关键字参数**
 	
 		使用关键字参数允许函数调用时参数的顺序与声明时不一致
 		
 		```python
 		def printme( str ):
		   "打印任何传入的字符串"
		   print str
		 
		printme( str = "My string")
 		```
 	- **缺省参数**
 	
 		调用函数时，缺省参数的值如果没有传入，则被认为是默认值
 		
 		```python
		def printinfo( name, age = 35 ):
		   "打印任何传入的字符串"
		   print "Name: ", name
		   print "Age ", age
 
		printinfo( age=50, name="miki" )
		printinfo( name="miki" )
 		```
 	- **不定长参数**
 		
 		可以传入比声明时更多的参数，用*变量名存放未声明的参数
 		
 		```python
 		def printinfo( arg1, *vartuple ):
		   "打印任何传入的参数"
		   print "输出: "
		   print arg1
		   for var in vartuple:
		      print var
		 
		printinfo( 10 )
		printinfo( 70, 60, 50 )
 		```
 
3. 参数传递
 	
 	- **不可变参数传递**
 		- strings, tuples, 和 numbers 是不可更改的对象
 		- fun（a），传递的只是a的值，没有影响a对象本身。比如在 fun（a）内部修改 a 的值，只是修改另一个复制的对象，不会影响 a 本身。
 	- **可变参数传递**
 		- list,dict 等则是可以修改的对象
 		-  fun（la），则是将 la 真正的传过去，修改后fun外部的la也会受影响
4. 匿名函数

	- **语法**
	
		```python
		lambda [arg1 [,arg2,.....argn]]:expression
		```
				
	- **语法说明**
		- lambda的主体是一个表达式，而不是一个代码块。仅仅能在lambda表达式中封装有限的逻辑进去。
		- lambda函数拥有自己的命名空间，且不能访问自有参数列表之外或全局命名空间里的参数。

	- **实例**

		```python
		sum = lambda arg1, arg2: arg1 + arg2;
 
		print "相加后的值为 : ", sum( 10, 20 )
		print "相加后的值为 : ", sum( 20, 20 )
		```
		
		
## 生成器

在 Python 中，使用了 yield 的函数被称为生成器（generator）<br>
跟普通函数不同的是，生成器是一个返回迭代器的函数，只能用于迭代操作，更简单点理解生成器就是一个迭代器。<br>
在调用生成器运行的过程中，每次遇到 yield 时函数会暂停并保存当前所有的运行信息，返回yield的值。并在下一次执行 next()方法时从当前位置继续运行；不过一般为了程序的健壮性，都是for循环来执行迭代器。

斐波拉切数列的实例

```python
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
        
for n in fib(6):
	print(n)
```

## Python 模块

> Python模块是一个以`.py`结尾的Python文件

### 引入模块

- `import module1[, module2[,... moduleN]`
- `from module import name1,name2`

### Python中的包

包是一个分层次的文件目录结构，它定义了一个由模块及子包，和子包下的子包等组成的 Python 的应用环境。<br>
简单来说，包就是文件夹，但该文件夹下必须存在 __init__.py 文件, 该文件的内容可以为空。__int__.py用于标识当前文件夹是一个包。
