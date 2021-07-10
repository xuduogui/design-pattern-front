"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-10 18:18:51
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 21:31:10
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
exports.strategyInit = void 0;
var Strategy = /** @class */ (function () {
    function Strategy() {
    }
    return Strategy;
}());
var ConscreteStrategy1 = /** @class */ (function (_super) {
    __extends(ConscreteStrategy1, _super);
    function ConscreteStrategy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trategyName = 'ConscreteStrategy1';
        return _this;
    }
    ConscreteStrategy1.prototype.strategyInterface = function () {
        console.log(this.trategyName);
    };
    return ConscreteStrategy1;
}(Strategy));
var ConscreteStrategy2 = /** @class */ (function (_super) {
    __extends(ConscreteStrategy2, _super);
    function ConscreteStrategy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trategyName = 'ConscreteStrategy2';
        return _this;
    }
    ConscreteStrategy2.prototype.strategyInterface = function () {
        console.log(this.trategyName);
    };
    return ConscreteStrategy2;
}(Strategy));
var ConscreteStrategy3 = /** @class */ (function (_super) {
    __extends(ConscreteStrategy3, _super);
    function ConscreteStrategy3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trategyName = 'ConscreteStrategy3';
        return _this;
    }
    ConscreteStrategy3.prototype.strategyInterface = function () {
        console.log(this.trategyName);
    };
    return ConscreteStrategy3;
}(Strategy));
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.contextInterface = function () {
        this.strategy.strategyInterface();
    };
    return Context;
}());
var strategyInit = function () {
    var ct1 = new Context(new ConscreteStrategy1());
    var ct2 = new Context(new ConscreteStrategy2());
    var ct3 = new Context(new ConscreteStrategy3());
    ct1.contextInterface();
    ct2.contextInterface();
    ct3.contextInterface();
};
exports.strategyInit = strategyInit;
//# sourceMappingURL=strategy.js.map