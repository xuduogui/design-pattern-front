/*
 * @Author: xuziyong
 * @Date: 2021-07-10 22:23:45
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 23:27:10
 * @Description: TODO
 */
abstract class Mediator {
  abstract colleague1Changed(c: Colleague): void;
  abstract colleague2Changed(c: Colleague): void;
}

abstract class Colleague {
  private mediator: Mediator;
  constructor(m: Mediator) {
    this.mediator = m
  }
  getMediator(): Mediator {
    return this.mediator
  }
  setMediator(m: Mediator): void {
    this.mediator = m
  }
  abstract action(): void;
  change(): void {}
}

class ConcreteColleague1 extends Colleague {
  colleagueName:string = 'ConcreteColleague1'
  constructor(c: Mediator) {
    super(c)
  }
  action() {
    console.log(this.colleagueName + ' 正在反馈')
  }
  change(): void {
    this.getMediator().colleague1Changed(this)
  }
}
class ConcreteColleague2 extends Colleague {
  colleagueName:string = 'ConcreteColleague2'
  constructor(c: Mediator) {
    super(c)
  }
  action() {
    console.log(this.colleagueName + ' 正在反馈')
  }
  change(): void {
    this.getMediator().colleague2Changed(this)
  }
}

class ConcreteMediator extends Mediator {
  private c1!: ConcreteColleague1;
  private c2!: ConcreteColleague2;
  colleague1Changed(c: Colleague) {
    this.getC1().action()
    this.getC2().action()
  }
  colleague2Changed(c: Colleague) {
    this.getC2().action()
  }
  createColleague1(): ConcreteColleague1 {
    const c1 = new ConcreteColleague1(this)
    this.setC1(c1)
    return c1
  }
  createColleague2(): ConcreteColleague2 {
    const c2 = new ConcreteColleague2(this)
    this.setC2(c2)
    return c2
  }
  setC1(c: ConcreteColleague1): void {
    this.c1 = c
  }
  setC2(c: ConcreteColleague2): void {
    this.c2 = c
  }
  getC1(): ConcreteColleague1 {
    return this.c1
  }
  getC2(): ConcreteColleague2 {
    return this.c2
  }
}

export const mediatorInit = (): void => {
  const concreteMediator = new ConcreteMediator()
  const colleague1 = concreteMediator.createColleague1()
  const colleague2 = concreteMediator.createColleague2()
  console.log('colleague1发起change')
  colleague1.change()
  console.log('colleague1发起change结束')
  console.log('colleague2发起change')
  colleague2.change()
  console.log('colleague2发起change结束')
}

