"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-10 23:37:54
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 00:50:54
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.observerInit = void 0;
var ConcreteObserver1 = /** @class */ (function () {
    function ConcreteObserver1() {
    }
    ConcreteObserver1.prototype.update = function () {
        console.log('ConcreteObserver1 发生 update');
    };
    return ConcreteObserver1;
}());
var ConcreteObserver2 = /** @class */ (function () {
    function ConcreteObserver2() {
    }
    ConcreteObserver2.prototype.update = function () {
        console.log('ConcreteObserver2 发生 update');
    };
    return ConcreteObserver2;
}());
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.obsList = new Set();
    }
    ConcreteSubject.prototype.attach = function (obs) {
        this.obsList.add(obs);
    };
    ConcreteSubject.prototype.detach = function (obs) {
        this.obsList.delete(obs);
    };
    ConcreteSubject.prototype.notify = function () {
        this.obsList.forEach(function (obs) {
            obs.update();
        });
    };
    return ConcreteSubject;
}());
var observerInit = function () {
    var sub = new ConcreteSubject();
    var obs1 = new ConcreteObserver1();
    var obs2 = new ConcreteObserver2();
    sub.attach(obs1);
    sub.attach(obs2);
    sub.notify();
};
exports.observerInit = observerInit;
//# sourceMappingURL=observer.js.map