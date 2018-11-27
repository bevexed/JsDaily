# Promise
### 基本特性
 * Promise是一个对象，从他可以获取异步操作的消息；
 * Promise的特点：
    * 对象的状态不受外界的影响。
        1. 有Pending（行进中）
        2. Fulfilled（已成功）
        3. Rejected（失败）
    * 一旦状态改变就不会再次改变，任何时候都可以得到这个结果。且只有两种状态
        * Pending -> Fulfilled
        * Pending -> Rejected
    * 一旦新建立就会立即执行，无法中途取消
    * 如果不设置回调函数,Promise内部抛出的错误不会反映到外部
    * 当Promise处于pending状态时，无法得知事件进展到哪一步

### 基本用法
 * Promise对象是一个构造函数，用来生成Promise实例
 * Promise 实例生成后，可以用 then 方法分别指定Resolved和Rejected状态的回掉函数
    * resolve : 将Promise对象的状态从"未完成"(Pending)变为"成功"(Resolved)，在异步操作成功时调用，并将异步调用的结果作为参数传递出去
    * reject  : 将Promise对象的状态从"未完成"(Pending)变为"失败"(Rejected)，在异步操作失败时调用，并将异步调用的结果作为参数传递出去
    * 最好在 resolve 和 reject 函数前加 return , 以终结Promise函数的执行
 * then 方法接收两个回调函数作为参数：
    * 第一个回调函数是Promise对象的状态变为Resolved时调用
    * 第二个回调函数是Promise对象的状态变为Rejected时调用
    * 第二个函数是可选的，不一定需要提供
    * then方法返回一个新的Promise对象(不是源Promise实例)，因此可以采用链式写法
 ```
 let promise = new Promise((resolve, reject) => {
     //...some code
     if (a) {
         resolve(value) //value => 异步成功的结果
     } else {
         reject(error) //error => 失败的结果
     }

 })

 // 回掉只执行一个
 // 回调是异步的，最后执行
 // 先执行new Promise中的函数 => 然后执行当前队列中的同步代码 => 最后执行then中的回调

 promise.then((value) => {
    //resolve => success
 }, (error) => {
      // 如果new Promise中有错误，就会执行then中的第二个回掉（reject），并且将错误信息传递个函数
     //reject => failure
 })

 // promise.all([])
 // promise.race


 console.log('ok')
 ```

* catch 捕获异常
    * 当Promise对象的状态变为Resolved时，会调用 then 方法指定的回调的函数
    * 当Promise状态变为Resolved时，再抛出错误是无效的
    * Promise对象的错误具有“冒泡”性质，会一直向后传递，知道被捕获为止，也就是说，错误总会被下一个catch语句捕获
    * 如果异步操作抛出错误，状态变为 Rejected ,会调用 catch 方法指定的调函数处理这个错误
    * then 方法指定的回调函数如果在运行中抛出错误，也会被catch方法捕获
    ```
    let promise = new Promise((resolve, reject) => {
        //...some code
      if (a) {
          resolve(value) //value => 异步成功的结果
      } else {
          reject(error) //error => 失败的结果
      }

    })

    promise.then((value) => {
        //resolve => success
    }).catch( (error) => {

    })
    ```
* all
    * 接收一个数组，每一项都是一个Promise对象
    * 数组中所有的Promise都成功才会走成功的回调
    * 只要有一个错误就会走错误的回调
    ```
    let p1 = new Promise((resolve, reject)=>{
        resolve('Ok')
    })
    let p2 = new Promise((resolve, reject)=>{
        resolve('Ok')
    })
    let p3 = new Promise((resolve, reject)=>{
        resolve('Ok')
    })

    let pAll = Promise.all([p1,p2,p3])
    pAll.then((res)=>{
        console.log(res)
    }).catch((e)=>{
        console.log(e)
    })
    ```
* race
    * 接收一个数组，每一项都是一个Promise对象
    * 只要有一个状态改变，实例状态就跟着改变 (无论成功还是失败)
    ```
     let p1 = new Promise((resolve, reject)=>{
            resolve('Ok')
        })
        let p2 = new Promise((resolve, reject)=>{
            resolve('Ok')
        })
        let p3 = new Promise((resolve, reject)=>{
            resolve('Ok')
        })

        let pRace = Promise.race([p1,p2,p3])
        pRace.then((res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
    ```
