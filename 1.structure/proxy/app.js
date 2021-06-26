/*
 * @Author: xuziyong
 * @Date: 2021-06-26 21:30:10
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-26 22:19:41
 * @Description: TODO
 */
class AbstractSubject {
  constructor(params) {}
  getPrivateValue() {
    return ''
  }
}

class RealSubject extends AbstractSubject {
  privateValue = 'override by son!'
  constructor(params) {
    super(params)
  }
  getPrivateValue() {
    return this.privateValue
  }
}

class ProxySubject extends AbstractSubject {
  constructor(subject) {
    super(subject)
    this.realSubject = subject
  }
  getPrivateValue() {
    this.getPrivateValueBefore()
    const result = this.realSubject.getPrivateValue()
    this.getPrivateValueAfter()
    return result
  }
  getPrivateValueBefore() {
    console.log('this is proxy before!')
  }
  getPrivateValueAfter() {
    console.log('this is proxy after!')
  }
}

function pageInit() {
  const subject = new RealSubject()
  const subjectProxy = new ProxySubject(subject)
  console.log(subject.getPrivateValue())
  console.log(subjectProxy.getPrivateValue())
}

document.getElementById('proxy-button')
  .addEventListener('click', pageInit)