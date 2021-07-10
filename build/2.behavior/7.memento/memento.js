"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mementoInit = void 0;
/*
 * @Author: xuziyong
 * @Date: 2021-07-11 00:54:45
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 01:15:33
 * @Description: TODO
 */
var Memento = /** @class */ (function () {
    function Memento(s) {
        this.state = s;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    Memento.prototype.setState = function (s) {
        this.state = s;
    };
    return Memento;
}());
var Originator = /** @class */ (function () {
    function Originator() {
        this.state = '';
    }
    Originator.prototype.getState = function () {
        return this.state;
    };
    Originator.prototype.setState = function (s) {
        this.state = s;
    };
    Originator.prototype.createMemento = function () {
        return new Memento(this.state);
    };
    Originator.prototype.restoreMemento = function (m) {
        this.setState(m.getState());
    };
    return Originator;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker() {
    }
    Caretaker.prototype.getMemento = function () {
        return this.memento;
    };
    Caretaker.prototype.setMomento = function (m) {
        this.memento = m;
    };
    return Caretaker;
}());
var mementoInit = function () {
    var caretaker = new Caretaker();
    var originator = new Originator();
    originator.setState('测试状态1');
    console.log('第一次改变状态打印：', originator.getState());
    var memento1 = originator.createMemento();
    caretaker.setMomento(memento1);
    console.log('第一次记录状态打印：', originator.getState());
    originator.setState('测试状态2');
    console.log('第二次改变状态打印：', originator.getState());
    originator.restoreMemento(caretaker.getMemento());
    console.log('第一次恢复状态打印：', originator.getState());
    originator.setState('测试状态3');
    console.log('第三次改变状态打印：', originator.getState());
    originator.restoreMemento(caretaker.getMemento());
    console.log('第二次恢复状态打印：', originator.getState());
};
exports.mementoInit = mementoInit;
//# sourceMappingURL=memento.js.map