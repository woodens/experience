##技术栈
- 框架
 - [express](http://www.expressjs.com.cn)
 - [koa](http://koajs.com)
 - [sails](http://sailsjs.com/)


## Nodejs总结
### 1. 文件
- 1.1 阻塞执行

    ```
    var fs = require("fs");

    var data = fs.readFileSync('input.txt');

    console.log(data.toString());
    console.log("程序执行结束!");
    ```
- 1.2 非阻塞执行
    ```
    var fs = require("fs");

    fs.readFile('input.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    });

    console.log("程序执行结束!");
    ```
### 15个nodejs应用场景

---
- Web开发：Express + EJS + Mongoose/MySQL
- REST开发：Restify
- Web聊天室(IM)：Express + Socket.io
- Web爬虫：Cheerio/Request
- Web博客：Hexo
- Web论坛: nodeclub
- Web幻灯片：Cleaver
- 前端包管理平台: bower.js
- OAuth认证：Passport
- 定时任务工具: later
- 浏览器环境工具: browserify
- 命令行编程工具：Commander
- Web控制台工具: tty.js
- 客户端应用工具: node-webwit
- 操作系统: node-os


    项目管理：npm,grunt, bower, yeoman

    Web开发：express,ejs,hexo, socket.io, restify, cleaver, stylus, browserify,cheerio

    工具包：underscore,moment,connet,later,log4js,passport,passport(oAuth),domain,require,reap,commander,retry

    数据库：mysql,mongoose,redis,mongodb

    异步：async,wind

    部署：forever,pm2

    测试：jasmine,karma

    跨平台：rio,tty

    内核：cluster,http,request

    算法：ape-algorithm(快速排序),ape-algorithm(桶排序)
    
    
## 环境变量
环境变量（environment variables）一般是指在操作系统中用来指定操作系统运行环境的一些参数。在 Mac 和 Linux 的终端直接输入 env，会列出当前的环境变量，如：USER=xxx。简单来讲，环境变量就是传递参数给运行程序的。

- 命令行指定环境变量
```nodejs
NODE_ENV=test node app
```
- 在app.js中获取环境变量
```nodejs
//通常用process.env来获取环境变量
console.log(process.env.NODE_ENV) //test
```

- 例子
使用debug模块
    - mac或者linux命令
    ```npm
    DEBUG=* node app
    ```
    - windows 使用方式
    ```
    set DEBUG=*
    set NODE_ENV=test
    node app
    ```
    - 使用cross-env设置
    ```
    //安装cross-env
    npm i cross-env -g
    //使用cross-env
    cross-env NODE_ENV=test node app
    ```
    
## package.json
package.json 对于 Node.js 应用来说是一个不可或缺的文件，它存储了该 Node.js 应用的名字、版本、描述、作者、入口文件、脚本、版权等等信息。

### semver
语义化版本（semver）即 dependencies、devDependencies 和 peerDependencies 里的如：`"co": "^4.6.0"` 。

semver 格式：`主版本号.次版本号.修订号。`版本号递增规则如下：

- `主版本号`：做了不兼容的 API 修改
- `次版本号`：做了向下兼容的功能性新增
- `修订号`：做了向下兼容的 bug 修正

#### 版本号符号说明
- ^这个符号代表的是只能更新版本号第二位数字，
- ~可以只能更新第三位，
- *代表更新到最新

### dependencies与devDependencies区别
- dependencies与devDependencies 两者标识的是不同的依赖，dependencies是运行本项目所依赖的包，而devDependencies是用于开发时需要的模块，包括一些用于开发测试的模块
- 添加dependencies 依赖
命令行： npm install bootstrap --save
- 添加devDependencies 依赖
命令行：npm install webpack --save-dev

## npm使用
## npm init
使用```npm init ```初始化一个空项目是个好习惯
## npm install
###参数说明
- --save 简化 -S  将类似```"express": "^4.14.0"``` 写入 dependencies
- --save-dev 简化 -D 将类似```"express": "^4.14.0"``` 写入 devDependencies
- --save --save-exct   将版本信息放准确的进dependencies

    运行以下命令：
    ```
    npm config set save-exact true
    ```
    这样每次 npm i xxx --save 的时候会锁定依赖的版本号，相当于加了 --save-exact 参数
## npm scripts
## npm shrinkwrap
虽然save-exact 可以锁定版本号，但是因为锁定的是最外层的版本号，而里层依赖的模块package.json有可能写的是依赖*从而造成意外发生
npm shrinkwrap可以在当前目录生成npm-shrinkwrap.json，里面包含了通过 node_modules 计算出的模块的依赖树及版本。
只要目录下有 npm-shrinkwrap.json 则运行 npm install 的时候会优先使用 npm-shrinkwrap.json 进行安装，没有则使用 package.json 进行安装。

npm shrinwrap 只会生成dependencies的依赖，不会生成devDependencies的