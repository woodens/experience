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
    git tag                    //查看所有标签
    git tag v1.0               //给分支打个标签
    git tag v0.9 634565        //给commitId为634565的提交打上标签
    git tag -a v0.9 -m "version 0.9 released" 34567  //给commitId为34567的提交打上说明文字为"version 0.9 released"的v0.9的标签
        - `-a`  标签名称
        - `-m`  标签说明
    git show v0.9              //显示标签为v0.9的标签信息及提交信息
    git reset --hard [HEAD^]|[HEAD^^]|[HEAD~100]|[commit_id]  //把当前版本回退到<上一个版本>|<上上个版本>|<往上100个版本>|<相应版本号>
    ```

#### 知识点总结
1. 安装
	- mac安装 
	- windows安装
	- Linux安装
	 
2. 基础操作
	- `git init`
	- `git clone url <reportname>`
	- `git add *.file`
	- `git commit -m "<message>"`
3. 

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
- fatal: Unable to create 'v:/path/to/files/.git/index.lock': File exists.
    > 命令删除sudo rm -f ./.git/index.lock
     
- 如果你只关心最新版的代码，而不关心之前的历史信息，怎么下载最快
    - 浅复制
         `git clone --depth=1 https://github.com/xxx/xxx.git`
         如果后面需要获取完整历史信息可以使用命令`git fetch --unshallow`
    - 直接在github上下载打包好的zip下载

- 如何管理发布版本

    ###### 发布版本就是在git上打上标签

    + `git tag <tagname> <commitId>`   用于创建新标签，默认打在head上,也可打在commitId上
    + `git tag -a <tagname> -m "blabla..."` 指定标签信息
    + `git tag-s <tagname> -m "blabla..."`  使用PGP签名标签，也就是签名不可伪造
    + `git tag`  可以查看所有标签
    + `git show <tagname>`   显示tagname的标签信息
    + `git push origin <tagname>` 推送一个本地标签
    + `git push origin --tags` 推送全部未推送过的本地标签
    + `git tag -d <tagname>` 删除本地标签
    + `git push origin :refs/tags/<tagname>` 删除一个远程标签  (若是要删除一个远程的标签，需要先删除本地标签才能删除远程标签)