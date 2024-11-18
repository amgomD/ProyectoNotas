
const params = new URLSearchParams(window.location.search);
const valorParametro = params.get('id');
let encabezado = document.getElementById("encabezado");
let descripcion = document.getElementById("descripcion");
let portada = document.getElementById("portada");
let titulo2 = document.getElementById("titulo");
let fecha = document.getElementById("fecha");
const icono =document.getElementById('iconotitulo') ;
let iframe = document.getElementById('editortext');
let copiarNota = document.getElementById('CopiarNota');
let copiar = document.getElementById('copiar');
let editarPortada = document.getElementById('EditarPortada');
let directorio= document.getElementById('directorio');
const notaGuardada = localStorage.getItem(valorParametro);

if (notaGuardada) {
  // 3. Convertir el JSON en un objeto JavaScript
  const notaObj = JSON.parse(notaGuardada);

  // 4. Crear una instancia de la clase Nota usando el objeto
  window.nota = new Nota(
    notaObj.id,
    notaObj.titulo,
    notaObj.comentario,
    notaObj.portada,
    notaObj.fecha,
    notaObj.contenido,
    true,
    notaObj.IdFolder
  );

encabezado.value = nota.titulo;
titulo.innerHTML = icono.innerHTML+nota.titulo;
descripcion.value = nota.comentario;
portada.style.backgroundImage = "url('"+nota.portada+"')";
fecha.innerHTML = "Editado "+nota.fecha;
traerDirectorio(nota.IdFolder,nota.titulo);
encabezado.addEventListener('input', function(event) {
    const valor = event.target.value;
    nota.setTitulo(valor);
    guardarNotaLocal(nota); 
  });

  directorio.addEventListener('click', function(event) {
    window.location.href = `Proyectos.html?id=${nota.IdFolder}`;

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

copiarNota.addEventListener('click',function(event) {
    let notas = new NotaPrototype(nota); 
    guardarNotaLocal(notas); 
    window.location.href = `Nota.html?id=${encodeURIComponent(notas.id)}`;
  });

  copiar.addEventListener('click',function(event) {
    let notas = new NotaPrototype(nota); 
    guardarNotaLocal(notas); 
    window.location.href = `Nota.html?id=${encodeURIComponent(notas.id)}`;
  });
  
  papelera.addEventListener('click',function(event) {
   localStorage.removeItem(nota.id);
    window.location.href = `inicio.html`;
  });
  
  editarPortada.addEventListener('click',function(event) {
    const galeria = document.getElementById('galeria');
    galeria.classList.toggle('mostrargaleria');

   });




 // Arreglo con los nombres de las imágenes en la carpeta "img/fondos"
const imagenes = [
    "fondo2.jpg",
    "fondo3.jpg",
    "fondo4.jpg",
    "fondo5.jpg", 
    "fondo6.jpg",
    "fondo67.jpg"
    
    // Agrega más nombres de imágenes según sea necesario
  ];
  
  // Seleccionar el contenedor de la galería
  const galeria = document.getElementById('galeria');
  
  // Recorrer el arreglo de imágenes y crear elementos <img> dinámicamente
  imagenes.forEach(imagen => {
    // Crear un nuevo elemento <img>
    const imgElement = document.createElement('img');
    // Asignar la ruta correcta de la imagen
    imgElement.src = `img/fondos/${imagen}`;
  
    imgElement.addEventListener('click', () => {
      const relativePath = '../'+imgElement.src.split(window.location.origin + '/')[1];
      portada.style.backgroundImage = "url('"+relativePath+"')";
       nota.setPortada(relativePath);
       guardarNotaLocal(nota); 
       galeria.classList.remove('mostrargaleria');
    });
  
    // Agregar el <img> a la galería
    galeria.appendChild(imgElement);
  });

  document.addEventListener('click', (event) => {
    const galeria = document.getElementById('galeria');
    if (!galeria.contains(event.target) && !editarPortada.contains(event.target)) {
        galeria.style.display = 'none'
        galeria.classList.remove('mostrargaleria');
    }
  });






} else {
    window.location.href = `inicio.html`;
}




function traerDirectorio(id,titulo){
  let objeto = JSON.parse(localStorage.getItem(id));

  // Verificar si el objeto existe
  if (objeto) {
      const nombre = objeto.nombre;
      const id = objeto.id;
      directorio.innerHTML = nombre+' / '+titulo
}

}


