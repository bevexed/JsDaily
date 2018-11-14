# Symbol
## 基本属性
* 基本数据类型，并且是一个值类型
* 使用 Symbol函数执行得到一个Symbol数据类型
* Symbol 不是一个构造函数，不可以new
* 任何两个Symbol值都是不想等的
* Symbol值不能计算
* Symbol不可以转数字(不能使用`Number()`方法)
* Symbol可以转字符串(能使用`toString()`方法变成显示字符串)
* Symbol可以转为布尔值
```
let a = Symbol()
let b = Symbol()

console.log(typeof Symbol);  // function
console.log(typeof a);  // symbol
console.log(a);  // Symbol()
console.log(b);  // Symbol()
console.log(a === b);  // false

let c = Symbol('c');
let d = Symbol('c');
console.log(c); // Symbol(c)
console.log(d); // Symbol(c)
console.log(c === d); // false

let e = Symbol('e')
console.log(e.toString()); // Symbol(e)
```

## 方法
### Symbol.for()
* 如果之前有相同参数的Symbol的值，找到这个值并返回，<br>
如果没有就创建一个新的Symbol值
* 使用Symbol.for() 创建的值，参数相同值就相同
```
let c = Symbol('a')

let a = Symbol.for('a')
let b = Symbol.for('a')
console.log(a === c); // false
console.log(a === b); // true
```
### Symbol.keyFor()
* 只能找到使用Symbol.for创建值的描述
* 不能找到使用Symbol()创建值的描述
```
let a = Symbol('a')

let b = Symbol.for('b')

let c = Symbol.keyFor(a)
let d = Symbol.keyFor(b)

console.log(c); // undefined
console.log(d); // b
```

