let a = Symbol()
let b = Symbol()

console.log(typeof Symbol);  // function
console.log(typeof a);  // symbol
console.log(a);  // Symbol()
console.log(b);  // Symbol()
console.log(a === b);  // false

let c = Symbol('c');
let d = Symbol('c');
console.log(c); // Symbol(c)
console.log(d); // Symbol(c)
console.log(c === d); // false

let e = Symbol('e')
console.log(e.toString()); // Symbol(e)


