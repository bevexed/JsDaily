let arr = [1,2,3];
arr.map((a,b,c,d) =>
    console.log(`a:${a},b:${b},c:${c},d:${d}`)
)
// a:1,b:0,c:1,2,3,d:undefined
// a:2,b:1,c:1,2,3,d:undefined
// a:3,b:2,c:1,2,3,d:undefined