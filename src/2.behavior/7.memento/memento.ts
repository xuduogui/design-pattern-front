/*
 * @Author: xuziyong
 * @Date: 2021-07-11 00:54:45
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 01:15:33
 * @Description: TODO
 */
class Memento {
  private state: string
  constructor(s: string) {
    this.state = s
  }
  getState(): string {
    return this.state
  }
  setState(s: string): void {
    this.state = s
  }
}

class Originator {
  private state: string = ''
  getState(): string {
    return this.state
  }
  setState(s: string): void {
    this.state = s
  }
  createMemento() {
    return new Memento(this.state)
  }
  restoreMemento(m: Memento) {
    this.setState(m.getState())
  }
}

class Caretaker {
  private memento!: Memento
  getMemento(): Memento {
    return this.memento
  }
  setMomento(m: Memento): void {
    this.memento = m
  }
}

export const mementoInit = (): void => {
  const caretaker = new Caretaker()
  const originator = new Originator()

  originator.setState('测试状态1')
  console.log('第一次改变状态打印：', originator.getState())

  const memento1 = originator.createMemento()
  caretaker.setMomento(memento1)
  console.log('第一次记录状态打印：', originator.getState())

  originator.setState('测试状态2')
  console.log('第二次改变状态打印：', originator.getState())
  
  originator.restoreMemento(caretaker.getMemento())
  console.log('第一次恢复状态打印：', originator.getState())
  
  originator.setState('测试状态3')
  console.log('第三次改变状态打印：', originator.getState())

  originator.restoreMemento(caretaker.getMemento())
  console.log('第二次恢复状态打印：', originator.getState())
}
