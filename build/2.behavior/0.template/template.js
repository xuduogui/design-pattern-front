"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-09 02:10:19
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 02:18:57
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
exports.templateInit = void 0;
var AbstractTemplate = /** @class */ (function () {
    function AbstractTemplate() {
    }
    AbstractTemplate.prototype.templateMtd = function () {
        return this.sonsOperation();
    };
    return AbstractTemplate;
}());
var ConcreteTemplate1 = /** @class */ (function (_super) {
    __extends(ConcreteTemplate1, _super);
    function ConcreteTemplate1() {
        return _super.call(this) || this;
    }
    ConcreteTemplate1.prototype.sonsOperation = function () {
        return 'ConcreteTemplate1';
    };
    return ConcreteTemplate1;
}(AbstractTemplate));
var ConcreteTemplate2 = /** @class */ (function (_super) {
    __extends(ConcreteTemplate2, _super);
    function ConcreteTemplate2() {
        return _super.call(this) || this;
    }
    ConcreteTemplate2.prototype.sonsOperation = function () {
        return 'ConcreteTemplate2';
    };
    return ConcreteTemplate2;
}(AbstractTemplate));
var templateInit = function () {
    var tp1 = new ConcreteTemplate1();
    var tp2 = new ConcreteTemplate2();
    var str1 = tp1.templateMtd();
    var str2 = tp2.templateMtd();
    console.log(str1, str2);
};
exports.templateInit = templateInit;
//# sourceMappingURL=template.js.map