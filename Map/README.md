# Map
### 基本属性
*  通过构造函数方式创建一个Map实例
   * 初始化Map需要一个`二维数组`(参数是一个数组，数组的每一项也是一个数组（\[key,value]）），或者直接初始化一个空Map
    > new Map( \[ \[key,value] ] )
*  是一组键值对的结构，具有极快的查找速度
    ```
    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    m.get('Michael'); // 95
    ```
*  map的key可以是任意数据类型(对象，数组)
    * 对象的属性必须是字符串，如果不是字符串，默认转换成字符串
*  map属性值不能相同，否则会被覆盖
    ```
    var m = new Map();
    m.set('Adam', 67);
    m.set('Adam', 88);
    m.get('Adam'); // 88
    ```
### 基本方法：
* get
    * 根据key获取value
* set
    * 如果之前有过key，就修改value，如果之前没有就增加
    * 返回新的map实例(可以实现链式写法)
* has
    * 判断key是否有对应的value值
    * 返回一个布尔值
* delete
    * 删除属性值key
    * 返回一个布尔值，删除成功返回`true`
* clear
    * 清空一个map实例
    * 没有返回值
    ```
    var m = new Map(); // 空Map
    m.set('Adam', 67); // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam'); // 是否存在key 'Adam': true
    m.get('Adam'); // 67
    m.delete('Adam'); // 删除key 'Adam'
    m.get('Adam'); // undefined
    ```
### 遍历方法
* keys() 返回键名
* values() 返回键值
* entries() 返回键值对
* forEach() 遍历每个成员并且返回回掉函数

    ```
    let m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);

    for (let key of m.keys()){
            console.log(key)
    }
    for (let value of m.values()){
        console.log(value)
    }
    for (let [key,value] of m.entries()){
        console.log(key,value)
    }

    m.forEach((value, key, input) => {
        console.log(key); // key
        console.log(value); // value
        console.log(input); // map 实例
    })

    ```
### 应用
* 将一个数组变成Map实例
    ```
    let arr = [1,2,3,4]
    let map = new Map()
    for (let [index,item] of arr.entries()){
        map.set(index,item)
    }
    ```
