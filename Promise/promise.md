# Promise
### 基本特性
 1. Promise是一个对象，从他可以获取异步操作的消息；
 2. Promise的特点：
 > * 对象的状态不受外界的影响。有Pending（行进中）、Fulfilled（已成功）、Rejected（失败）三种状态。
 > * 一旦状态改变就不会再次改变。且只有Pending->Fulfilled、Pending->Rejected两种可能

### 基本用法
 1. Promise对象是一个构造函数，用来生成Promise实例
 ```
 let promise = new Promise((resolve, reject) => {
     //...some code
     if (a) {
         resolve(value) //value => 异步成功的结果
     } else {
         reject(error) //error => 失败的结果
     }

 })
 ```
 2. Promise 实例生成后，可以用 then 方法分别指定Resolved和Rejected状态的回掉函数
 ```
 promise.then((value) => {
    //success
 }, (error) => {
     //failure
 })
 ```