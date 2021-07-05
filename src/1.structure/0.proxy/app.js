/*
 * @Author: xuziyong
 * @Date: 2021-06-26 21:30:10
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-27 00:52:24
 * @Description: TODO
 */
class AbstractSubject {
  getPrivateValue() {
    return ''
  }
}

class RealSubject extends AbstractSubject {
  privateValue = ''
  constructor(params) {
    super(params)
    this.privateValue = 'override by son!'
  }
  getPrivateValue() {
    return this.privateValue
  }
}

class ProxySubject extends AbstractSubject {
  realSubject = null
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