
class ButtonInvoker {
  constructor(buttonElement, command, history) {
    this.buttonElement = buttonElement;
    this.command = command;
    this.history = history;
    this.buttonElement.addEventListener("click", () => this.executeCommand());
  }

  executeCommand() {
    this.command.execute();
    this.history.addCommand(new CommandPrototype(this.command));
  }
}




class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    throw new Error('Method "execute()" must be implemented.');
  }

}

class CommandArgs extends Command {
  constructor(receiver, command, arg = null) {
    super(receiver);
    this.command = command;
    this.arg = arg;
  }

  execute() {
    this.receiver.executeCommand(this.command, this.arg);
  }

}

class CommandImg extends Command {
  constructor(receiver, src) {
    super(receiver);
    this.src = src;
  }

  execute() {
    this.receiver.insertImage(this.src);
  }

}


class Editor {
  constructor(editorElement) {
    this.editorElement = editorElement;
  }

  executeCommand(command, arg) {
    this.editorElement.document.execCommand(command, false, arg);
  }

  insertImage(src) {
    const img = document.createElement("img");
    img.src = src;
    this.editorElement.document.execCommand("insertHTML", false, img.outerHTML);
  }
}




// prototype------------------------

class CommandPrototype {
  constructor(proto) {
    this.proto = proto;
    return this.clone();
  }

  clone() {
    let command = new Command(this.proto.receiver);
    command.command = this.proto.command;
    command.arg = this.proto.arg;
    command.src = this.proto.src;
    command.execute = this.proto.execute.bind(command);
    return command;
  }
}
//--------------------------------------






//=-------------------- historico --------------

class CommandHistory {
  constructor() {
    this.history = [];
  }

  addCommand(command) {
    this.history.push(command);

  }
  getHistory() {
    return this.history;
  }
  /*

  undo() {
    if (this.history.length > 0) {
      const lastCommand = this.history.pop();
      // Aquí puedes implementar la lógica para deshacer el comando
      console.log("Undo command:", lastCommand);
    }
  }

  redo() {
    if (this.history.length > 0) {
      const lastCommand = this.history.pop();
      lastCommand.execute();
      this.history.push(lastCommand);
    }
  }*/
}
