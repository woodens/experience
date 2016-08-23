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