# django

## django的目录结构
	
```file
projectName
	projectName
		__init__.py
		settings.py
		urls.py
	apps
		app1
		app2
	log
	media
	static
	templates
	manage.py
```

## django 语言支持
1.7之前，需要设置`LANGUAGE_CODE = 'zh_CN'`
在1.7以上，django的中文需要设置`LANGUAGE_CODE = 'zh_Hans'`


## django 模块

- `xadmin` 后台管理系统的界面需要添加`django_crispy_forms`不然会报错
- 'django_captcha',          # 验证码
- 'django_pure_pagination',  # 分页



## django ORM

1. 获取models中choices的显示，可以在页面中这样取值`object.get_fieldname_display`来获取 
	
	举个🌰：
	
	```python
	class Course(models.Model):
    	degree = models.CharField(max_length=10, choices=(('junior', '初级'), ('middle', '中级'), 	('senior', '高级')), verbose_name='课程等级')

	```
	
	```html
	{{course.get_degree_display}}
	```
	
2. 反向获取参考外键的数据，可以使用`_set.all()`来获取
	
	举个🌰：
	
	```python
	class Course(models.Model):
	    """课程
	    """
		...
		def get_zj_nums(self):
			return self.lesson_set.all().count()
	
	
	class Lesson(models.Model):
		"""课程章节
		""“
		course = models.ForeignKey(Course, verbose_name='课程')
		...
	```
	
3. 判断用户是否登录

	```
	request.user.is_authenticated()
	```

4. 页面url，`{% url 'course:list' course.id%} `
5. django 的form表单验证
6. ajax请求

	在js中写下如下内容，django默认有csrf验证，所以下面代码需要添加在html中
	
	```javascript
		$.ajax({
			cache:false,
			type:'POST',
			url:'',
			data:{},
			async:true,
			beforeSend:function(xhr,settings){
				xhr.setRequestHeader(’X-CSRFToken‘,'{{csrf_token}}');
			},
			success:function(data){
			
			}
		})
	```
	python后台中
	
	```
	from django.http import HttpResponse
	return HttpResponse('jsonStr',content_type='application/json')
	```
7. 上传文件的地址media
	
	在settings.py中设置
	
	```
	ME DIA_URL = '/media/'

	MEDIA_ROOT = os.path.join(BASE_DIR,'media')
	```
	然后在html中引用
	
	```
	<img src="{{MEDIA_URL}}{{course.img}}">
	```
8. 过滤包含外键id的值

	可以用_来连接外键的字段，__来连接使用ORM方法
	
	举个🌰：
	
	```
	user_ids = [user_course.user.id for user_course in user_courses]
	all_user_courses = UserCourse.object.filter(user_id__in=user_ids)
	```
9. 数据迁移

	```
	makemigrations   将数据模型变更制作一个迁移
	migrate          执行迁移
	sqlmigrate       展示迁移的SQL语句
	```
10. 数据模型

	```
	class OfficialUrl(models.Model):
	    createTime = models.DateTimeField(auto_now_add=True)
	    url = models.CharField(max_length=500, null=True, blank=True)
		
		class Meta:
			verbose_name = '官方地址'
			verbose_name_ plural = verbose_name
			db_table = 'official_url'
			
	```
	> verbose_name_plural是后台设置时显示的复数
11. 查询
	- User.objects.all()
	- User.objects.filter(name='', age='')
	- 取出一条
	
		```
		if all_message:
			message = all_messages[0]
		```
12. 保存
	- save()
	 
		```
		user = User()
		user.name = '张三'
		user.save()
		```
13. 删除
	- delete()
	

# django view
1. 处理请求的两种方式
	- 函数处理请求
		
		在urls.py中写入
		
		在views.py中写入
	- class处理请求

		在urls.py中写入
		
		```
		# _*_ coding: UTF-8 _*_
		from django.conf.urls import url
		
		import views
		
		urlpatterns = [
		    url(r'^list$', views.CourseListView.as_view(), name='course_list')
		]
		```
		在views.py中写入
	
 
2. 登录权限验证的view

	不用class的情况下，方法加上装饰器`@login_required`即可，但是在使用class创建view的情况下，需要使用到继承来处理这种情况，先创建登录权限类
	
	```python
	# _*_ coding: UTF-8 _*_
	
	from django.contrib.auth.decorators import login_required
	from django.utils.decorators import method_decorator
	
	
	class LoginRequiredMixin(object):
	    @method_decorator(login_required(login_url='/login/'))
	    def dispatch(self, request, *args, **kwargs):
	        return super(LoginRequiredMixin, self).dispatch(request, *args, **kwargs)

	```
	然后在view中继承
	
	```
	class CourseAddView(LoginRequiredMixin, view):
		...
	``` 
	
## django虚拟环境`virtualenv`与`virtualenvwrapper`

1. 虚拟virtualenv  与virtualenvwrapper
2. 创建虚拟环境

	```
	mkvirtualenv 虚拟环境目录
	```
	> 创建完成后自动进入虚拟环境 
	
3. 退出虚拟环境

	```
	deactivate
	```
	
4. 查看已经建立的虚拟环境

	```
	workon
	```
5. 进入某个虚拟环境

	```
	workon 虚拟环境目录
	```
6. 虚拟环境添加包

	> 进入虚拟环境后使用pip进行操作，操作方法参照pip命令
	
	
## 使用pyenv及pyenv-virtualenvwrapper

1. 安装`pyenv`及`pyenv-virtualenvwrapper`

	命令行执行

	```
	brew install pyenv 、brew install pyenv-virtualenv
	```
	安装完在`~`目录下的`.bash_profile`文件加上以下内容
	
	```
	export PYENV_ROOT=/usr/local/var/pyenv
	if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
	if which pyenv-virtualenv-init > /dev/null; then eval "$(pyenv virtualenv-init -)"; fi	
	```
	>说明：PYENV_ROOT为pyenv的环境目录 可自行创建目录
- `pyenv`的使用

	```
	pyenv versons：查看当前pyenv下的所有python版本.
	pyenv install --list：列出所有可以下载的python版本.
	pyenv install 版本号：下载并安装python版本，eg：python install 2.7.12，版本号可根据上一条命令获取.
	python global 版本号：切换当前默认的python版本，全局有效.
	python local 版本号：切换当前默认的python版本，当前用户有效.
	```
- `pyenv-virtualenv`的使用

	```
	pyenv virtualenv 2.7.12 python2_7_12：创建名为python2_7_12的虚拟环境，对应的版本为2.7.12
	pyenv activate python2_7_12：切换到python2_7_12虚拟环境
	pyenv deactivate：退回系统环境
	pyenv virtualenvs 显示所有虚拟环境
	```
	
## django 静态文件处理

```
STATIC_URL = '/static/'                 # 访问静态url
STATICFILES_DIRS = (                    # 静态文件夹
    os.path.join(BASE_DIR, 'static'),
)
```

## django xadmin
1. 后台管理显示app中文
    
    在每个app的apps.py的class后加入 `verbose_name='中文app名'`
    在`__init__.py`文件中加入`default_app_config = '<app packagename>.apps.<app>Config'`


