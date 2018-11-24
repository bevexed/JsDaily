let a = new Set()
console.log(a);

let b = new Set([1,2,3,4])
console.log(b); // Set { 1, 2, 3, 4 }

let c = new Set('1234')
console.log(c); // Set { 1, 2, 3, 4 }

function fn (){
    console.log(new Set(arguments));
}

fn(1,2,3,4) // Set { 1, 2, 3, 4 }

let e = new Set([1,1,1,1,1,1,1])
console.log(e); // Set { 1 }


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
