### nginx 基本使用

- 下载 [nginx最新版下载](http://nginx.org/en/download.html)
- 安装`将文件解压在非中文的目录下，不然启动报错`
- 启动 
    1. 直接双击nginx.exe
    2. 命令行运行start nginx
- 关闭 
    1. 任务管理器结束nginx进程
    2. 命令行运行nginx -s quit   `quit表示正常退出nginx并保存相关信息`
    3. 命令行运行nginx -s stop   `stop表示立即停止nginx不保存相关信息`
- 重启
    - nginx -s reload