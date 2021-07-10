/*
 * @Author: xuziyong
 * @Date: 2021-07-10 21:39:10
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 22:08:43
 * @Description: TODO
 */

interface DemoIterator {
  next(): any;
  hasNext(): boolean;
}

interface Content {
  add(obj: any): void;
  creatIterator(): DemoIterator;
}

class ConcreteIterator implements DemoIterator {
  private content: ConcreteContent
  private index: number = 0
  private length: number = 0
  constructor(content: ConcreteContent) {
    this.content = content
    this.length = content.length()
  }
  public hasNext(): boolean {
    return this.index < this.length
  }
  public next(): any {
    if (this.index < this.length) {
      return this.content.getTargetByIndex(this.index++)
    } else {
      return null
    }
  }
}

class ConcreteContent implements Content {
  private store: Array<any> = [];
  add(obj: any): void {
    this.store.push(obj)
  }
  getTargetByIndex(i: number): object | null {
    return this.store.find((value, index) => index === i)
  }
  length() {
    return this.store.length
  }
  creatIterator() {
    return new ConcreteIterator(this)
  }
}

export const iteratorInit = (): void => {
  const contentDemo = new ConcreteContent()
  contentDemo.add('test1')
  contentDemo.add('test2')
  contentDemo.add('test3')
  contentDemo.add('test4')
  const iteratorDemo = contentDemo.creatIterator()
  while (iteratorDemo.hasNext()) {
    console.log(iteratorDemo.next())
  }
}
