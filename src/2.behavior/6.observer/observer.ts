/*
 * @Author: xuziyong
 * @Date: 2021-07-10 23:37:54
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-11 00:50:54
 * @Description: TODO
 */

interface Observer {
  update(): void
}

interface Subject {
  attach(obs: Observer): void;
  detach(obs: Observer): void;
  notify(): void;
}

class ConcreteObserver1 implements Observer {
  update() {
    console.log('ConcreteObserver1 发生 update')
  }
}

class ConcreteObserver2 implements Observer {
  update() {
    console.log('ConcreteObserver2 发生 update')
  }
}

class ConcreteSubject implements Subject {
  private obsList: Set<Observer> = new Set()
  public attach(obs: Observer): void {
    this.obsList.add(obs)
  }
  public detach(obs: Observer): void {
    this.obsList.delete(obs)
  }
  public notify(): void {
    this.obsList.forEach(obs => {
      obs.update()
    })
  }
}

export const observerInit = (): void => {
  const sub = new ConcreteSubject()
  const obs1 = new ConcreteObserver1()
  const obs2 = new ConcreteObserver2()
  sub.attach(obs1)
  sub.attach(obs2)
  sub.notify()
}
