"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-10 21:39:10
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 22:08:43
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.iteratorInit = void 0;
var ConcreteIterator = /** @class */ (function () {
    function ConcreteIterator(content) {
        this.index = 0;
        this.length = 0;
        this.content = content;
        this.length = content.length();
    }
    ConcreteIterator.prototype.hasNext = function () {
        return this.index < this.length;
    };
    ConcreteIterator.prototype.next = function () {
        if (this.index < this.length) {
            return this.content.getTargetByIndex(this.index++);
        }
        else {
            return null;
        }
    };
    return ConcreteIterator;
}());
var ConcreteContent = /** @class */ (function () {
    function ConcreteContent() {
        this.store = [];
    }
    ConcreteContent.prototype.add = function (obj) {
        this.store.push(obj);
    };
    ConcreteContent.prototype.getTargetByIndex = function (i) {
        return this.store.find(function (value, index) { return index === i; });
    };
    ConcreteContent.prototype.length = function () {
        return this.store.length;
    };
    ConcreteContent.prototype.creatIterator = function () {
        return new ConcreteIterator(this);
    };
    return ConcreteContent;
}());
var iteratorInit = function () {
    var contentDemo = new ConcreteContent();
    contentDemo.add('test1');
    contentDemo.add('test2');
    contentDemo.add('test3');
    contentDemo.add('test4');
    var iteratorDemo = contentDemo.creatIterator();
    while (iteratorDemo.hasNext()) {
        console.log(iteratorDemo.next());
    }
};
exports.iteratorInit = iteratorInit;
//# sourceMappingURL=iterator.js.map