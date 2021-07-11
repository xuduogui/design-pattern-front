"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-11 16:57:30
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 17:27:59
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
exports.visitorInit = void 0;
var AbstractElement = /** @class */ (function () {
    function AbstractElement() {
    }
    return AbstractElement;
}());
var ConcreteElement1 = /** @class */ (function (_super) {
    __extends(ConcreteElement1, _super);
    function ConcreteElement1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteElement1.prototype.accept = function (v) {
        v.visitor(this);
    };
    ConcreteElement1.prototype.operation = function () {
        console.log('ConcreteElement1');
    };
    return ConcreteElement1;
}(AbstractElement));
var ConcreteElement2 = /** @class */ (function (_super) {
    __extends(ConcreteElement2, _super);
    function ConcreteElement2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteElement2.prototype.accept = function (v) {
        v.visitor(this);
    };
    ConcreteElement2.prototype.operation = function () {
        console.log('ConcreteElement2');
    };
    return ConcreteElement2;
}(AbstractElement));
var ConcreteVisitor = /** @class */ (function () {
    function ConcreteVisitor() {
    }
    ConcreteVisitor.prototype.visitor = function (e) {
        if (e instanceof ConcreteElement1) {
            e.operation();
        }
        else if (e instanceof ConcreteElement2) {
            e.operation();
        }
    };
    return ConcreteVisitor;
}());
var ObjectStructure = /** @class */ (function () {
    function ObjectStructure() {
        this.elements = [];
    }
    ObjectStructure.prototype.action = function (v) {
        this.elements.forEach(function (ele) {
            ele.accept(v);
        });
    };
    ObjectStructure.prototype.add = function (element) {
        this.elements.push(element);
    };
    ObjectStructure.prototype.createElement = function () {
        var mock = Math.random();
        if (mock > 0.5) {
            this.add(new ConcreteElement1());
        }
        else {
            this.add(new ConcreteElement2());
        }
    };
    return ObjectStructure;
}());
var visitorInit = function () {
    var objectStructure = new ObjectStructure();
    var i = 0;
    while (i < 10) {
        objectStructure.createElement();
        i++;
    }
    var concreteVisitor = new ConcreteVisitor();
    objectStructure.action(concreteVisitor);
};
exports.visitorInit = visitorInit;
//# sourceMappingURL=visitor.js.map