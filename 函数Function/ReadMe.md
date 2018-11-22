# 函数

### 1. 默认值
* 一般带有默认值的参数放在最后
```
function (x = 1，y = 2){}
```
### 2.length
* `形参的个数`
* `形参`有默认值得时候，length会失真
### 3.类数组
```
function fn(..arg){
    console.log(arguments) //类数组 本质是一个对象
    console.log(arg) // 数组
}
```
### 函数的名字 fn.name
* 通过 `bind` 方法得到的新函数name 是 'bound 原来函数的名字'
* 通过 `构造函数` 方法得到的新函数name 是 'anonymous'
```
let str = '[{"name":"珠峰"}，{"age":100}]'
let arr = (new Function("return" + str))() // arr == [{"name":"珠峰"}，{"age":100}]
```
