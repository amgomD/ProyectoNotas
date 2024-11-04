

configurarComandos();

function configurarComandos(){
// Cliente
const editor = new Editor(document.getElementById('editor'));

// Configurar comandos y botones
const commands = [
    { command: 'underline', selector: 'button.underline' },
    { command: 'italic', selector: 'button.italic' },
    { command: 'justifyLeft', selector: 'button.justifyLeft' },
    { command: 'justifyFull', selector: 'button.justifyFull' },
    { command: 'justifyCenter', selector: 'button.justifyCenter' },
    { command: 'justifyRight', selector: 'button.justifyRight' },
    { command: 'insertUnorderedList', selector: 'button.insertUnorderedList' },
    { command: 'insertOrderedList', selector: 'button.insertOrderedList' },
    { command: 'bold', selector: 'button.bold' },
    { command: 'insertImage', selector: 'button.image' }, // Cambiado a 'insertImage' para evitar duplicación
    { command: 'formatBlock', arg: 'H1', selector: 'button.formatBlockH1' },
    { command: 'formatBlock', arg: 'H2', selector: 'button.formatBlockH2' },
    { command: 'formatBlock', arg: 'H3', selector: 'button.formatBlockH3' },
    { command: 'formatBlock', arg: 'H4', selector: 'button.formatBlockH4' },
    { command: 'formatBlock', arg: 'H5', selector: 'button.formatBlockH5' },
    { command: 'copy', selector: 'button.copy' },
    { command: 'cut', selector: 'button.cut' },
  ];


commands.forEach(({ command, arg, selector }) => {
  const buttonElement = document.querySelector(selector);
  if (buttonElement) {
    const commandInstance = new Command(editor, command, arg);
    new ButtonInvoker(buttonElement, commandInstance);
  }
});

// Configurar comando con argumento
const colorInput = document.querySelector('input.input2');
if (colorInput) {
  colorInput.addEventListener('change', () => {
    const colorCommand = new Command(editor, 'foreColor', colorInput.value);
    colorCommand.execute();
  });
}

const fontSizeSelect = document.querySelector('select.fontSizeSelect');
if (fontSizeSelect) {
  fontSizeSelect.addEventListener('change', () => {
    const fontSizeCommand = new Command(editor, 'fontSize', fontSizeSelect.value);
    fontSizeCommand.execute();
  });
}
const createLinkButton = document.querySelector('button.createLink');
if (createLinkButton) {
  createLinkButton.addEventListener('click', () => {
    const url = prompt('Enter a URL', 'http://');
    if (url) {
      const createLinkCommand = new Command(editor, 'createLink', url);
      createLinkCommand.execute();
    }
  });
}
}
