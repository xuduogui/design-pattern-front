/*
 * @Author: xuziyong
 * @Date: 2021-07-05 23:12:04
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-08 19:20:37
 * @Description: TODO
 */
function arrayRemoveElement<T>(element: T, arrayList: Array<T>): boolean {
  for (let index = 0; index < arrayList.length; index++) {
    const elementArray = arrayList[index];
    if (elementArray === element) {
      arrayList.splice(index, 1)
      return true;
    }
  }
  return false
}

function arrayRemove<T>(this: Array<any>, element: T): boolean {
  return arrayRemoveElement(element, this)
}

interface ComponentAbstract {
  handleOperation?(): void;
  operation(): void;
}

class Composite implements ComponentAbstract {
  compositeName: string

  constructor(name: string) {
    this.compositeName = name
  }

  private componentsList:Array<ComponentAbstract> = []
  
  public add(component: ComponentAbstract): void {
    this.componentsList.push(component)
  }

  public remove(component: ComponentAbstract): void {
    arrayRemove.call(this.componentsList, component)
  }

  public getChilds(): Array<ComponentAbstract> {
    return this.componentsList
  }

  public operation():void {
    console.log('Composite: ',this.compositeName)
  }

  public handleOperation():void {
    const childs = this.getChilds()
    childs.forEach(element => {
      if (element instanceof Leaf) {
        element.operation()
      } else {
        element.operation()
        element.handleOperation && element.handleOperation()
      }
    })
    
  }
}

class Leaf implements ComponentAbstract {
  leafName: string
  constructor(name: string) {
    this.leafName = name
  }
  public operation():void {
    console.log('Leaf: ', this.leafName)
  }
}

export const compositeInit = () => {
  const root = new Composite('root')
  const branch1 = new Composite('branch1')
  const branch2 = new Composite('branch2')
  const branch3 = new Composite('branch3')
  const leaf1 = new Leaf('leaf1')
  const leaf2 = new Leaf('leaf2')
  const leaf3 = new Leaf('leaf3')
  const leaf4 = new Leaf('leaf4')
  const leaf5 = new Leaf('leaf5')
  const leaf6 = new Leaf('leaf6')
  root.add(branch1)
  branch1.add(leaf1)
  console.log('第一次遍历打印')
  root.handleOperation()
  setTimeout(() => {
    root.remove(branch1)
    console.log(root)
    root.add(branch2)
    branch2.add(leaf2)
    root.add(branch3)
    branch3.add(leaf3)
    branch3.add(leaf4)
    branch3.add(leaf5)
    branch3.add(leaf6)
    console.log('第二次遍历打印')
    root.handleOperation()
  }, 4000);
}
