"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compositeInit = void 0;
/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:04
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 19:20:37
 * @Description: TODO
 */
function arrayRemoveElement(element, arrayList) {
    for (var index = 0; index < arrayList.length; index++) {
        var elementArray = arrayList[index];
        if (elementArray === element) {
            arrayList.splice(index, 1);
            return true;
        }
    }
    return false;
}
function arrayRemove(element) {
    return arrayRemoveElement(element, this);
}
var Composite = /** @class */ (function () {
    function Composite(name) {
        this.componentsList = [];
        this.compositeName = name;
    }
    Composite.prototype.add = function (component) {
        this.componentsList.push(component);
    };
    Composite.prototype.remove = function (component) {
        arrayRemove.call(this.componentsList, component);
    };
    Composite.prototype.getChilds = function () {
        return this.componentsList;
    };
    Composite.prototype.operation = function () {
        console.log('Composite: ', this.compositeName);
    };
    Composite.prototype.handleOperation = function () {
        var childs = this.getChilds();
        childs.forEach(function (element) {
            if (element instanceof Leaf) {
                element.operation();
            }
            else {
                element.operation();
                element.handleOperation && element.handleOperation();
            }
        });
    };
    return Composite;
}());
var Leaf = /** @class */ (function () {
    function Leaf(name) {
        this.leafName = name;
    }
    Leaf.prototype.operation = function () {
        console.log('Leaf: ', this.leafName);
    };
    return Leaf;
}());
var compositeInit = function () {
    var root = new Composite('root');
    var branch1 = new Composite('branch1');
    var branch2 = new Composite('branch2');
    var branch3 = new Composite('branch3');
    var leaf1 = new Leaf('leaf1');
    var leaf2 = new Leaf('leaf2');
    var leaf3 = new Leaf('leaf3');
    var leaf4 = new Leaf('leaf4');
    var leaf5 = new Leaf('leaf5');
    var leaf6 = new Leaf('leaf6');
    root.add(branch1);
    branch1.add(leaf1);
    console.log('第一次遍历打印');
    root.handleOperation();
    setTimeout(function () {
        root.remove(branch1);
        console.log(root);
        root.add(branch2);
        branch2.add(leaf2);
        root.add(branch3);
        branch3.add(leaf3);
        branch3.add(leaf4);
        branch3.add(leaf5);
        branch3.add(leaf6);
        console.log('第二次遍历打印');
        root.handleOperation();
    }, 4000);
};
exports.compositeInit = compositeInit;
//# sourceMappingURL=composite.js.map