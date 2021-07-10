/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:46
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 00:51:18
 * @Description: TODO
 */

import { compositeInit } from "./1.structure/3.composite/composite";
import { bridgeInit } from "./1.structure/4.bridge/bridge";
import { facadeInit } from "./1.structure/5.facade/facade";
import { flyweightInit } from "./1.structure/6.flyweight/flyweight";
import { templateInit } from "./2.behavior/0.template/template";
import { commandInit } from "./2.behavior/1.command/command";
import { chainOfResponsibility } from "./2.behavior/2.chainOfResponsibility/chainOfResponsibility";
import { strategyInit } from "./2.behavior/3.strategy/strategy";
import { iteratorInit } from "./2.behavior/4.iterator/iterator";
import { mediatorInit } from "./2.behavior/5.mediator/mediator";
import { observerInit } from "./2.behavior/6.observer/observer";

console.log('========== 开始组合模式 ==========')
compositeInit()
console.log('========== 组合模式结束 ==========')

console.log('========== 开始桥梁模式 ==========')
bridgeInit()
console.log('========== 桥梁模式结束 ==========')

console.log('========== 开始外观模式 ==========')
facadeInit()
console.log('========== 外观模式结束 ==========')

console.log('========== 开始享元模式 ==========')
flyweightInit()
console.log('========== 享元模式结束 ==========')

console.log('========== 开始模板方法模式 ==========')
templateInit()
console.log('========== 模板方法模式结束 ==========')

console.log('========== 开始命令模式 ==========')
commandInit()
console.log('========== 命令模式结束 ==========')

console.log('========== 开始责任链模式 ==========')
chainOfResponsibility()
console.log('========== 责任链模式结束 ==========')

console.log('========== 开始策略模式 ==========')
strategyInit()
console.log('========== 策略模式结束 ==========')

console.log('========== 开始迭代器模式 ==========')
iteratorInit()
console.log('========== 迭代器模式结束 ==========')

console.log('========== 开始中介者模式 ==========')
mediatorInit()
console.log('========== 中介者模式结束 ==========')

console.log('========== 开始观察者模式 ==========')
observerInit()
console.log('========== 观察者模式结束 ==========')