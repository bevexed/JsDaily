# 字符串

## 方法
### include
  * include（“指定字符串”，开始查找的位置（可选））
  * 判断字符串中有没有指定字符，返回`布尔值`
  
### startWith & endWidth
  * 判断字符串中是不是以指定字符开头(结尾)，返回`布尔值`
  * startWith("指定字符串"，开始查找的位置（可选）)
  * endWith("指定字符串"，从前num个中查找（可选）)
  
### repeat
  * repeat(重复次数（自动向下取整，不可是负数或者Infinity）)
  
### padStart & padEnd
  * 按照指定字符串补全字符串的指定长度
  * padStart（length，“指定字符串”）在`前面`补全
  * padEnd（length，“指定字符串”）在`后面`补全
  
### chatAt
  - string.chatAt('指定位置')
  - 返回指定位置的字符串
  - 参数不在`0 - string.length`之间，返回一个空字符串
  - 不可以识别码点大于 `oxFFFF` 的字符

### at()
  * 返回字符串给定位置的字符
  - 可以识别码点大于 `oxFFFF` 的字符
  ```
  'abc'.at(1) // 'b'
  ```
  
 
## 模板字符串

### 和普通字符串一样使用
```
let b = 4
let a = `123${b}`
```

### 标签模板
- 跟随在一个函数名后，该函数处理这个模板字符串
```javascript
alert`123`  // alert(123)
```

- 提取字符串中的`变量`
```javascript
function tag(s, v1, v2, v3) {
  console.log(0, s[0]);   // 0 'Hello '
  console.log(1, s[1]);   // 1 ' world '
  console.log(2, s[2]);   // 2 ' v3 '
  console.log(v1);        // 11
  console.log(v2);        // 30
  console.log(v3);        // -1
}

const a = 5;
const b = 6;

tag`Hello ${a + b} world ${a * b} v3 ${a - b}`;
```

## 字符串遍历接口
```
for(let i of 'string'){
    console.log(i)
}
// 's','t','r','i','n','g'
```

