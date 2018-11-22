# Number
## 方法
* isFinite
    * 检测一个值是否有限
    ```
    console.log(Number.isFinite(1));           // true
    console.log(Number.isFinite(0.1));         // true
    console.log(Number.isFinite(NaN));         // false
    console.log(Number.isFinite(Infinity));    // false
    console.log(Number.isFinite(-Infinity));   // false
    console.log(Number.isFinite('a'));         // false
    console.log(Number.isFinite('1'));         // false
    console.log(Number.isFinite(true));        // false
    ```

* isNaN
    * 检测一个值是否是NaN
    ```
    console.log(Number.isNaN(1));           // true
    console.log(Number.isNaN(0.1));         // true
    console.log(Number.isNaN(NaN));         // false
    console.log(Number.isNaN(Infinity));    // false
    console.log(Number.isNaN(-Infinity));   // false
    console.log(Number.isNaN('a'));         // false
    console.log(Number.isNaN('1'));         // false
    console.log(Number.isNaN(true));        // false
    ```

* parseInt
    * 解析一个字符串并返回整数
    * 可以接收两个参数，parseInt(string(必传), radix(解析数字的基数，默认为10))
    * 如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN。
    ```
    console.log(Number.parseInt('123'));    // 123
    console.log(Number.parseInt('a123'));   // NaN
    console.log(Number.parseInt('123a'));   // 123

    console.log(Number.parseInt('12',2));   // 1
    console.log(Number.parseInt('12',10));   // 12
    ```

* parseFloat
    * 解析一个字符串并返回一个浮点数
    * 只接受1个参数，parseFloat(string(必传), radix(解析数字的基数，默认为10))
    ```
   console.log(Number.parseFloat('123'));    // 123
   console.log(Number.parseFloat('a123'));   // NaN
   console.log(Number.parseFloat('123.11a'));   // 123.11

   console.log(Number.parseFloat('12',2));   // 12
   console.log(Number.parseFloat('12',10));   // 12
   ```

* isInteger
    * 判断一个值是否为整数，并返回一个布尔值
    * 在Javascript中整数和浮点数采用同样的储存方式，所以3和3.0被视为同一个值
    ```
    console.log(Number.isInteger(123));      // true
    console.log(Number.isInteger(123.00));   // true
    console.log(Number.isInteger(123.10));   // false
    console.log(Number.isInteger(123.1));    // false
    console.log(Number.isInteger('12'));     // false
    console.log(Number.isInteger(true));     // false
    ```

* EPSILON
    * Number.EPSILON 常量 约等于 2.220446049250313e-16
    * 用于检测误差
