function f({x, y = 1}) {
    console.log(x, y)
}

f(1) // undefined 1
f({x: 1}) // 1 1
f({x: 1, y: 2}) // 1 2


function f1({x = 1, y = 2} = {}) {
    console.log([x, y]);
}

function f2({x, y} = {x: 1, y: 2}) {
    console.log([x, y]);
}

// 都没有参数
f1() // [1,2]
f2() // [1,2]

// x,y 都有值
f1({x:3,y:8}) // [3,8]
f2({x:3,y:8}) // [3,8]

// x 有值 ，y 无值
f1({x:3}) // [3,2]
f2({x:3}) // [3,undefined]

// x 和 y 有无值得情况
f1({}) // [1,2]
f2({}) // [undefined,undefined]
