/*
 * @Author: xuziyong
 * @Date: 2021-07-09 00:59:44
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 01:28:27
 * @Description: TODO
 */

interface Flyweight {
  operation(outMsg: string): void;
}

class ConcreteFlyweight implements Flyweight {
  private state: string
  constructor(state: any) {
    this.state = state
  }
  operation(outMsg: string): void {
    console.log('outMsg:', outMsg, 'innnerMsg', this.state)
  }
}

class FlyweightFactory {
  public static poolMap: Map<string, Flyweight> = new Map()
  public static getFlyweight(state: string): Flyweight {
    let flyweight: Flyweight | undefined = FlyweightFactory.poolMap.get(state)
    if (!flyweight) {
      flyweight = new ConcreteFlyweight(state)
      FlyweightFactory.poolMap.set(state, flyweight)
    }
    return flyweight
  }
}

export const flyweightInit = (): void => {
  const fw1 = FlyweightFactory.getFlyweight('fw1')
  const fw2 = FlyweightFactory.getFlyweight('fw2')
  const fw3 = FlyweightFactory.getFlyweight('fw3')
  fw1.operation('fw1operation')
  fw2.operation('fw2operation')
  fw3.operation('fw3operation')

  const fw11 = FlyweightFactory.getFlyweight('fw1')
  const fw22 = FlyweightFactory.getFlyweight('fw2')
  const fw33 = FlyweightFactory.getFlyweight('fw3')
  fw11.operation('fw11operation')
  fw22.operation('fw22operation')
  fw33.operation('fw33operation')
}