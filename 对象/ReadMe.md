# 对象 Object
* 对象的简介方式
```
let name = 'a'
let age = 10
let obj = {name，age}
 ```
## Object()
 * 将参数转换成对象
```
console.log(Object(1));  // {Number: 1}
console.log(Object(true)); // {Boolean: true}
```
## Object.is()
* 判断两个值是否相等(===)
```
console.log(NaN === NaN); // false
console.log(-0 === 0); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
```
## Object.assign(obj1,obj2)
* 合并对象(将obj2，合并到obj1上，并返回obj1)
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
## Object.getOwnPropertyDescriptor()
* 获取一个对象某个属性的描述
```
console.log(Object.getOwnPropertyDescriptor('12345', 'length'));
// { value: 5,
//   writable: false, 是否可修改
//   enumerable: false, 是否可枚举
//   configurable: false 是否可配置
// }
```
## Object.keys()
* 返回值 => 数组(包含所有可枚举的的键值)
```
let obj = {
    a: 1,
    b: 2
}
console.log(Object.keys(obj)); // [ 'a', 'b' ]
```

## Object.values()
* 返回值 => 数组(包含所有可枚举属性的属性)
```
let obj = {
    a: 1,
    b: 2
}
console.log(Object.values(obj)); // [ 1, 2 ]
```


