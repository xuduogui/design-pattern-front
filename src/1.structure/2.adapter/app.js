/*
 * @Author: xuziyong
 * @Date: 2021-06-26 23:20:24
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-27 00:49:23
 * @Description: TODO
 */
class Adaptee {
  needAdaptedMethod() {
    return 'adapte method!'
  }
}

class AbstructTarget {
  method() {return ''}
}

class Adapter extends Adaptee {
  constructor() {
    super()
  }
  // from implement AbstructTarget 
  method() {
    return super.needAdaptedMethod()
  }
}

function pageInit() {
  const adaptee = new Adaptee()
  console.log(adaptee.needAdaptedMethod())

  const target = new Adapter()
  console.log(target.method())
}
document.getElementById('adapter-button')
  .addEventListener('click', pageInit)
