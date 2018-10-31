# 字符串

## 方法
### 1. include
* include（“指定字符串”，开始查找的位置（可选））
* 判断字符串中有没有指定字符，返回`布尔值`
### 2. startWith & endWidth
* 判断字符串中是不是以指定字符开头(结尾)，返回`布尔值`
* startWith("指定字符串"，开始查找的位置（可选）)
* endWith("指定字符串"，从前num个中查找（可选）)
### 3.repeat
* repeat(重复次数（自动向下取整，不可是负数或者Infinity）)
### 4. padStart & padEnd
* 按照指定字符串补全字符串的指定长度
* padStart（length，“指定字符串”）在`前面`补全
* padEnd（length，“指定字符串”）在`后面`补全

## 模板字符串
* 和普通字符串一样使用
```
let b = 4
let a = `123${b}`
```
