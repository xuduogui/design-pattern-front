/*
 * @Author: xuziyong
 * @Date: 2021-07-09 02:26:21
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-07-09 02:36:34
 * @Description: TODO
 */
interface Command {
  execute(): void
}

class Receiver {
  action(): void {
    console.log('Receiver action')
  }
}

class ConcreteCommand implements Command {
  private receiver: Receiver
  constructor(receiver: Receiver) {
    this.receiver = receiver
  }
  execute(): void {
    this.receiver.action()
  }
}

class Invoker {
  private command: Command | undefined
  setCommand(command: Command) {
    this.command = command
  }
  action() {
    this.command && this.command.execute()
  }
}

export const commandInit = (): void => {
  const invoker = new Invoker()
  const recevier = new Receiver()
  const concreteCommand = new ConcreteCommand(recevier)
  invoker.setCommand(concreteCommand)
  invoker.action()
}