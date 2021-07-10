/*
 * @Author: xuziyong
 * @Date: 2021-07-10 18:18:51
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-10 21:31:10
 * @Description: TODO
 */

abstract class Strategy {
  public abstract strategyInterface(): void;
}

class ConscreteStrategy1 extends Strategy {
  private trategyName: string = 'ConscreteStrategy1'
  public strategyInterface(): void {
    console.log(this.trategyName)
  }
}

class ConscreteStrategy2 extends Strategy {
  private trategyName: string = 'ConscreteStrategy2'
  public strategyInterface(): void {
    console.log(this.trategyName)
  }
}

class ConscreteStrategy3 extends Strategy {
  private trategyName: string = 'ConscreteStrategy3'
  public strategyInterface(): void {
    console.log(this.trategyName)
  }
}

class Context {
  private strategy: Strategy
  constructor(strategy: Strategy) {
    this.strategy = strategy
  }
  contextInterface(): void {
    this.strategy.strategyInterface()
  }
}

export const strategyInit = (): void => {
  const ct1 = new Context(new ConscreteStrategy1())
  const ct2 = new Context(new ConscreteStrategy2())
  const ct3 = new Context(new ConscreteStrategy3())
  ct1.contextInterface()
  ct2.contextInterface()
  ct3.contextInterface()
}


