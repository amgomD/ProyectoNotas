
function cerrar(){
    let modalnew = document.getElementById('modalnew');
    modalnew.classList.toggle('open')
    const menu = document.getElementById('nuevoop');
    menu.style.display = 'none';
}

const params = new URLSearchParams(window.location.search);
const valorParametro = params.get('id');
let encabezado = document.getElementById("encabezado");
let descripcion = document.getElementById("descripcion");
let prioridad = document.getElementById('prioridad');
let fechapropiedades = document.getElementById('fechapropiedades'); // Asumiendo que la fecha se establecerá como texto
let result = document.getElementById('result'); // Asumiendo que la fecha se establecerá como texto
let fecha = document.getElementById("fecha");
const Proyectoguardado = localStorage.getItem(valorParametro);

// 2. Comprobar si el dato existe
if (Proyectoguardado) {
  // 3. Convertir el JSON en un objeto JavaScript
  const proyecto = JSON.parse(Proyectoguardado);

  // 4. Crear una instancia de la clase Nota usando el objeto
  let newProyecto = new Proyecto();
  newProyecto.setId(valorParametro).build();
    newProyecto.setNombre(proyecto.nombre).build();
    newProyecto.setPrioridad(proyecto.prioridad).build();
    newProyecto.setFechaCreacion(proyecto.fechaCreacion).build();
    newProyecto.setDescripcion(proyecto.descripcion).build();

if (proyecto.colorIcon) {
    newProyecto.setcolorIcon(proyecto.colorIcon).build();   
}else{
    newProyecto.setcolorIcon('#e8e8e8').build();   
}
newProyecto.setNota(proyecto.notas).build();
newProyecto.setEtiqueta(proyecto.etiquetas).build();

cargarnotasinicio();

let itemsArray = newProyecto.etiquetas;
encabezado.value = newProyecto.nombre;
titulo.innerHTML = newProyecto.nombre;
prioridad.value = newProyecto.prioridad;
descripcion.value = newProyecto.descripcion;
fecha.innerHTML = "Editado "+newProyecto.fechaCreacion;
fechapropiedades.innerHTML = newProyecto.fechaCreacion;

itemsArray.forEach(function(item, index) {
    const itemElement = document.createElement('span');
    itemElement.textContent = item;
    itemElement.className = 'etiquetas'; // Añade una clase CSS opcional
    result.appendChild(itemElement);
});

encabezado.addEventListener('input', function(event) {
    const valor = event.target.value;
    newProyecto.setNombre(valor);
    guardarProyectoEnLocalStorage(newProyecto); 
  });

  prioridad.addEventListener('change',function(event){
    const valor = event.target.value;
    newProyecto.setPrioridad(valor);
    guardarProyectoEnLocalStorage(newProyecto)
  });

  descripcion.addEventListener('input', function(event) {
    const valor = event.target.value;
    newProyecto.setDescripcion(valor);
    descripcion.style.height = 'auto'; // Reiniciar la altura para recalcular el contenido
    descripcion.style.height = descripcion.scrollHeight + 'px';
    guardarProyectoEnLocalStorage(newProyecto); 
  });
 


  papelera.addEventListener('click',function(event) {
    eliminarnotas(proyecto);
    localStorage.removeItem(newProyecto.id);
   window.location.href = `inicio.html`;    
  });

// Escucha el evento 'keypress' en el input
document.getElementById('inputText').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        let inputValue = event.target.value;
        if (inputValue.trim() !== "") {
            itemsArray.push(inputValue);
            event.target.value = '';
            updateHTML();
        }
    }
});

document.getElementById('nuevo').addEventListener('click',function(event) {
    nucrearnota(newProyecto);
}
)

// Función para actualizar el HTML
function updateHTML() {
    const resultDiv = document.getElementById('result');
    
    // Limpia el contenido previo del div
    resultDiv.innerHTML = '';

    // Recorre el array y agrega cada valor como un nuevo elemento HTML
    itemsArray.forEach(function(item) {
        const itemElement = document.createElement('span');
        itemElement.textContent = item;
        itemElement.className = 'etiquetas'; // Añade una clase CSS opcional
        resultDiv.appendChild(itemElement);
    });
    newProyecto.setEtiqueta(itemsArray);
    guardarProyectoEnLocalStorage(newProyecto); 
}


} else {
    window.location.href = `inicio.html`;
}



function guardarProyectoEnLocalStorage(Proyecto) {
    let Proyectocreada = Proyecto;
    localStorage.setItem(valorParametro, JSON.stringify(Proyecto));
}



function cargarnotasinicio(){
    let carruselcard = document.getElementById("carruselcard");

    let todosLosDatos = {};
    let menucont = ` `;
  
       // Recorrer cada clave en localStorage
       for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i); // Obtener la clave
        let valor = localStorage.getItem(clave); // Obtener el valor
       
        const notaObj = JSON.parse(valor);
        console.log(notaObj)
        if (notaObj.IsNota && notaObj.IdFolder == valorParametro) {
        menucont+= `  <div id="${notaObj.id}" class="card">
                    <div style="background-image: url(${notaObj.portada});" class="portada-card">
            
                    </div>
                    <div class="card-Titulo">
                     <p> ${notaObj.titulo}</p> 
                    </div>
                    <div class="card-pie">
                        <img src="img/perfil.webp" alt="fotoperfil">
                        <p> ${notaObj.fecha}</p>
                    </div>
                </div>
   `
        }
      }



          
      menucont+= `</div>`;

      carruselcard.innerHTML = menucont;
}




function nucrearnota(newProyecto){
    let id = Math.random().toString(36).substr(2, 9);
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 (enero) a 11 (diciembre)
const dia = fechaActual.getDate().toString().padStart(2, '0');

    let nuevaNota = new Nota(id,"",
        "","../img/fondo1.png",`${dia}/${mes}/${año}`,"",true,valorParametro);
        nuevaNota.setFolder(valorParametro);
        newProyecto.addNota(nuevaNota).build();
        guardarProyectoEnLocalStorage(newProyecto); 
        guardarNotaLocal(nuevaNota); 
        window.location.href = `Nota.html?id=${encodeURIComponent(nuevaNota.id)}`;

}



const cards = document.querySelectorAll('.card');
cards.forEach(item => {
    item.addEventListener('click', function() {
      // Obtener el id del div clickeado 
      const id = this.id;
      if(id){
        if(id == "inicio"){
            window.location.href = `inicio.html`;
          }else{
          // Redirigir a otra página pasando el id como parámetro
          window.location.href = `Nota.html?id=${id}`;
          }
      }
 

    });

    item.addEventListener('contextmenu', function(event) {
      const id = this.id;
      event.preventDefault();  // Previene el menú contextual por defecto del navegador
      const menu = document.getElementById('menuop2');
      menu.style.display = 'block';
      menu.style.left = `${event.pageX}px`;
      menu.style.top = `${event.pageY}px`;
      const papelera = document.querySelectorAll('#papelera');
      papelera.forEach(nitem => {
        nitem.addEventListener('click', (event) => {
           localStorage.removeItem(id);
           location.reload();
          });
      });

      const movera = document.querySelectorAll('#movera');
      movera.forEach(nitem => {
        nitem.addEventListener('click', (event) => {
            abrirmover(id)
          });
      });
       

  });
 

  document.addEventListener('click', (event) => {
    const menu = document.getElementById('menuop2');
    if (!menu.contains(event.target) && !item.contains(event.target)) {
        menu.style.display = 'none';
    }
  });

  });


  document.getElementById('opciones').addEventListener('click', function(event) {
    const menu = document.getElementById('menuop');
    console.log('jols')
    // Obtener la posición del div 'opciones'
    const rect = this.getBoundingClientRect();
    

    // Mostrar u ocultar el menú
    menu.classList.add('mostrar');
    menu.classList.remove('ocultar');

});

  document.addEventListener('click', (event) => {
    const menu = document.getElementById('menuop');
    const opciones = document.getElementById('opciones');
    if (!menu.contains(event.target) && !opciones.contains(event.target)) {
        menu.classList.add('ocultar');
    }
  });


function eliminarnotas(proyecto){
    console.log( proyecto.notas);
    proyecto.notas.forEach(function(item, index) {
        localStorage.removeItem(item.id);  
    });
    
}

