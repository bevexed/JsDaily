# 模块 module
### node 自带模块化 规范commonjs
* 定义模块
    * 三种
      * 一个js就是哟个模块
* 导入模块
    require
* 导出模块 module.export
### cmd sea.js  / amd require.js
### umd 做兼容处理
### ES6module ES6提供
* ES6的模块自动采用严格模式，不管有没有在模块头部上加“use strict”
* 严格模式下的使用限制
    * 变量必须声明后使用
    * 函数的参数不能有同名属性，否则报错
    * 不能使用with语句
    * 不能对只读属性赋值，否则报错
    * 不能使用前缀0表示八进制数，否则报错
    * 不能删除不可删除的属性，否则报错
    * 不能删除变量delete prop，会报错，只能删除属性delete global\[prop]
    * eval不会在他的外层作用域引入变量
    * eval和arguments不能被重新赋值
    * arguments 不会自动反映函数参数的变化
    * 不能使用arguments.callee
    * 不能使用arguments.caller
    *



* 定义模块
    * 一个JS就是一个模块
* 导出模块
    * export
* 引入模块
    * import
