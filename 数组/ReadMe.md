# 数组
 * ***`Array`*** 是一个函数 返回一个数组
 * ***`Array(x,y,z)`*** 将参数变成一个数组返回`[x,y,z]`
 * 只有一个`参数`，并且参数是`数字n`，返回长度位`n`的空数组
## 类扩展方法
### 1. Array.of( )
* 参数为`一个数字`的时候返回为只有`一个数字的数组`
### 2. Array.from( )
* Array.from(`数组/类数组`)，返回`数组`
```
let a = Array.from([1,2,3.4]) // a = [1,2,3,4]
let b = Array.from("123") // b = [1,2,3]
```
## 原型链上的方法
### 一般方法
#### 1. copyWithin
* 从原数组中读取内容 替换数组中`指定位置`的内容
* copyWithin([替换目标起始位置]，[查找起始位置], [查找的结束位置(不包括，不写默认到结束)])
* 会改变原数组，但是长度不变
```
let arr = [1,2,3,4,5,6,7,8]
let res = arr.copyWithin(4,2,4)  // res = [1,2,3,4,3,4,7,8]
```
#### 2. fill
* fill(['指定元素'],[开始位置],[结束位置])
* 将数组的每一项变成指定字符
#### 3. includes
* 查找数组中有没有某一项，返回`布尔值`
* include([指定元素]，[开始位置])

## 可遍历方法
* 除了`reduce`&`reduceRight`方法,其余方法的第一个参数是一个函数，这个函数中的this指向window，
可以通过第二参数的来改变第一个函数中this的指向
#### 1. filter
* 遍历数组，返回`true`的元素被保留
```
filter(function ([item],[index],[原数组]){ return })
```
#### 2. find
* 遍历数组，一旦返回`true`，停止查找，返回`当前项`
#### 3. findIndex
* 遍历数组，一旦返回`true`，停止查找，返回`当前项的索引`
#### 4. every
* 遍历数组，一旦返回`false`，停止遍历，返回`false`
#### 5. some
* 遍历数组，一旦返回`true`，停止遍历，返回`true`
#### 6. reduce
* 迭代
* reduce(function ([prev]，[item]){},[初始值])
```
let arr = [1,2,3,4]
arr.reduce(function (pre,item){
    // pre 上一次的返回值
    //item 当前项
    return pre+item
})
```
#### 7. reduceRight
* 和reduce一样只不过是从右边开始
#### 8. keys
* 遍历每一项`索引`的接口 使用for of 遍历
```
let arr = [1,2,3,4]
for(let key of arr.keys()){
    console.log(key) // 0,1,2,3
}
for(let key of arr){
    console.log(key) //1,2,3,4
}
```
#### 9. entries
* 遍历接口 可以遍历到索引和数组的每一项,每一次遍历得到一个数组`[索引，当前项]`
```
let arr = [1,2,3,4]
for(let a of arr){
    console.log(a); // [0,1],[1,2],[2,3],[3,4]
}
for(let [index,item] of arr){
    console.log(index,item); //
}
```




