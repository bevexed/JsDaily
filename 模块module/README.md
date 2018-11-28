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
    * 禁止this指向全局对象
    * 不能使用fn.caller和fn.arguments获取函数调用的堆栈
    * 增加保留字
* 定义模块
    * 一个JS就是一个模块
* 导出模块 `export`
    * 不能直接导出变量，应该以对象的形式导出变量
    * export 命令不可出现在块级作用域内
    * export 语句输出的接口与其对应的值是动态绑定关系，即通过该接口取到模块内部实时的值
    * 正确用法
    ```
    // 方法一
        export var m = 1
    // 方法二
        var m = 1
        export {m}
    // var n = 1
        export {n as m}
    ```
    * 错误写法
    ```
    var m = 1
    export m // 不能直接导出变量

    export 1 // 不能直接导出值
    ```
* 引入模块 `import`
    * import 命令具有提升效果,会提升到整个模块的头部并首先执行
    * import 是静态执行，所以不能使用表达式或者变量
* export default
    * 指定模块的默认输出
    * 一个模块只能用一次
    * 后面不能跟声明语句
    ```
    // 正确
    var a = 1
    export default a

    // 错误
    export default var a = 1
    ```
    * 可以直接输出值
    ```
    export default 1
    ```
