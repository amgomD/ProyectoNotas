// Receptor
class Editor {
    constructor(editorElement) {
      this.editorElement = editorElement;
    }
  
    executeCommand(command, arg) {
        editortext.document.execCommand(command, false, arg);
    }
  }
  
  // Comando
  class Command {
    constructor(receiver, command, arg = null) {
      this.receiver = receiver;
      this.command = command;
      this.arg = arg;
    }
  
    execute() {
      this.receiver.executeCommand(this.command, this.arg);
    }
  }
  
  // Invocador
  class ButtonInvoker {
    constructor(buttonElement, command) {
      this.buttonElement = buttonElement;
      this.command = command;
      this.buttonElement.addEventListener('click', () => this.executeCommand());
    }
  
    executeCommand() {
      this.command.execute();
    }
  }