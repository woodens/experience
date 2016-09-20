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

    数据库：mysql,mongoose,reids

    异步：async,wind

    部署：forever,pm2

    测试：jasmine,karma

    跨平台：rio,tty

    内核：cluster,http,request

    算法：ape-algorithm(快速排序),ape-algorithm(桶排序)
