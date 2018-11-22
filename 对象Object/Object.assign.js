let obj1 = {
    name: 'me'
}
let obj2 = {
    age: 10
}

Object.assign(obj1, obj2)

console.log(obj1);

// es7 中新增方法

let obj3 = {
    es7: true
}

let result = {...obj1, ...obj3}
console.log(result);
