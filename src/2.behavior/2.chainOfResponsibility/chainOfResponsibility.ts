/*
 * @Author: xuziyong
 * @Date: 2021-07-10 16:02:11
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 18:11:14
 * @Description: TODO
 */

abstract class Handler {
  private nextHandleTarget: Handler | null = null
  public abstract handle(tag: string): void
  constructor(target: Handler | null) {
    this.setNextTarget(target)
  }
  public getNextTarget(): Handler | null {
    return this.nextHandleTarget
  }
  public setNextTarget(target: Handler | null) {
    this.nextHandleTarget = target
  }
  public next(tag: string): void {
    const nextTarget = this.getNextTarget()
    if (nextTarget !== null) {
      nextTarget.handle(tag)
    } else {
      console.log(tag, '责任链结束, 无符合项目')
    }
  }
}

class ConcreteHandler1 extends Handler {
  tagName: string = '测试ConcreteHandler1'
  handle(tag: string): void {
    if (tag === this.tagName) {
      console.log(`ConcreteHandler1 完成处理， "${this.tagName}}" 符合`)
    } else {
      console.log(`"${this.tagName}}" 不符合，继续传递`)
      this.next(tag)
    }
  }
}
class ConcreteHandler2 extends Handler {
  tagName: string = '测试ConcreteHandler2'
  handle(tag: string): void {
    if (tag === this.tagName) {
      console.log(`ConcreteHandler2 完成处理， "${this.tagName}}" 符合`)
    } else {
      console.log(`"${this.tagName}}" 不符合，继续传递`)
      this.next(tag)
    }
  }
}
class ConcreteHandler3 extends Handler {
  tagName: string = '测试ConcreteHandler3'
  handle(tag: string): void {
    if (tag === this.tagName) {
      console.log(`ConcreteHandler3 完成处理， "${this.tagName}}" 符合`)
    } else {
      console.log(`"${this.tagName}}" 不符合，继续传递`)
      this.next(tag)
    }
  }
}

export const chainOfResponsibility = (): void => {
  const handle1 = new ConcreteHandler1(null)
  const handle2 = new ConcreteHandler2(handle1)
  const chain = new ConcreteHandler3(handle2)
  chain.handle('测试ConcreteHandler1')
  chain.handle('测试ConcreteHandlernull')
}