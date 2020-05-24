/**
 * 在面向对象的编程中，class 是用于创建对象的可扩展的程序代码模版，
 * 它为对象提供了状态（成员变量）的初始值和行为（成员函数或方法）的实现。
 */

class User {
    // new 会自动调用 constructor() 方法，因此我们可以在 constructor() 中初始化对象。
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return
        }
        this._name = value;
    }

    sayHi() {
        alert(`Hello` + this.name)
    }
}

let user = new User("John");
user.sayHi();
// 在 JavaScript 中，类是一种函数。
console.log(typeof User); //function

/********************************************************************************************/

// 用纯函数重写 class User

// 1. 创建构造器函数
function User(name) {
    this.name = name;
}
// 任何函数原型默认都具有构造器属性，
// 所以，我们不需要创建它

// 2. 将方法添加到原型
User.prototype.sayHi = function() {
    alert(this.name);
};

// 用法：
let user = new User("John");
user.sayHi();

/********************************************************************************************/

class MyClass {
    prop = value; // 属性

    constructor　() { // 构造器
        // ...
    }

    method() {} // method

    get something() {} // getter 方法
    set something() {} // setter 方法

    [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
    // ...
}