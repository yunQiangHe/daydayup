/*
 * @Author: heyunqiang
 * @Date: 2020-05-20 21:51:45
 * @Last Modified by: yunqinagHe
 * @Last Modified time: 2020-05-20 22:07:02
 */

// 手把手教你项目中使用：JavaScript设计模式

/**
 *   策略模式
 *      假设我们有一个要求，当用户试图打开一个页面时，只有满足以下条件才能看到正确的内容：
 *      该用户是该站点的注册用户
 *      用户等级不小于1
 *      用户必须是前端开发工程师
 *      用户类型是活跃用户
 */

// 许多新手程序员
function checkAuth(data) {
    if (data.role !== 'registered') {
        console.log('如果没用注册');
        return false;
    }
    if (data.grade < 1) {
        console.log("用户级别小于1");
        return false;
    }
    if (data.job !== 'FE') {
        console.log('用户不是前端开发工程师');
        return false;
    }
    if (data.type !== 'active user') {
        console.log('用户不是活动用户');
        return false;
    }
}
/**
 * 明显存在几个问题
 *      checkAuth函数代码臃肿
 *      每个判断功能都不能重用
 *      违反开闭原则
 * 让我们使用策略模式来改进先前的代码
 */

const jobList = ['FE', 'BE'];
const strategies = {
    checkRole: function(value) {
        if (value === 'registered') {
            return true;
        }
        return false;
    },
    checkGrade: function(value) {
        if (value >= 1) {
            return true;
        }
        return false;
    },
    checkJob: function(value) {
        if (jobList.indexOf(value) > 1) {
            return true;
        }
        return false;
    },
    checkType: function(value) {
        if (value === 'active user') {
            return true;
        }
        return false;
    }
};
/*
当您负责的模块基本满足以下条件时，您可以考虑使用策略模式来优化代码。
每个判断条件下的策略都是独立且可重用的
该策略的内部逻辑相对复杂
策略需要灵活组合
*/