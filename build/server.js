"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:46
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 02:36:59
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
var composite_1 = require("./1.structure/3.composite/composite");
var bridge_1 = require("./1.structure/4.bridge/bridge");
var facade_1 = require("./1.structure/5.facade/facade");
var flyweight_1 = require("./1.structure/6.flyweight/flyweight");
var template_1 = require("./2.behavior/0.template/template");
var command_1 = require("./2.behavior/1.command/command");
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
//# sourceMappingURL=server.js.map