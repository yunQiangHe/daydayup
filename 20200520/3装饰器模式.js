/**
 * 装饰器模式
 */

// 正如任何了解React的人所知道的那样，高阶组件实际上只是一个函数。它接受一个组件作为参数并返回一个新的组件。 因此，让我们编写一个高阶组件HOC，并用它来装饰TargetComponent。
//Jon最初是说中文的人
const jonWrite = function() {
    this.writeChinese = function() {
        console.log('我只能写中文');
    };
};
//通过装饰器
const Decorator = function(old) {
    this.oldWrite = old.writeChinese;
    this.writeEnglish = function() {
        console.log('给他写英语的能力');
    };
    this.newWrite = function() {
        this.oldWrite();
        this.writeEnglish();
    };
};
const oldJonWrite = new jonWrite();
const decorator = new Decorator(oldJonWrite);
decorator.newWrite();


// 看起来已经满足了要求，但实际上，上述缺点非常大：

// 我们的购买过程可能会发生变化，例如添加库存检查过程。然后，您必须彻底更改原始代码，这很难维护代码设计。

// 在这一点上，我们可以考虑使用责任链模式。
const Chain = function(fn) {
    this.fn = fn;
    this.setNext = function() {}
    this.run = function() {}
}

const applyDevice = function() {}
const chainApplyDevice = new Chain(applyDevice);
const selectAddress = function() {

}
const chainSelectAddress = new Chain(selectAddress);
const selectChecker = function() {

}
const chainSelectChecker = new Chain(selectChecker);

chainApplyDevice.setNext(chainSelectAddress).setNext(chainSelectChecker);
chainApplyDevice.run();



// 当您负责的模块满足以下条件时，请考虑使用责任链模式。

// 每个过程的代码都可以重用
// 每个过程都有固定的执行顺序
// 每个过程都可以重组