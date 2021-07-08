"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-08 19:56:32
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 23:32:50
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
exports.bridgeInit = void 0;
var Abstration = /** @class */ (function () {
    function Abstration(imp) {
        this.imp = imp;
    }
    return Abstration;
}());
var ConcreteImp1 = /** @class */ (function () {
    function ConcreteImp1() {
    }
    ConcreteImp1.prototype.operationImp = function () {
        return 'ConcreteImp1';
    };
    return ConcreteImp1;
}());
var ConcreteImp2 = /** @class */ (function () {
    function ConcreteImp2() {
    }
    ConcreteImp2.prototype.operationImp = function () {
        return 'ConcreteImp2';
    };
    return ConcreteImp2;
}());
var ConcreteImp3 = /** @class */ (function () {
    function ConcreteImp3() {
    }
    ConcreteImp3.prototype.operationImp = function () {
        return 'ConcreteImp3';
    };
    return ConcreteImp3;
}());
var ConcreteAbstraction1 = /** @class */ (function (_super) {
    __extends(ConcreteAbstraction1, _super);
    function ConcreteAbstraction1(imp) {
        var _this = _super.call(this, imp) || this;
        _this.name = 'ConcreteAbstraction1';
        return _this;
    }
    ConcreteAbstraction1.prototype.operation = function () {
        return 'operationImp: ' + this.imp.operationImp() + '; name: ' + this.name;
    };
    return ConcreteAbstraction1;
}(Abstration));
var ConcreteAbstraction2 = /** @class */ (function (_super) {
    __extends(ConcreteAbstraction2, _super);
    function ConcreteAbstraction2(imp) {
        var _this = _super.call(this, imp) || this;
        _this.name = 'ConcreteAbstraction2';
        return _this;
    }
    ConcreteAbstraction2.prototype.operation = function () {
        return 'operationImp: ' + this.imp.operationImp() + '; name: ' + this.name;
    };
    return ConcreteAbstraction2;
}(Abstration));
var bridgeInit = function () {
    var imp1 = new ConcreteImp1();
    var imp2 = new ConcreteImp2();
    var imp3 = new ConcreteImp3();
    var concrete1 = new ConcreteAbstraction1(imp1);
    console.log(concrete1.operation());
    var concrete2 = new ConcreteAbstraction1(imp2);
    console.log(concrete2.operation());
    var concrete3 = new ConcreteAbstraction1(imp3);
    console.log(concrete3.operation());
    var concrete4 = new ConcreteAbstraction2(imp1);
    console.log(concrete4.operation());
    var concrete5 = new ConcreteAbstraction2(imp2);
    console.log(concrete5.operation());
    var concrete6 = new ConcreteAbstraction2(imp3);
    console.log(concrete6.operation());
};
exports.bridgeInit = bridgeInit;
//# sourceMappingURL=bridge.js.map