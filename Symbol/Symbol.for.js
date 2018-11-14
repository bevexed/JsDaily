let c = Symbol('a')

let a = Symbol.for('a')
let b = Symbol.for('a')
console.log(a === c); // false
console.log(a === b); // true
