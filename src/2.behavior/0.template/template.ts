/*
 * @Author: xuziyong
 * @Date: 2021-07-09 02:10:19
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 02:18:57
 * @Description: TODO
 */

abstract class AbstractTemplate {
  protected abstract sonsOperation(): string;
  public templateMtd(): string {
    return this.sonsOperation()
  }
}

class ConcreteTemplate1 extends AbstractTemplate {
  constructor() {
    super()
  }
  sonsOperation():string {
    return 'ConcreteTemplate1'
  }
}
class ConcreteTemplate2 extends AbstractTemplate {
  constructor() {
    super()
  }
  sonsOperation():string {
    return 'ConcreteTemplate2'
  }
}

export const templateInit = (): void => {
  const tp1 = new ConcreteTemplate1()
  const tp2 = new ConcreteTemplate2()
  const str1 = tp1.templateMtd()
  const str2 = tp2.templateMtd()
  console.log(str1, str2)
}
