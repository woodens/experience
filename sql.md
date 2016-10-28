##  数据库 SQL

### 三范式
- 第一范式：具有原子性（数据库表中的所有字段值都是不可分解的原子值）
- 第二范式：主键列与非主键列遵循完全函数依赖关系（在一个数据库表中，一个表中只能保存一种数据，不可以把多种数据保存在同一张数据库表中）
- 第三范式：非主键列之间没有传递函数依赖关系（每一列数据都和主键直接相关，而不能间接相关）

### 执行顺序
- from
- join on
- where
- group by
- having
- select
- distinct
- order by
- limit