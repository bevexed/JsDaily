let obj = {
    _name:1,
    get name(){
        // 只要通过 obj获取 name属性就会触发这个函数
        // 可以通过 return返回值
        console.log('get被触发了');
        return this._name
    },
    set name(val){
        // 只要通过 obj给 name属性设置值就会触发这个函数
        console.log('set被触发了');
        // val 设置值
        this._name = val
    }
}

console.log(obj.name); // get被触发了 1
obj.name = 2 // set被触发了
console.log(obj.name); // 被触发了 2
