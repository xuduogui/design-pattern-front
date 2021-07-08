/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:46
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 01:22:49
 * @Description: TODO
 */

import { compositeInit } from "./1.structure/3.composite/composite";
import { bridgeInit } from "./1.structure/4.bridge/bridge";
import { facadeInit } from "./1.structure/5.facade/facade";
import { flyweightInit } from "./1.structure/6.flyweight/flyweight";

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