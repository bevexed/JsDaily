let o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for (let k in o) {
    console.log(`${k} : ${o[k]}`)
}