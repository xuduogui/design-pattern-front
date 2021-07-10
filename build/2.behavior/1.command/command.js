"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-09 02:26:21
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 18:37:00
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandInit = void 0;
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.action = function () {
        console.log('Receiver action');
    };
    return Receiver;
}());
var ConcreteCommand = /** @class */ (function () {
    function ConcreteCommand(receiver) {
        this.receiver = receiver;
    }
    ConcreteCommand.prototype.execute = function () {
        this.receiver.action();
    };
    return ConcreteCommand;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setCommand = function (command) {
        this.command = command;
    };
    Invoker.prototype.action = function () {
        this.command && this.command.execute();
    };
    return Invoker;
}());
var commandInit = function () {
    var invoker = new Invoker();
    var recevier = new Receiver();
    var concreteCommand = new ConcreteCommand(recevier);
    invoker.setCommand(concreteCommand);
    invoker.action();
};
exports.commandInit = commandInit;
//# sourceMappingURL=command.js.map