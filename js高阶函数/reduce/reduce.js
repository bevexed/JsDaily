let arr = [1,3,5]
let sum = arr.reduce((a,b)=>{return a+b})
console.log(sum)

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// total	必需。初始值, 或者计算结束后的返回值。
// currentValue	必需。当前元素
// currentIndex	可选。当前元素的索引
// arr	可选。当前元素所属的数组对象。
//initialValue	可选。传递给函数的初始值