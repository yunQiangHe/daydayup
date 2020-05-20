/**
 * 发布-订阅模式
 * 阮一峰在《Javascript 异步编程的 4 种方法》
 * 我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。
 */

// 需求
//当用户成功完成一个应用程序时，后台需要触发相应的订单，消息和审核模块。

// 您将如何编码？许多程序员可能会这样写

function applySuccess() {
    // 通知消息中心获取最新内容
    MessageCenter.fetch();
    // 更新订单信息
    Order.update();
    // 通知负责人审核
    Checker.alert();
}

// 随着涉及到越来越多的模块，我们的代码变得越来越肿，难以维护。
// 那就是发布和订阅模型可以节省灾难的时候。

const EventEmit = function() {
    this.events = {};
    this.on = function(name, cb) {
        if (this.events[name]) {
            this.events[name].push(cb);
        } else {
            this.events[name] = [cb];
        }
    };
    this.trigger = function(name, ...arg) {
        if (this.events[name]) {
            this.events[name].forEach(eventListener => {
                eventListener(...arg);
            });
        }
    }
}

let event = new EventEmit();
MessageCenter.fetch() {
    event.on('success', () => {
        console.log('通知消息中心获取最新内容');
    });
};
Order.update() {
    event.on('success', () => {
        console.log('更新订单信息');
    });
}
Checker.alert() {
    event.on('success', () => {
        console.log('通知负责人审核');
    });
}
event.trigger('success');

// 所有事件彼此独立。我们可以随时添加，修改和删除事件，而不会影响其他模块。 当您负责一个基本满足以下条件的模块时，您可以考虑使用发布-订阅模式。