class Animal {
    // 类的构造器
    /*
        1.每一个类中都有一个构造器
        2.如果没有手动指定构造器，会自动创建一个隐形的看不见的空构造器，类似于 constructor(){}
        3.构造器的作用，就是每当 new 这个类的时候 ，必须优先执行构造器中的代码
    */
    constructor(name,age) {
        // 通过this的属性 => 实例属性
        this.name = name
        this.age = age
    }
    //在 class 内部， 通过 static 修饰的属性 => 静态属性
    // static info = "eee"  //不好使

    //实例方法
    say(a){
        console.log(a)
    }
    
    //静态方法
    static see(a){
        console.log(a)
    }

}


/*
*【实例属性】：通过 new 出来的实例，访问到的属性
* 【静态属性】：通过 构造函数，直接访问到的属性
* */

console.log(Animal)

const a = new Animal('猫',2)
console.log(a)
console.log(a.name) //实例属性
console.log(Animal.info)//静态属性
Animal.see(12)//静态方法
a.say(123)//实例方法
