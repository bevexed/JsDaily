let cute = {name: "123", age: "26"}
let proxy1 = new Proxy(cute,{
    get(target,key,proxy){
        // console.log(target); // 目标对象
        // console.log(key); // 属性名
        // console.log(proxy) // proxy实例
        return "你好" //
    }
})
// get 只要是获取,就会触发get
// console.log(proxy1); // { name: '123', age: '26' }
console.log(proxy1.name); // 你好
