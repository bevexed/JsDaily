# Map & Set
### map
>  是一组键值对的结构，具有极快的查找速度
>  初始化Map需要一个二维数组，或者直接初始化一个空Map
```
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
```
> 初始化Map需要一个二维数组，或者直接初始化一个空Map。Map具有以下方法：
```
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
```
> 由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉
```
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88
```