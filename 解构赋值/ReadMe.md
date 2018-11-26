# 解构赋值

## 数组
### 1.普通数组
> ```
> let arr = [1,2,3]
> let [x,y,z] = arr
> ```
### 2.设置默认值
> ```
> let [x , y = 1] = [1]
> ```
### 3.省略赋值
> ```
> let [ , , x] = [1,2,3]
> ```
### 4.不定参数赋值
> ```
>  let [x,y,...z] = [1,2,3,4,5]
> ```

## 对象
### 1.普通对象
> ```
> let {name,age} = {name:'li',age:18}
> ```
### 2.设置默认值
> ```
> let {x , y = 1} = {x: 1}
> ```

## 特殊赋值
* 函数的解构赋值
 ```
 function A([x,y,z=1]){}
 function B({x,y,z=1}){}
 function C({name='li',age=18} = {}){}
 function D({name,age}={name:'li',age:18}){}
 ```
* 嵌套赋值
```
let {name,[x,y]} = {name:'li',[1,2]}
```
* 字符串的解构赋值 (转换成类数组类型，必须有一个`length`属性)
```
let [x,y] = '12' // x = 1, y = 2
```
* 对象

```
let {a} = 1
let {b} = '1234'
```
## 用途
* 交换变量的值
```
 let x = 1;
 let y = 2;
 [x,y] = [y,x]
 ```

 * 从函数返回多个值
 ```
 // 返回数组
 function example(){
    return {1,2,3}
 }
 let [a,b,c] = example()

 // 返回对象
 function example(){
    return {
        x:1,
        y:2
    }
 }
 let{x,y} = example()
 ```

 * 函数参数的定义
 ```
// 参数是一组有序的值
 function([x,y,z]){...}
 f([1,2,3])

 // 参数是一组无序的值
 function({x,y,z}){...}
 f({x:1,y:2,z:3})
 ```

 * 提取JSON数据
 ```
 let jsonData = {
    id: 1,
    status: "ok",
    data: [1,2]
 }

 let {id,status,data:num} = jsonData

 console.log(id, status ,num) // 1,"ok",[1,2]
 ```

