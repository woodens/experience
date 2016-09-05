#### 使用
- 常见命令

    ```
    git add <file>             //把文件添加到本地仓库（即将该文件纳入git管理）
    git add .                  //将当前文件目录中的所有文件添加到索引
    git commit -m '说明'        //将文件提交到本地仓库
    git log <--pretty=oneline> //查看提交历史<每次的记录显示在一行>
    git reflog                 //查看命令历史
    git push origin master     //把本地源码库push到Github上
    git pull origin master     //从Github上pull到本地源码库
    git config --list          //查看配置信息
    git status                 //查看项目状态信息
    git branch                 //查看项目分支
    git checkout -b host       //添加一个名为host的分支
    git checkout master        //切换到主干
    git merge host             //合并分支host到主干
    git branch -d host         //删除分支host
    git reset --hard [HEAD^]|[HEAD^^]|[HEAD~100]|[commit_id]  //把当前版本回退到<上一个版本>|<上上个版本>|<往上100个版本>|<相应版本号>
    ```
#### 常见问题
- 上传已有项目到git仓库

    进入项目目录

    ```
    touch README.md //新建说明文件
    git init //在当前项目目录中生成本地git管理,并建立一个隐藏.git目录
    git add . //添加当前目录中的所有文件到索引
    git commit -m "first commit" //提交到本地源码库，并附加提交注释
    git remote add origin https://github.com/xxx/test.git //添加到远程项目，别名为origin
    git push -u origin master //把本地源码库push到github 别名为origin的远程项目中，确认提交
    ```
- 同一个项目上传到多个git仓库

    > 在.git目录中的config文件中添加多个url=https://xxx.com/xx.git的路径即可
