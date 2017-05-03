#### 对springboot行为进行干预的几种方式（从高到低）

- 命令行参数
- 系统环境变量
- 位于文件系统中的配置文件
- 位于classPath中的配置文件
- 固化到代码中的配置项


#### `springboot-web`的项目结构

- 传统打包成war的项目是将静态文件等前端信息放在`src/main/webapp`下
- `springboot-web`将项目打包成可执行的jar文件，并将`src/main/webapp`目录下的文件放在`src/main/resources`下
  
   - `src/main/resources/static`存放各种静态文件
   - `src/main/resources/templates`存放模板文件