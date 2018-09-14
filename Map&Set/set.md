# set
> set结构不会添加重复的值
* 去除数据中的重复成员
```
[...new Set(array)]
```
##### 在set中
1. NAN是相等得
2. ‘‘空对象是不想等的

##### set属性
1. size set的成员总数

##### set方法
1. add(value) 返回set本身
2. delete(value) 返回一个boolean
3. has(value) 返回一个布尔值
4. clear()

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


