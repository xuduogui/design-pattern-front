/*
 * @Author: xuziyong
 * @Date: 2021-07-08 19:56:32
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 21:42:28
 * @Description: TODO
 */

interface Implementor {
  operationImp(): string;
}

class Abstration {
  imp: Implementor;
  constructor(imp: Implementor) {
    this.imp = imp
  }
  public operation(): string {
    return this.imp.operationImp()
  }
}

class ConcreteImp1 implements Implementor {
  operationImp():string {
    return 'ConcreteImp1'
  }
}
class ConcreteImp2 implements Implementor {
  operationImp():string {
    return 'ConcreteImp2'
  }
}
class ConcreteImp3 implements Implementor {
  operationImp():string {
    return 'ConcreteImp3'
  }
}
class ConcreteAbstraction1 extends Abstration {
  name: string
  constructor(imp: Implementor) {
    super(imp)
    this.name = 'ConcreteAbstraction1'
  }
  operation(): string {
    return 'operationImp: ' + super.operation() + '; name: ' + this.name
  }
}
class ConcreteAbstraction2 extends Abstration {
  name: string
  constructor(imp: Implementor) {
    super(imp)
    this.name = 'ConcreteAbstraction2'
  }
  operation(): string {
    return 'operationImp: ' + super.operation() + '; name: ' + this.name
  }
}

export const bridgeInit = (): void => {
  const imp1 = new ConcreteImp1()
  const imp2 = new ConcreteImp2()
  const imp3 = new ConcreteImp3()
  const concrete1 = new ConcreteAbstraction1(imp1)
  console.log(concrete1.operation())
  const concrete2 = new ConcreteAbstraction1(imp2)
  console.log(concrete2.operation())
  const concrete3 = new ConcreteAbstraction1(imp3)
  console.log(concrete3.operation())
  const concrete4 = new ConcreteAbstraction2(imp1)
  console.log(concrete4.operation())
  const concrete5 = new ConcreteAbstraction2(imp2)
  console.log(concrete5.operation())
  const concrete6 = new ConcreteAbstraction2(imp3)
  console.log(concrete6.operation())
}



