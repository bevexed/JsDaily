# async
### 基本属性
* async 函数默认返回一个Promise对象
```
async function getA(){
    // return 返回成功回调的参数res
    // 这里有错误就会被catch捕获到err
    return 'a'
}

getA().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
```

* 搭配await
    * await 是一个语法糖不用通过then就能拿到resolve或者reject参数
    * await 后面是一个promise实例，如果不是也会默认转为promise
    * await 直接让promise执行 返回执行时的参数
    * 先执行await异步执行之后才会执行之后的代码
```
let p = new Promise((resolve, reject) => {
    resolve("1")
})

async function getA(){
    console.log(await P)
}
```

