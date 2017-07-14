查询java占用端口并杀掉端口占用进程
ps -aux | grep java
kill pid

####创建springboot 服务
- 做一个软链接指向你的jar包并加入到init.d中，然后用命令来启动

```
sudo ln -s /path/to/yourapp.jar /etc/init.d/store
```
- 授权

```
chmod +x /etc/init.d/yourapp
```
- 执行

```
service yourapp start|stop|restart
或
/etc/init.d/yourapp start|stop|restart
```

