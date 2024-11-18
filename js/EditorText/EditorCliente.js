
const editor = new Editor(editortext);
const history = new CommandHistory();

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
      const commandInstance = new CommandArgs(editor, command, arg);
      console.log(buttonElement);
      new ButtonInvoker(buttonElement, commandInstance,history);
    }
  });
  
  // Configurar comando con argumento para el input de color
  const colorInput = document.querySelector('input.input2');
  if (colorInput) {
    colorInput.addEventListener('change', () => {
     const colorCommand = new CommandArgs(editor, 'foreColor', colorInput.value);
     new ButtonInvokerArgs(colorInput, colorCommand,history);
    });
  }
  
  // Configurar comando con argumento para el select de tamaño de fuente
  const fontSizeSelect = document.querySelector('select.fontSizeSelect');
  if (fontSizeSelect) {
    fontSizeSelect.addEventListener('change', () => {
      const fontSizeCommand = new CommandArgs(editor, 'fontSize', fontSizeSelect.value);
      new ButtonInvokerArgs(fontSizeSelect, fontSizeCommand,history);

    });
  }
  
  // Configurar comando con argumento para crear enlace
  const createLinkButton = document.querySelector('button.createLink');
  if (createLinkButton) {
    createLinkButton.addEventListener('click', () => {
      const url = prompt('Ingresa una URL', '');
      if (url) {
        const createLinkCommand = new CommandArgs(editor, 'createLink', url);
        new ButtonInvokerArgs(createLinkButton, createLinkCommand,history);
      }
    });
  }
  
  // Configurar comando para insertar imagen
  const insertImageButton = document.querySelector('button.image');
  if (insertImageButton) {
    insertImageButton.addEventListener('click', () => {
      const src = prompt('Ingresa la url de la imgaen', '');
      if (src) {
        const insertImageCommand = new CommandImg(editor, src);
        new ButtonInvokerArgs(insertImageButton, insertImageCommand,history);
      }
    });
  }


  

const menuButton = document.getElementById('historial');
menuButton.addEventListener('click', mostrarMenuhisto);
let menuhisto = document.getElementById('sidemenuhisto');
    // Función para mostrar el menú lateral
    function mostrarMenuhisto() {
   let directorio = document.getElementById('directorio');
      menuhisto.style.right = "0"; // Desliza el menú hacia la vista


      let conten = `             
      <div class= " contenedor historico" >  <h2 class="notifications-title">Estados de la nota</h2>
       `;



        const notasAnteriores = history.getNotaHistory();
        notasAnteriores.forEach(notita => {
         const { nota: comentario,id,titulo,fecha } = notita;
 
         conten += `
      <div  class="caja-cambio" data-idnota="${id}" > 
         <div class="notification">
            <div class="notification-header">
                <div class="user-info">
                    <img src="img/perfil.webp" width="30px" alt="">
                    <span>${titulo}</span>
                </div>
                <span id="fechaedit" class="notification-time">${fecha}  - ${directorio.textContent}</span>
            </div>
         
            <div class="status-change">
              <span id="idnota" class="status-badge notastate">${id}</span>
            </div>
        </div>
        </div> 
         
      

        `;
        });

           conten += ` </div>`


           
  conten += ` 

             
         <div class= " contenedor historico" >  <h2 class="notifications-title">Comandos aplicados</h2>
          `;
   


           const commands = history.getHistory();
           commands.forEach(command => {
            const { command: commandName, arg } = command;
            let argu = arg;
               if(argu == null){
                argu = "";
               }
            conten += `
         
            
                        <div class="caja-cambio">
            <div class="notification">
               <div class="notification-header">
                   <div class="user-info">
                       <img src="img/perfil.webp" width="30px" alt="">
                       <span>Comando: </span>
                   </div>
                   <span id="fechaedit" class="notification-time">Hace un momento  - ${directorio.textContent}</span>
               </div>
            
               <div class="status-change">
                 <span id="commando" class="status-badge created">${commandName}</span>
                 <span class="status-arrow">→</span>
                 <span id="arg" class="status-badge pending">${argu}</span>
               </div>
           </div>
           </div> 
            
         
   
           `;
           });

              conten += ` </div>`
           menuhisto.innerHTML = conten;

         

// Agregar un manejador de eventos para detectar clics en las notas
menuhisto.addEventListener('click', (event) => {
  let edicaja = document.getElementById("editortext");
  // Buscar el elemento más cercano con la clase `caja-cambio`
  const cajaCambio = event.target.closest('.caja-cambio');
  if (cajaCambio) {
    const idnota = cajaCambio.getAttribute('data-idnota');
    const notaEncontrada = notasAnteriores.find(nota => nota.id === idnota);
    if (notaEncontrada) {
      console.log(`Nota encontrada:`, notaEncontrada.contenido);
      const iframeDocument = edicaja.contentDocument;
      const contentDiv = iframeDocument.getElementById('bodyy');
      contentDiv.innerHTML=  notaEncontrada.contenido;

      
      nota.setContenido(contentDiv.innerHTML);
      guardarNotaLocal(nota);

      
    } else {
      alert('No se encontro version');
    }
  }

  
});

  }




















  // Función para ocultar el menú lateral
  function ocultarMenuhisto() {
    menuhisto.style.right = "-590px"; // Desliza el menú hacia fuera de la vista
  }

  // Mostrar el menú cuando el cursor está sobre el ícono o el menú
  menuButton.addEventListener("mouseenter", mostrarMenuhisto);

   
  menuhisto.addEventListener("mouseleave", function() {
    // Retrasar un poco para dar tiempo al usuario de mover el cursor al ícono
    setTimeout(function() {
        if (!menuhisto.matches(':hover') && !menuButton.matches(':hover')) {
          ocultarMenuhisto();
        }
    }, 200);
});