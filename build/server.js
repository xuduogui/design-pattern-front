"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:46
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 17:29:15
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
var composite_1 = require("./1.structure/3.composite/composite");
var bridge_1 = require("./1.structure/4.bridge/bridge");
var facade_1 = require("./1.structure/5.facade/facade");
var flyweight_1 = require("./1.structure/6.flyweight/flyweight");
var template_1 = require("./2.behavior/0.template/template");
var command_1 = require("./2.behavior/1.command/command");
var chainOfResponsibility_1 = require("./2.behavior/2.chainOfResponsibility/chainOfResponsibility");
var strategy_1 = require("./2.behavior/3.strategy/strategy");
var iterator_1 = require("./2.behavior/4.iterator/iterator");
var mediator_1 = require("./2.behavior/5.mediator/mediator");
var observer_1 = require("./2.behavior/6.observer/observer");
var memento_1 = require("./2.behavior/7.memento/memento");
var visitor_1 = require("./2.behavior/8.visitor/visitor");
console.log('========== 开始组合模式 ==========');
composite_1.compositeInit();
console.log('========== 组合模式结束 ==========');
console.log('========== 开始桥梁模式 ==========');
bridge_1.bridgeInit();
console.log('========== 桥梁模式结束 ==========');
console.log('========== 开始外观模式 ==========');
facade_1.facadeInit();
console.log('========== 外观模式结束 ==========');
console.log('========== 开始享元模式 ==========');
flyweight_1.flyweightInit();
console.log('========== 享元模式结束 ==========');
console.log('========== 开始模板方法模式 ==========');
template_1.templateInit();
console.log('========== 模板方法模式结束 ==========');
console.log('========== 开始命令模式 ==========');
command_1.commandInit();
console.log('========== 命令模式结束 ==========');
console.log('========== 开始责任链模式 ==========');
chainOfResponsibility_1.chainOfResponsibility();
console.log('========== 责任链模式结束 ==========');
console.log('========== 开始策略模式 ==========');
strategy_1.strategyInit();
console.log('========== 策略模式结束 ==========');
console.log('========== 开始迭代器模式 ==========');
iterator_1.iteratorInit();
console.log('========== 迭代器模式结束 ==========');
console.log('========== 开始中介者模式 ==========');
mediator_1.mediatorInit();
console.log('========== 中介者模式结束 ==========');
console.log('========== 开始观察者模式 ==========');
observer_1.observerInit();
console.log('========== 观察者模式结束 ==========');
console.log('========== 开始备忘录模式 ==========');
memento_1.mementoInit();
console.log('========== 备忘录模式结束 ==========');
console.log('========== 开始访问者模式 ==========');
visitor_1.visitorInit();
console.log('========== 访问者模式结束 ==========');
//# sourceMappingURL=server.js.map