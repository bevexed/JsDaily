console.log(Number.parseFloat('123'));    // 123
console.log(Number.parseFloat('a123'));   // NaN
console.log(Number.parseFloat('123.11a'));   // 123.11

console.log(Number.parseFloat('12',2));   // 12
console.log(Number.parseFloat('12',10));   // 12
