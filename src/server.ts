/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:46
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 21:36:48
 * @Description: TODO
 */

import { compositeInit } from "./1.structure/3.composite/composite";
import { bridgeInit } from "./1.structure/4.bridge/bridge";
console.log('========== 开始组合模式 ==========')
compositeInit()
console.log('========== 组合模式结束 ==========')
console.log('========== 开始桥梁模式 ==========')
bridgeInit()
console.log('========== 桥梁模式结束 ==========')