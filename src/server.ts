/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:46
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 17:29:23
 * @Description: TODO
 */

import { compositeInit } from "./1.structure/3.composite/composite";
import { bridgeInit } from "./1.structure/4.bridge/bridge";
import { facadeInit } from "./1.structure/5.facade/facade";
import { flyweightInit } from "./1.structure/6.flyweight/flyweight";
import { templateInit } from "./2.behavior/0.template/template";
import { commandInit } from "./2.behavior/1.command/command";
import { chainOfResponsibility } from "./2.behavior/2.chainOfResponsibility/chainOfResponsibility";

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