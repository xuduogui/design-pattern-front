/*
 * @Author: xuziyong
 * @Date: 2021-07-11 16:57:30
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 17:31:24
 * @Description: TODO
 */

// TODO 需要进一步理解访问者模式

interface Visitor {
  visitor(e: ConcreteElement1 | ConcreteElement2): void;
}

abstract class AbstractElement {
  abstract accept(v: Visitor): void
}

class ConcreteElement1 extends AbstractElement {
  accept(v: Visitor): void {
    v.visitor(this)
  }
  operation(): void {
    console.log('ConcreteElement1')
  }
}

class ConcreteElement2 extends AbstractElement {
  accept(v: Visitor): void {
    v.visitor(this)
  }
  operation(): void {
    console.log('ConcreteElement2')
  }
}

class ConcreteVisitor implements Visitor {
  visitor(e: ConcreteElement1 | ConcreteElement2): void {
    if (e instanceof ConcreteElement1) {
      e.operation()
    } else if (e instanceof ConcreteElement2) {
      e.operation()
    }
  }
}

class ObjectStructure {
  private elements: Array<AbstractElement> = []
  action(v: Visitor): void {
    this.elements.forEach(ele => {
      ele.accept(v)
    })
  }
  add(element: AbstractElement): void {
    this.elements.push(element)
  }
  createElement(): void {
    const mock = Math.random()
    if (mock > 0.5) {
      this.add(new ConcreteElement1())
    } else {
      this.add(new ConcreteElement2())
    }
  }
}

export const visitorInit = (): void => {
  const objectStructure = new ObjectStructure()
  let i = 0
  while(i < 10) {
    objectStructure.createElement()
    i++
  }
  const concreteVisitor = new ConcreteVisitor()
  objectStructure.action(concreteVisitor)
}