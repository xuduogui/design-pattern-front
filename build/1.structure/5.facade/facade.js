"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-08 23:07:05
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 23:41:11
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.facadeInit = void 0;
var Subsystem1 = /** @class */ (function () {
    function Subsystem1() {
        this.name = 'Subsystem1';
    }
    Subsystem1.prototype.getName = function () {
        return this.name;
    };
    return Subsystem1;
}());
var Subsystem2 = /** @class */ (function () {
    function Subsystem2() {
        this.name = 'Subsystem2';
    }
    Subsystem2.prototype.getName = function () {
        return this.name;
    };
    return Subsystem2;
}());
var Subsystem3 = /** @class */ (function () {
    function Subsystem3() {
        this.name = 'Subsystem3';
    }
    Subsystem3.prototype.getName = function () {
        return this.name;
    };
    return Subsystem3;
}());
var Facade = /** @class */ (function () {
    function Facade() {
        this.sys1 = new Subsystem1();
        this.sys2 = new Subsystem2();
        this.sys3 = new Subsystem3();
    }
    Facade.prototype.mtd1 = function () {
        return this.sys1.getName();
    };
    Facade.prototype.mtd2 = function () {
        return this.sys2.getName();
    };
    Facade.prototype.mtd3 = function () {
        return this.sys3.getName();
    };
    return Facade;
}());
var facadeInit = function () {
    var facade = new Facade();
    console.log(facade.mtd1());
    console.log(facade.mtd2());
    console.log(facade.mtd3());
};
exports.facadeInit = facadeInit;
//# sourceMappingURL=facade.js.map