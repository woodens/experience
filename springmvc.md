#springmvc

----
- 常见注解

    - **@Controller**
    - **@RequestMapping**
    - **@RequestParam**
    - **@SessionAttributes**
    - **@ModelAttribute**
    - **@PathVariable**
    - **@PathParam**
    - **@ResponseBody**
    - **@RequestHeader**
    - **@CookieValue**
- **@RequestParam 和 @RequestBody 区别？**

    @RequestParam参数是一一对应的
    如：`{name:'sky',age:12}` 对应
    `@RequestParam("name") String name`和`@RequestParam("age") Integer age`

    @RequestBody参数是一个json字符串
    如：`{name:'sky',age:12}` 对应`@RequestBody User user`

- **@RequestParam、@PathVariable 和 @PathParam 的区别？**

    1. **@RequestParam**
    url：`/persons/get?id=1` `get`
    java:
    ```java
    @RequestMapping(value="/persons/get",,method=RequestMethod.GET)
    public String  getPersonById(@RequestParam("id") String id){
       ...
    }

    ```
    2. **@PathParam**
    url:`/persons/get?id=1` `get`
    java:
    ```java
    @RequestMapping(value="/persons/get",,method=RequestMethod.GET)
    public String  getPersonById(@RequestParam("id") String id){
       ...
    }
    ```
    3. **@PathVariable**
    url: `/persons/2`   `get`
    java:
    ```java
    @RequestMapping(value="/persons/{id}",,method=RequestMethod.GET)
    public String  getPersonById(@PathVariable("id") String id){
       ...
    }
    ```
    > 经过上面的分析，可以看出`@PathParam`与`@RequestParam`的都可以解析url中的参数，但是前者只能获取get提交方式的url中？后面的参数，post提交的参数只能使用@RequestParam获取；`@PathVaraiable`可以获取路径中的数据

