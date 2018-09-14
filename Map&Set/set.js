let s1 = new Set(); // 空Set
let s2 = new Set([1, 2, 3]); // 含1, 2, 3
let set = new Set([1,2,3])
for (let item of set.keys()){
    console.log(item)
}
for (let item of set.values()){
    console.log(item)
}
for (let item of set.entries()){
    console.log(item)
}
set.forEach(
    (item, key, array) => {
        console.log(`${item} * 2 = ${item * 2}`)
        console.log(`key : ${key}`)
        console.log(array)
    }
)