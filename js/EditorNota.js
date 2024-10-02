
const params = new URLSearchParams(window.location.search);
const valorParametro = params.get('id');
let encabezado = document.getElementById("encabezado");
let descripcion = document.getElementById("descripcion");
let portada = document.getElementById("portada");
let titulo2 = document.getElementById("titulo");
let fecha = document.getElementById("fecha");
const icono =document.getElementById('iconotitulo') ;
let iframe = document.getElementById('editortext');
    

const notaGuardada = localStorage.getItem(valorParametro);

// 2. Comprobar si el dato existe
if (notaGuardada) {
  // 3. Convertir el JSON en un objeto JavaScript
  const notaObj = JSON.parse(notaGuardada);

  // 4. Crear una instancia de la clase Nota usando el objeto
  const nota = new Nota(
    notaObj.id,
    notaObj.titulo,
    notaObj.comentario,
    notaObj.portada,
    notaObj.fecha,
    notaObj.contenido
  );

encabezado.value = nota.titulo;
titulo.innerHTML = icono.innerHTML+nota.titulo;
descripcion.value = nota.comentario;
portada.style.backgroundImage = "url('"+nota.portada+"')";
fecha.innerHTML = "Editado "+nota.fecha;

encabezado.addEventListener('input', function(event) {
    const valor = event.target.value;
    nota.setTitulo(valor);
    guardarNotaLocal(nota); 
  });

  descripcion.addEventListener('input', function(event) {
    const valor = event.target.value;
    nota.setComentario(valor);
    descripcion.style.height = 'auto'; // Reiniciar la altura para recalcular el contenido
    descripcion.style.height = descripcion.scrollHeight + 'px';
    guardarNotaLocal(nota); 
  });


// Esperar a que el contenido del iframe se cargue completamente
iframe.addEventListener('load', function() {
    const iframeDocument = iframe.contentDocument;
    const contentDiv = iframeDocument.getElementById('bodyy');
    let escribe = iframeDocument.getElementById('escribe');
    const headingButton = document.getElementById('heading');
    const menu = document.getElementById('menuheading');

    headingButton.addEventListener('mouseover', function() {
        menu.style.display = 'block';
        const rect = headingButton.getBoundingClientRect();

    });

    headingButton.addEventListener('mouseout', function(event) {
        // Detener el evento de ocultar el menú si el cursor está sobre el menú
        if (!menu.contains(event.relatedTarget)) {
            menu.style.display = 'none';
        }
    });

    menu.addEventListener('mouseover', function() {
        menu.style.display = 'block';
    });

    menu.addEventListener('mouseout', function(event) {
        // Ocultar el menú cuando el mouse sale del menú
        if (!headingButton.contains(event.relatedTarget)) {
            menu.style.display = 'none';
        }
    });

    contentDiv.innerHTML = nota.contenido;
    // Agregar el event listener para mousemove
    contentDiv.addEventListener('contextmenu', function(event) {
             event.preventDefault();  // Previene el menú contextual por defecto del navegador
        
               popupMenu.style.display = 'block';
                          // Posición del ratón dentro del iframe
                          const mouseX = event.clientX;
                          const mouseY = event.clientY;
      
                          // Posición del iframe en la ventana del navegador
                          const iframeRect = iframe.getBoundingClientRect();
      
                          // Calcular la posición total del ratón
                          const totalMouseX = mouseX + iframeRect.left;
                          const totalMouseY = mouseY + iframeRect.top+10;
            popupMenu.style.left = `${totalMouseX}px`;
            popupMenu.style.top = `${totalMouseY}px`;
    });

    contentDiv.addEventListener('click', function(event) {
        const selection = iframeDocument.getSelection().toString().trim();
        let timer;
  
    
 
        if(selection){
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(function() {
            popupMenu.style.display = 'block';
            // Posición del ratón dentro del iframe
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Posición del iframe en la ventana del navegador
            const iframeRect = iframe.getBoundingClientRect();

            // Calcular la posición total del ratón
            const totalMouseX = mouseX + iframeRect.left;
            const totalMouseY = mouseY + iframeRect.top+10;
popupMenu.style.left = `${totalMouseX}px`;
popupMenu.style.top = `${totalMouseY}px`;
}, 300); 
        }else{
            popupMenu.style.display = 'none';
            escribe = iframeDocument.getElementById('escribe');
            escribe.remove();
        }
 
    });

    contentDiv.addEventListener('input', function() {
        popupMenu.style.display = 'none';
  
        if (contentDiv.textContent.trim() === '') {
            contentDiv.innerHTML = '<span id="escribe" style="color: gray;">Escribe aquí...</span>';
        }else{
            escribe = iframeDocument.getElementById('escribe');
            if(escribe){
             escribe.remove();
            }
      
        }

        nota.setContenido(contentDiv.innerHTML);
        guardarNotaLocal(nota); 
 
    });





});


} else {
  console.log('No hay notas guardadas en el localStorage.');
}




