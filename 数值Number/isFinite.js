console.log(Number.isFinite(1));           // true
console.log(Number.isFinite(0.1));         // true
console.log(Number.isFinite(NaN));         // false
console.log(Number.isFinite(Infinity));    // false
console.log(Number.isFinite(-Infinity));   // false
console.log(Number.isFinite('a'));         // false
console.log(Number.isFinite('1'));         // false
console.log(Number.isFinite(true));        // false
