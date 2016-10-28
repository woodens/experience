- 常见注解
    
    - **@Controller**
    
    - **@RequestMapping**
    - **@RequestParam**
    - **@SessionAttributes**
    - **@ModelAttribute**
    - **@PathVariable**
    - **@ResponseBody**
    - **@RequestHeader**
    - **@CookieValue**
- @RequestParam 和 @RequestBody 区别？
    
    @RequestParam参数是一一对应的 
    如：`{name:'sky',age:12}` 对应
    `@RequestParam("name") String name`和`@RequestParam("age") Integer age`
    
    @RequestBody参数是一个json字符串
    如：`{name:'sky',age:12}` 对应`@RequestBody User user`
    
