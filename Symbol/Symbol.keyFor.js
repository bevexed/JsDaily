let a = Symbol('a')

let b = Symbol.for('b')

let c = Symbol.keyFor(a)
let d = Symbol.keyFor(b)

console.log(c); // undefined
console.log(d); // b
