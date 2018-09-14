let o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for (let k in o) {
    if (o.hasOwnProperty(key)) {
        console.log(`${k} : ${o[k]}`)
    }
}