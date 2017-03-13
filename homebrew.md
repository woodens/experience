>> Homebrew是Mac下最强大的套件管理器，类似于Centos下的yum和Debian下的apt-get。但是在国内，软件的下载、更新速度都很慢，以下方法让Homebrew用起来不再捉急。

###镜像介绍
homebrew镜像源主要分两部分：git repo（位于GitHub）和二进制bottles（位于bintray）

国内公认做的最好的镜像应该是 中科大的镜像。

## 步骤（仅针对bash shell）

1、设置 repo 镜像

```
cd "$(brew --repo)"
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git
```
2、设置 bintray镜像

```
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

- 更新文件包

 ```
 brew update   //更新全部文件包
 brew cleanup //清除更新之前的旧文件
 ```

##常见命令
- `brew search FORMULA`
- `brew home|info|options FORMULA`
- `brew --help`
- `brew upgrade FORMULA`
- `brew install FORMULA`
- `brew uninstall FORMULA`
- `brew list`
- `brew help`