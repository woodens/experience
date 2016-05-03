#sea.js语法--CMD模块规范

## define
### define(id?,deps?,factory(require?,exports?,module?))
- id和deps参数都可以省略
- 字符串id:模块标识   
- 数组deps：模块依赖  
- factory: 函数或对象或字符串
 + 为对象、字符串时，表示模块的接口就是该对象、字符串
 + 为函数时，表示模块的构造方法,默认传入三个参数：require、exports和module
- 例子
 + `define({ "foo": "bar" });`
 + `define('I am a template. My name is {{name}}.');`
 + `define(function(require, exports, module) {
  		// 模块代码
	});`
## require
- **定义：**require 是一个方法，接受 模块标识 作为唯一参数，用来获取其他模块提供的接口。
- require.async
 + **语法：**`require.async(id, callback?)`
 + **定义：**`require.async 方法用来在模块内部异步加载模块，并在加载完成后执行指定回调。callback 参数可选`
 + **例子：**
 
		define(function(require, exports, module) {
		  	// 异步加载一个模块，在加载完成时，执行回调
		  require.async('./b', function(b) {
		    b.doSomething();
		  });
		  // 异步加载多个模块，在加载完成时，执行回调
		  require.async(['./c', './d'], function(c, d) {
		    c.doSomething();
		    d.doSomething();
		  });
		 });
 + **注意：**require 是同步往下执行，require.async 则是异步回调执行。require.async 一般用来加载可延迟异步加载的模块。
- require.resolve 
 +** 语法：**require.resolve(id)
 + **定义：**使用模块系统内部的路径解析机制来解析并返回模块路径。该函数不会加载模块，只返回解析后的绝对路径。
 
	 	define(function(require, exports) {	
		  console.log(require.resolve('./b'));
		  // ==> http://example.com/path/to/b.js
		});

## exports
- **定义：**exports 是一个对象，用来向外提供模块接口。
- **例子：**

		define(function(require, exports) {
		
		  // 对外提供 foo 属性
		  exports.foo = 'bar';
		
		  // 对外提供 doSomething 方法
		  exports.doSomething = function() {};
		});
除了给 exports 对象增加成员，还可以使用 return 直接向外提供接口。

		define(function(require) {
		
		  // 通过 return 直接提供接口
		  return {
		    foo: 'bar',
		    doSomething: function() {}
		  };
		
		});
如果 return 语句是模块中的唯一代码，还可简化为：

		define({
		  foo: 'bar',
		  doSomething: function() {}
		});
## module
- module.id String
 + 定义：模块的唯一标识。
 + 例子：

			define('id', [], function(require, exports, module) {
			
			  // 模块代码
			
			});
- module.uri String
 + 定义：根据模块系统的路径解析规则得到的模块绝对路径。
 + 例子：

			define(function(require, exports, module) {
			
			  console.log(module.uri); 
			  // ==> http://example.com/path/to/this/file.js
			
			});
- module.dependencies Array
 + dependencies 是一个数组，表示当前模块的依赖。
- module.exports Object
 + 当前模块对外提供的接口。

##小结
这就是 CMD 模块定义规范的所有内容。经常使用的 API 只有 define, require, require.async, exports, module.exports 这五个。其他 API 有个印象就好，在需要时再来查文档，不用刻意去记。