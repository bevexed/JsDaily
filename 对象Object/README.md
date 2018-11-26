# 对象 Object
* 对象的简洁方式
```
let name = 'a'
let age = 10
let obj = {name，age}
```
## set & get
```
let obj = {
    _name:1,
    get name(){
        // 只要通过 obj获取 name属性就会触发这个函数
        // 可以通过 return返回值
        console.log('get被触发了');
        return this._name
    },
    set name(val){
        // 只要通过 obj给 name属性设置值就会触发这个函数
        console.log('set被触发了');
        // val 设置值
        this._name = val
    }
}

console.log(obj.name); // get被触发了 1
obj.name = 2 // set被触发了
console.log(obj.name); // 被触发了 2
```

## 方法
### Object()
 * 将参数转换成对象
```
console.log(Object(1));  // {Number: 1}
console.log(Object(true)); // {Boolean: true}
```
### Object.is()
* 判断两个一样的值是否相等，与严格运算符的行为基本一致
    * ES5中比较两个值是否相等，只有两个运算符：相等运算符`==`、严格运算符`===`
    * `==` 自动转换数据类型
    * `===` NaN不会等于自身
```
console.log(NaN === NaN); // false
console.log(-0 === 0); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is({},{})) // false
```
### Object.assign(obj1,obj2)
* 合并对象(将obj2，合并到obj1上，并返回obj1),将原对象的所有可枚举属性复制到目标对象上
* 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖全面的属性
* 如果只有一个参数，直接返回该参数
* 如果该参数不是对象，则默认转换成对象，然后返回
    * `undefined` 和 `null` 无法转换成对象，如归作为`首`参数可能报错，作为非首阐述传入则不会
* 其他类型的值（即数值、字符串、布尔值）不在首参数也不会报错。但是只有字符串会以数组的形式复制到目标对象
* 该方法实行的是潜复制，如果源对象的值是对象， 那么目标对象复制得到的是这个对象的引用，源目标对象的任何变化都会反映到目标对象上
```
let obj1 = {
    name: 'me'
}
let obj2 = {
    age: 10
}

Object.assign(obj1, obj2)

console.log(obj1);

// es7 中新增方法

let obj3 = {
    es7: true
}

let result = {...obj1, ...obj3}
console.log(result);
```
* 用途:
    * 为对象添加属性
    ```
    class Point(){
        constructor(x,y){
            Object.assign(this, {x, y})
        }
    }
    ```
    * 为对象添加方法
    ```
    Object.assign(SomeClass.prototype,{
        someMethod(arg1,arg2){
            ...
        },
        anotherMethod(){
            ...
        }
    })
    ```

   * 克隆对象
   ```
   // 只能克隆原始对象的值，不能克隆他继承的值
   function clone(origin){
        return Object.assign({}, origin)
   }

   // 可以保持继承链的克隆
   function propertyClone(origin){
        let originProto = Object.getPropertyOf(origin)
        return Object.assign(Object.create(originProto), origin)
   }
   ```

   * 为属性指定默认值 （有风险，慎用）
   ```
   const DEFAULTS = {
        logLevel: 0,
        outputFormat: 'html'
   }

   function processContent(options){
        options = Object.assign({}, DEFAULT, options);
   }
   ```
### Object.getOwnPropertyDescriptor()
* 获取一个对象某个属性的描述
```
console.log(Object.getOwnPropertyDescriptor('12345', 'length'));
// {
//   value: 5,
//   writable: false, 是否可修改
//   enumerable: false, 是否可枚举
//   configurable: false 是否可配置
// }
```
* 描述对象的enumerable(可枚举属性)，如果为false，就表示某些操作会忽略当前属性
    * ES5中有3个操作会忽略enumerable为false的属性
        1. for...in循环：只遍历对象自身的和继承的可枚举属性
        2. Object.keys()：返回对象自身的所有可枚举属性的键名
        3. JSON.stringify()：只串行化对象自身的可枚举属性
    * ES6中有1个操作会忽略enumerable为false的属性
        1.Object.assign()：复制对象自身的可枚举属性
    * 尽量用`Object.key()`代替`for...in循环`
### \_proto_
* 用来读取或设置当前对象的prototype对象
* 尽量不要使用该方法，使用替代方法
    * Object.create() // 生成
    * Object.getPropertyOf() // 读操作
    * Object.setPropertyOf() // 写操作
### Object.setPropertyOf()
* Object.setPropertyOf(object, prototype)
```
let proto = {}
let obj = {x: 1}
Object.setPrototypeOf(obj, proto)
proto.y = 2
proto.z = 3

console.log(obj.x) // 1
console.log(obj.y) // 2
console.log(obj.z) // 3
```
* Object.setPropertyOf 方法的作用与 _proto_ 相同，用来设置一个对象的prototype对象，返回参数对象本身

### Object.keys()
* 返回值 => 数组(包含所有可枚举的的键值)
```
let obj = {
    a: 1,
    b: 2
}
console.log(Object.keys(obj)); // [ 'a', 'b' ]
```

### Object.values()
* 返回值 => 数组(包含所有可枚举属性的属性)
```
let obj = {
    a: 1,
    b: 2
}
console.log(Object.values(obj)); // [ 1, 2 ]
```
### Object.entries()
* 返回值 => 二维数组(每一项也是一个数组)
```
let obj = {
    a:1,
    b:2
}
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ] ]
```

### 属性遍历
> ES6 一共有5种方法遍历对象的属性
   * 以下5种方法遍历对象的属性时都遵循同样的属性遍历次序规则
        * 首先遍历所有属性名为数值的属性，安数字排序
        * 其次遍历所有属性名为字符串的属性，按照生成时间排序
        * 最后遍历所有属性名为Symbol值得属性，按照生成时间排序

   1. for..in
       * 循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)
   2. Object.keys(obj)
       * 返回一个数组，包含对象自身（不含继承的）所有可枚举属性(不含Symbol属性)
   3. Object.getOwnPropertyNames(obj)
       * 返回一个数组，包含对象自身的所有属性（不含Symbol属性，包含可枚举属性）
   4. Object.getOwnPropertySymbol(obj)
       * 返回一个数组，包含对象自身的所有Symbol属性
   5. Reflect.ownKeys(obj)
       * 返回一个数组，包含对象自身的所有属性，不管属性名是Symbol还是字符串，也不管是否可以枚举

### `?.` Null传导运算符
* 只要有一个返回null或undefined，就停止继续运算，并且返回undefined
```
// 读取m.b.u.f
const a = {m && m.b && m.b.u && m.b.u.f || 'default'}

// 新方法
const a = {m?.b?.u?.f}

a?.b = 43 // 如果a为undefined或null本语句失效，否则a.b = 43
delete a?.b  // 如果a为undefined或null本语句失效，否则删除a.b = 43
```



