"use strict";
/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:46
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 21:36:48
 * @Description: TODO
 */
Object.defineProperty(exports, "__esModule", { value: true });
var composite_1 = require("./1.structure/3.composite/composite");
var bridge_1 = require("./1.structure/4.bridge/bridge");
console.log('========== 开始组合模式 ==========');
composite_1.compositeInit();
console.log('========== 组合模式结束 ==========');
console.log('========== 开始桥梁模式 ==========');
bridge_1.bridgeInit();
console.log('========== 桥梁模式结束 ==========');
//# sourceMappingURL=server.js.map