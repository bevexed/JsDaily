# 函数
### 一般特性
* length
    * `形参的个数`
    * `形参`有默认值得时候，length会失真
    * 如果设置的默认值不是`尾参数`，length属性不在计入后边的参数
    ```
    function f1(x,y,z) {}
    function f2(x,y,z = 5) {}
    function f3(x,y,z) {}
    function f4(x =5,y,z) {}
    function f5(x,y=5,z) {}
    function f6(...arg) {}

    console.log(f1.length); // 3
    console.log(f2.length); // 2
    console.log(f3.length); // 3
    console.log(f4.length); // 0
    console.log(f5.length); // 1
    console.log(f6.length); // 0
    ```

* rest参数(类数组）
    * rest 后不能有其他参数，否则会报错
    ```
    function fn(..arg){
        console.log(arguments) //类数组 本质是一个对象
        console.log(arg) // 数组
    }
    ```

* 函数的名字 fn.name
    * 通过 `bind` 方法得到的新函数name 是 'bound 原来函数的名字'
    * 通过 `构造函数` 方法得到的新函数name 是 'anonymous'
    ```
    let str = '[{"name":"aaa"}，{"age":100}]'
    let arr = (new Function("return" + str))() // arr == [{"name":"aaa"}，{"age":100}]
    ```

* 默认值
    * 一般用法
    ```
    function f({x, y = 1}) {
        console.log(x, y)
    }

    f(1) // undefined 1
    f({x:1}) // 1 1
    f({x:1,y:2}) // 1 2
    ```
    * 两种写法以及区别
    ```
    function f1({x = 1, y = 2} = {}) {
        console.log([x, y]);
    }

    function f2({x, y} = {x: 1, y: 2}) {
        console.log([x, y]);
    }

    // 都没有参数
    f1() // [1,2]
    f2() // [1,2]

    // x,y 都有值
    f1({x:3,y:8}) // [3,8]
    f2({x:3,y:8}) // [3,8]

    // x 有值 ，y 无值
    f1({x:3}) // [3,2]
    f2({x:3}) // [3,undefined]

    // x 和 y 有无值得情况
    f1({}) // [1,2]
    f2({}) // [undefined,undefined]
    ```

    * 一般带有默认值的参数放在`最后`
    ```
    function (x = 1，y = 2){}
    ```
### 箭头函数
* 基本用法
    > let a = (x) => {return x}
    * 当剪头函数不需要参数或者需要多个参数时，就要使用圆括号代表阐述部分
    * 当剪头函数的代码块部分大于或多余一条语句时，就要使用大括号将其括起来，并使用return语句返回
    * 当剪头函数返回一个对象时必须在对象外加上大括号
        >  let a = x => ({ id, name : '1'})
    * 剪头函数可以与变量解构一起使用
        > let a = ({x,y}) => x+y //
* 注意事项
    * 函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象
        * 剪头函数可以让this指向固化，这种特性有利于封装回掉函数
    * 不可以用作构造函数
        * this指向的固化并不是因为剪头函数内部有绑定this的机制，实际上是因为剪头函数根本没有自己的this，导致内部的this就是外层代码块的this。就是因为没有this，所以不可用作构造函数
    * 不可以使用`arguments`对象，可以用`rest`参数代替
    * 不可以用`yield`命令，所以亦不可用作Generator函数
    * 箭头函数没有自己的this，所以不可以使用call(),apply(),bind()方法去改变this的指向

### 绑定this
* 函数绑定运算符 `::`
    * `::`双冒号左边是一个对象，右边是一个函数。
    * `::`会自动将左边的对象作为上下文环境（this对象）绑定到右边的函数上
    * `::`取代call、apply、bind调用
    ```
    foo::bar // bar.bind(foo)
    foo::bar(...arguments) // bar.apply(foo,arguments)
    ```
    * 如果`::`左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上
    ```
    let method = obj::obj.foo // let method = ::obj.foo
    let log = ::console.log // let log = console.log.bind(console)
    ```
    * `::`返回值为对象，所以可以采用链式写法
    ```
    document.querySelectorAll("div")
    ::find("p")
    ::html("2333")
    ```
### 尾调用 `Tail Call`
> 指某个函数的最后一步是调用另一个函数
*
