"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-10 16:02:11
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 18:11:14
 * @Description: TODO
 */
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
exports.chainOfResponsibility = void 0;
var Handler = /** @class */ (function () {
    function Handler(target) {
        this.nextHandleTarget = null;
        this.setNextTarget(target);
    }
    Handler.prototype.getNextTarget = function () {
        return this.nextHandleTarget;
    };
    Handler.prototype.setNextTarget = function (target) {
        this.nextHandleTarget = target;
    };
    Handler.prototype.next = function (tag) {
        var nextTarget = this.getNextTarget();
        if (nextTarget !== null) {
            nextTarget.handle(tag);
        }
        else {
            console.log(tag, '责任链结束, 无符合项目');
        }
    };
    return Handler;
}());
var ConcreteHandler1 = /** @class */ (function (_super) {
    __extends(ConcreteHandler1, _super);
    function ConcreteHandler1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = '测试ConcreteHandler1';
        return _this;
    }
    ConcreteHandler1.prototype.handle = function (tag) {
        if (tag === this.tagName) {
            console.log("ConcreteHandler1 \u5B8C\u6210\u5904\u7406\uFF0C \"" + this.tagName + "}\" \u7B26\u5408");
        }
        else {
            console.log("\"" + this.tagName + "}\" \u4E0D\u7B26\u5408\uFF0C\u7EE7\u7EED\u4F20\u9012");
            this.next(tag);
        }
    };
    return ConcreteHandler1;
}(Handler));
var ConcreteHandler2 = /** @class */ (function (_super) {
    __extends(ConcreteHandler2, _super);
    function ConcreteHandler2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = '测试ConcreteHandler2';
        return _this;
    }
    ConcreteHandler2.prototype.handle = function (tag) {
        if (tag === this.tagName) {
            console.log("ConcreteHandler2 \u5B8C\u6210\u5904\u7406\uFF0C \"" + this.tagName + "}\" \u7B26\u5408");
        }
        else {
            console.log("\"" + this.tagName + "}\" \u4E0D\u7B26\u5408\uFF0C\u7EE7\u7EED\u4F20\u9012");
            this.next(tag);
        }
    };
    return ConcreteHandler2;
}(Handler));
var ConcreteHandler3 = /** @class */ (function (_super) {
    __extends(ConcreteHandler3, _super);
    function ConcreteHandler3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = '测试ConcreteHandler3';
        return _this;
    }
    ConcreteHandler3.prototype.handle = function (tag) {
        if (tag === this.tagName) {
            console.log("ConcreteHandler3 \u5B8C\u6210\u5904\u7406\uFF0C \"" + this.tagName + "}\" \u7B26\u5408");
        }
        else {
            console.log("\"" + this.tagName + "}\" \u4E0D\u7B26\u5408\uFF0C\u7EE7\u7EED\u4F20\u9012");
            this.next(tag);
        }
    };
    return ConcreteHandler3;
}(Handler));
var chainOfResponsibility = function () {
    var handle1 = new ConcreteHandler1(null);
    var handle2 = new ConcreteHandler2(handle1);
    var chain = new ConcreteHandler3(handle2);
    chain.handle('测试ConcreteHandler1');
    chain.handle('测试ConcreteHandlernull');
};
exports.chainOfResponsibility = chainOfResponsibility;
//# sourceMappingURL=chainOfResponsibility.js.map