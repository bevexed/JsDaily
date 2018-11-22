function f1(x,y,z) {}
function f2(x,y,z = 5) {}
function f3(x,y,z) {}
function f4(x =5,y,z) {}
function f5(x,y=5,z) {}
function f6(...arg) {}

console.log(f1.length); // 3
console.log(f2.length); // 2
console.log(f3.length); // 3
console.log(f4.length); // 0
console.log(f5.length); // 1
console.log(f6.length); // 0
