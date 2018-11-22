console.log(Number.isNaN(1));           // true
console.log(Number.isNaN(0.1));         // true
console.log(Number.isNaN(NaN));         // false
console.log(Number.isNaN(Infinity));    // false
console.log(Number.isNaN(-Infinity));   // false
console.log(Number.isNaN('a'));         // false
console.log(Number.isNaN('1'));         // false
console.log(Number.isNaN(true));        // false
