"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-09 00:59:44
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 01:28:27
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.flyweightInit = void 0;
var ConcreteFlyweight = /** @class */ (function () {
    function ConcreteFlyweight(state) {
        this.state = state;
    }
    ConcreteFlyweight.prototype.operation = function (outMsg) {
        console.log('outMsg:', outMsg, 'innnerMsg', this.state);
    };
    return ConcreteFlyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
    }
    FlyweightFactory.getFlyweight = function (state) {
        var flyweight = FlyweightFactory.poolMap.get(state);
        if (!flyweight) {
            flyweight = new ConcreteFlyweight(state);
            FlyweightFactory.poolMap.set(state, flyweight);
        }
        return flyweight;
    };
    FlyweightFactory.poolMap = new Map();
    return FlyweightFactory;
}());
var flyweightInit = function () {
    var fw1 = FlyweightFactory.getFlyweight('fw1');
    var fw2 = FlyweightFactory.getFlyweight('fw2');
    var fw3 = FlyweightFactory.getFlyweight('fw3');
    fw1.operation('fw1operation');
    fw2.operation('fw2operation');
    fw3.operation('fw3operation');
    var fw11 = FlyweightFactory.getFlyweight('fw1');
    var fw22 = FlyweightFactory.getFlyweight('fw2');
    var fw33 = FlyweightFactory.getFlyweight('fw3');
    fw11.operation('fw11operation');
    fw22.operation('fw22operation');
    fw33.operation('fw33operation');
};
exports.flyweightInit = flyweightInit;
//# sourceMappingURL=flyweight.js.map