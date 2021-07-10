"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediatorInit = void 0;
/*
 * @Author: xuziyong
 * @Date: 2021-07-10 22:23:45
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 23:27:10
 * @Description: TODO
 */
var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    return Mediator;
}());
var Colleague = /** @class */ (function () {
    function Colleague(m) {
        this.mediator = m;
    }
    Colleague.prototype.getMediator = function () {
        return this.mediator;
    };
    Colleague.prototype.setMediator = function (m) {
        this.mediator = m;
    };
    Colleague.prototype.change = function () { };
    return Colleague;
}());
var ConcreteColleague1 = /** @class */ (function (_super) {
    __extends(ConcreteColleague1, _super);
    function ConcreteColleague1(c) {
        var _this = _super.call(this, c) || this;
        _this.colleagueName = 'ConcreteColleague1';
        return _this;
    }
    ConcreteColleague1.prototype.action = function () {
        console.log(this.colleagueName + ' 正在反馈');
    };
    ConcreteColleague1.prototype.change = function () {
        this.getMediator().colleague1Changed(this);
    };
    return ConcreteColleague1;
}(Colleague));
var ConcreteColleague2 = /** @class */ (function (_super) {
    __extends(ConcreteColleague2, _super);
    function ConcreteColleague2(c) {
        var _this = _super.call(this, c) || this;
        _this.colleagueName = 'ConcreteColleague2';
        return _this;
    }
    ConcreteColleague2.prototype.action = function () {
        console.log(this.colleagueName + ' 正在反馈');
    };
    ConcreteColleague2.prototype.change = function () {
        this.getMediator().colleague2Changed(this);
    };
    return ConcreteColleague2;
}(Colleague));
var ConcreteMediator = /** @class */ (function (_super) {
    __extends(ConcreteMediator, _super);
    function ConcreteMediator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteMediator.prototype.colleague1Changed = function (c) {
        this.getC1().action();
        this.getC2().action();
    };
    ConcreteMediator.prototype.colleague2Changed = function (c) {
        this.getC2().action();
    };
    ConcreteMediator.prototype.createColleague1 = function () {
        var c1 = new ConcreteColleague1(this);
        this.setC1(c1);
        return c1;
    };
    ConcreteMediator.prototype.createColleague2 = function () {
        var c2 = new ConcreteColleague2(this);
        this.setC2(c2);
        return c2;
    };
    ConcreteMediator.prototype.setC1 = function (c) {
        this.c1 = c;
    };
    ConcreteMediator.prototype.setC2 = function (c) {
        this.c2 = c;
    };
    ConcreteMediator.prototype.getC1 = function () {
        return this.c1;
    };
    ConcreteMediator.prototype.getC2 = function () {
        return this.c2;
    };
    return ConcreteMediator;
}(Mediator));
var mediatorInit = function () {
    var concreteMediator = new ConcreteMediator();
    var colleague1 = concreteMediator.createColleague1();
    var colleague2 = concreteMediator.createColleague2();
    console.log('colleague1发起change');
    colleague1.change();
    console.log('colleague1发起change结束');
    console.log('colleague2发起change');
    colleague2.change();
    console.log('colleague2发起change结束');
};
exports.mediatorInit = mediatorInit;
//# sourceMappingURL=mediator.js.map