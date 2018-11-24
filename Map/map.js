let m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(m.get('Michael'));// 95

let map = new Map(); // 空Map
map.set('Adam', 67); // 添加新的key-value
map.set('Bob', 59);
map.has('Adam'); // 是否存在key 'Adam': true
map.get('Adam'); // 67
map.delete('Adam'); // 删除key 'Adam'
map.get('Adam'); // undefined

m.forEach((value, key, input) => {
    console.log(key); // key
    console.log(value); // value
    console.log(input); // map 实例
})
