# Class
### constructor
* 每一个类中都有一个构造器
* 如果没有手动指定构造器，会自动创建一个隐形的看不见的空构造器，类似于 constructor(){}
* 构造器的作用，就是每当 new 这个类的时候 ，必须优先执行构造器中的代码
    ```js
    // ES5
    function Fn(){
        this.x = 10
    }

    Fn.prototype.getX = function(){}
    let f = new Fn()

    // ES6
    class A{
        constructor (){
            constructor(x){}
            // 类的构造器
            // this 当前实例
            this.x = x // 增加私有属性

            // return 的是基本数据类型，对实例没有影响，如果是引用数据类型，会改变当前实例
        }
    }
    ```

### class的name
```js
let A = class AA{
    // AA 只能在类里面使用 类的name
    constructor(){
        console.log(AA.name)
    }
    getA(){
        console.log(AA.name)
    }
}
let a = new AA() // 不能使用AA
let a = new A() //
a.getA() // AA
```

### class 执行
```js
// ES5
function BB(name){
    this.name = name
}
let bb = new BB("B")

class AA{
    constructor(name){
        this.name = name
    }
}
let aa = new AA("A")

// 采用表达式让类直接执行
let a1 = new class{
    constructor(name){
        console.log(name)
    }
}("a1")
```

### class 变量提升
```js
// ES5 存在变量提升
FF();
new FF()
function FF(){
    this.f = "ff"
}

// ES6 中的class 和 let 、const 一样 没有变量提升

class GG{
    constructor(){
        this.gg = "gg"
    }
}
```

### 静态方法
* 类就相当于原型，写在原型上的方法都会都被实例继承
* 在方法前加static关键字后，该方法只有类本身可以使用
* 静态方法可以被子类继承
```js
class AA{
    constructor (){
        this.a == "aa"
    }
    getA(){
        console.log('a')
    }
    static getB(){
        console.log('B')
    }
}

let aa = new AA;
aa.getA() // g
console.log(aa.getB) // undefined
AA.getB() // B 静态方法只有类本身可以使用

// 静态方法可以被子类继承
class F{
    static getF (){
        console.log("我是F的getF")
    }
}
class G extends F{
    // 可以省略不写
    // constructor(){
    //     super()
    // }
    static getF(){
        super.getF()
    }
}

G.getF()
```

### 继承

```js
// ES6
class A{
    constructor(x){
        this.x = x
    }
    getX(){
        console.log(this.x)
    }
    static getY(){
        console.log(this)
    }
}

class B extends A{
    constructor(){
        // 子类没有this
        // this 继承于父类
        // super执行玩才会有this
        // 不可以在super之前使用this
        super()
        this.y = 100
    }
    getX(){
        // super 指向父类A的 原型
        super.getX()
    }
    // static 父类的静态/私有方法也可以继承
    static getY(){
       // super 指向 父类本身
       super.getY()
    }
}

let b = new B("b")
b.getX()
```
















