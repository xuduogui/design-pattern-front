/*
 * @Author: xuziyong
 * @Date: 2021-06-26 22:23:23
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-26 23:14:30
 * @Description: TODO
 */

class AbstractComponent {
  constructor() {}
  needDecorated () {return ''}
}

class ConcreteComponent extends AbstractComponent {
  noDecorateString = ''
  constructor() {
    super()
    this.noDecorateString = 'no decorate string!'
  }
  needDecorated () {
    return this.noDecorateString
  }
}

class Decorator extends AbstractComponent {
  concreteComponent = null
  constructor(concreteComponent) {
    super()
    this.concreteComponent = concreteComponent
  }
  needDecorated() {
    return this.concreteComponent.needDecorated()
  }
}

class ConcreteDecorator extends Decorator {
  constructor(concreteComponent) {
    super(concreteComponent)
  }
  needDecorated() {
    this.decorateAddMethods()
    const superReturn = super.needDecorated()
    return superReturn
  }
  decorateAddMethods() {
    console.log('there are decorated!')
  }
}

function pageInit() {
  const needDecoratedComponent = new ConcreteComponent()
  const isDecoratedComponent = new ConcreteDecorator(needDecoratedComponent)
  console.log(needDecoratedComponent.needDecorated())
  console.log(isDecoratedComponent.needDecorated()) 
}

document.getElementById('decorator-button')
  .addEventListener('click', pageInit)