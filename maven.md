#### 命令
- mvn compile
- mvn test
- mvn clean
- mvn package

#### 知识点
- 标准目录结构：
    - src
    - main
        - bin 脚本库
        - java java源代码文件
        - resources 资源库，会自动复制到classes目录里
        - filters 资源过滤文件
        - assembly 组件的描述配置（如何打包）
        - config 配置文件
        - webapp web应用的目录。WEB-INF、css、js等
    - test
        - java 单元测试java源代码文件
        - resources 测试需要用的资源库
        - filters 测试资源过滤库
    - site Site（一些文档）
    - target
    - LICENSE.txt Project’s license
    - README.txt Project’s readme
#### 常见问题
- maven GroupId 和ArtifactId通常填什么
    ```
    GroupID是项目组织唯一的标识符，实际对应JAVA的包的结构，是main目录里java的目录结构。
    ArtifactID就是项目的唯一的标识符，实际对应项目的名称，就是项目根目录的名称。
    ```
- 版本号参数
    ```
    <properties>
      <spring.version>4.2.5.RELEASE</spring.version>
    </properties>
    
    <version>${spring.version}</version>
    ```
- 安装jar包到本地仓库

>1、cd命令进入到jar文件所在目录，不然直接执行会报错
>2、输入以下命令
    mvn install:install-file -DgroupId=org.wltea.analyzer -DartifactId=IKAnalyzer -Dversion=5.0 -Dpackaging=jar -Dfile=IKAnalyzer-5.0.jar
      -Dfile=后面是文件路径
      
#### 国内较快的仓库
- 阿里
```
    <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>        
    </mirror>
```



## 知识点总结
1. 怎么将jar包安装到本地库
2. 怎么卸载本地库中的jar包
3. mvn如何打包
