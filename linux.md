## 常见问题
- ubuntu 命令行tab键路径补全失效（一般是新建的用户有此问题）

 ```
 解决办法：
 1. 修改/etc/passwd文件，修改相应的账号行为work:x:1000:1000::/home/work:/bin/bash
特别是注意/bin/bash 修改完记得重新远程连接服务器即可
 2. 创建账号时直接指定shell路径
 sudo useradd username -s /bin/bash
 ```

