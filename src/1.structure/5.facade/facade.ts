/*
 * @Author: xuziyong
 * @Date: 2021-07-08 23:07:05
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 23:41:11
 * @Description: TODO
 */

class Subsystem1 {
  private readonly name: string
  constructor() {
    this.name = 'Subsystem1'
  }
  getName(): string {
    return this.name
  }
}
class Subsystem2 {
  private readonly name: string
  constructor() {
    this.name = 'Subsystem2'
  }
  getName(): string {
    return this.name
  }
}
class Subsystem3 {
  private readonly name: string
  constructor() {
    this.name = 'Subsystem3'
  }
  getName(): string {
    return this.name
  }
}

class Facade {
  private readonly sys1: Subsystem1
  private readonly sys2: Subsystem2
  private readonly sys3: Subsystem3
  constructor() {
    this.sys1 = new Subsystem1()
    this.sys2 = new Subsystem2()
    this.sys3 = new Subsystem3()
  }
  mtd1(): string {
    return this.sys1.getName()
  }
  mtd2(): string {
    return this.sys2.getName()
  }
  mtd3(): string {
    return this.sys3.getName()
  }
}

export const facadeInit = (): void => {
  const facade = new Facade()
  console.log(facade.mtd1())
  console.log(facade.mtd2())
  console.log(facade.mtd3())
}