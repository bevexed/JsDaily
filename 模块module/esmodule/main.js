/*
    模块
    1. 第三方 (通过npm方式安装) 不用`./`
    2. 自定义的 加 `./`
    3. 使用解构赋值获取导出的内容
    4. import 存在变量提升
*/

// export 导出
import {a,b} from './1.js'    // 部分引入
import * as one from './1.js' // 全部引入

console.log(one);
console.log(a, b);


// export default 导出
import two from './2.js'

console.log(two);


