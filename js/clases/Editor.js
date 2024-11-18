
class ButtonInvoker {
  constructor(buttonElement, command, history) {
    this.buttonElement = buttonElement;
    this.command = command;
    this.history = history;
    this.buttonElement.addEventListener("click", () => this.executeCommand());
  }

  executeCommand() {
    this.history.addCommand(this.command, new NotaPrototype(nota));
    this.command.execute();
  }
}


class ButtonInvokerArgs {
  constructor(buttonElement, command, history) {
    this.buttonElement = buttonElement;
    this.command = command;
    this.history = history;
     this.executeCommand();
  }

  executeCommand() {
    this.history.addCommand(this.command, new NotaPrototype(nota));
    this.command.execute();
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




//=-------------------- historico --------------

class CommandHistory {
  constructor() {
    this.history = [];
    this.estadoAnt =[];
  }

  addCommand(command,antnota) {
    this.history.unshift(command);
    this.estadoAnt.unshift(antnota)
  }

  getHistory() {
    return this.history;
  }
  getNotaHistory(){
    return this.estadoAnt;

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
