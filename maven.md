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
    
