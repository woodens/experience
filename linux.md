## 常见命令
- 一般用户修改密码         `passwd`
- 超级用户修改其他人密码    `passwd <用户名>` 
- 查询命令（manual page） `man <command>`
- 更新命令               `sudo apt-get update`
- 安装命令               `sudo apt-get install <command>`  
- 查看用户               `who am i`或`whoami` `who mom likes`
- 创建用户               `adduser <user>`或`useradd <user>`
- 切换用户               `su <user>`
- 切换到用户根目录        `su - <user>`
- 删除用户               `sudo deluser <username> --remove-home`
- 查看用户所在用户组       `groups <username>`  `cat /etc/group | grep -E <username>` 
- 为用户添加用户组        `sudo usermod -G <group> <username>`
- 为用户添加sudo权限      `usermod -aG wheel username`
- 查看文件权限            `ls -l`
- 查看目录权限            `ls -dl`
- 修改权限               `chmod 700 <filename>`
- 修改文件夹所属用户       `chown git:git <dirname>/`
- 修改文件所属用户         `chown -R git:git <filename>`
- 创建一个空文件          `touch <filename>`


## 常见问题
- ubuntu 命令行tab键路径补全失效（一般是新建的用户有此问题）

 ```
 解决办法：
 1. 修改/etc/passwd文件，修改相应的账号行为work:x:1000:1000::/home/work:/bin/bash
特别是注意/bin/bash 修改完记得重新远程连接服务器即可
 2. 创建账号时直接指定shell路径
 sudo useradd username -s /bin/bash
 ```
 
- 文件权限的字符都代表什么意思  

    ```
    每个文件三组权限（拥有者，用户组，其他用户）对应一个'rwx'  r代表读，w代表写，x代表运行
    ```
![](http://on90cf3na.bkt.clouddn.com/17-10-25/90355626.jpg)

    ```
    g、o和u分别代表group、others、user，+和-分别代表增加和去掉相应权限
    例如 chmod go-rw readme  
    相当于将文件readme的用户组及others权限rw去掉
    即 
    chmod 711 readme
    ```
- centos如何让用户无法用ssh进行登录
    
    ```
    将
    git:x:503:503::/home/git:/bin/bash
    更改为
    git:x:503:503::/home/git:/sbin/nologin
    ```

- centos软件包更新源
  > epel(Extra Packages for Enterprise Linux)为 RHEL 及衍生发行版如 CentOS、Scientific Linux 等提供高质量软件包的项目。
  安装源
    ```shell
    sudo yum install epel-release
    ```


