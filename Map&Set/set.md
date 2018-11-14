# Set( )
## 基本属性
* 类似数组只有值value，没有键key
* 通过构造函数的方式创建一个Set实例
* 参数是一个数组或者是是一个有`iterable`接口的(数组，arguments，元素集合，Set，Map，字符串)
```
let a = new Set()
console.log(a); // Set{}

let b = new Set([1,2,3,4])
console.log(b); // Set { 1, 2, 3, 4 }

let c = new Set('1234')
console.log(c); // Set { 1, 2, 3, 4 }

function fn (){
    console.log(new Set(arguments));
}

fn(1,2,3,4) // Set { 1, 2, 3, 4 }
```
* set结构不会添加重复的值
* 去除数据中的重复成员
```
let e = new Set([1,1,1,1,1,1,1])
console.log(e); // Set { 1 }
```
##### 在set中
1. NAN是相等得
2. ‘‘空对象是不想等的

##### set属性
1. `size`
 * set的成员总数

##### set方法
1. add(value)
* 返回set实例本身（）可以实现链式写法
* 如果之前有则不会增加

2. delete(value)
* 返回一个boolean

3. has(value) 返回一个布尔值
* 返回一个布尔值
4. clear()
* 没有返回值

##### 将Set结构转换为数组
```
const items = new Set([1,2,3]);
const Array = Array.from(items);
```
> 去除数组中重复数据的方法
```
function removeSameItem(arr) {
    return Array.from(new Set(array))
}
```

##### Set遍历操作
1. keys() 返回键名
2. values() 返回键值
3. entries() 返回键值对
4. forEach() 遍历每个成员并且返回回掉函数

```
let set = new Set([1,2,3])
for (let item of set.keys()){
    console.log(item)
}
for (let item of set.values()){
    console.log(item)
}
for (let item of set.entries()){
    console.log(item)
}
set.forEach(
    (item, key, array) => {
        console.log(`item * 2 = ${item * 2}`)
        console.log(`key : key`)
        console.log(array)
    }
)
```
##### map filter 的方法也可以用于Set
```
let set = new Set([1,2,3])
[...set].map(x => x*2)
```

##### Set实现差集（Difference）、交集（Intersect）、并集（Union）
```
let a = new Set([1,2,3])
let b = new Set([2,3,4])

//并集
let union = new Set([...a,...b])

//交集
let intersect = new Set([...a].filter(x => b.has(x)))

//差集
let diffirent = new Set ([...a].filter(x => !b.has(x)))
```


