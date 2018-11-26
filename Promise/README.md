# Promise
### 基本特性
 * Promise是一个对象，从他可以获取异步操作的消息；
 * Promise的特点：
    * 对象的状态不受外界的影响。有Pending（行进中）、Fulfilled（已成功）、Rejected（失败）三种状态。
    * 一旦状态改变就不会再次改变。且只有Pending->Fulfilled、Pending->Rejected两种可能

### 基本用法
 * Promise对象是一个构造函数，用来生成Promise实例
 * Promise 实例生成后，可以用 then 方法分别指定Resolved和Rejected状态的回掉函数
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
