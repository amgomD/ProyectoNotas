//---------------------- funcion que utiliza Builder para crear el proyecto

function crearProyecto(){

    let newProyecto = new Proyecto();
    const encabezado = document.getElementById('encabezado').value;
    const prioridad = document.getElementById('prioridad').value;
    const fechapropiedades = document.getElementById('fechapropiedades').innerText; // Asumiendo que la fecha se establecerá como texto
    const descripcion = document.getElementById('descripcion').value;
    const color = document.getElementById('colorPicker').value;
    if (encabezado) {
        newProyecto.setNombre(encabezado).build();
    }
    if (prioridad) {
        newProyecto.setPrioridad(prioridad).build();
    }

    if (fechapropiedades) {
        newProyecto.setFechaCreacion(fechapropiedades).build();
    }

    if (descripcion) {
        newProyecto.setDescripcion(descripcion).build();
    }
    if(color) {
        newProyecto.setcolorIcon(color).build();   
    }else{
        newProyecto.setcolorIcon('#e8e8e8').build();   
    }
    if (selectedCheckboxes.length > 0) {

        selectedCheckboxes.forEach(function(item, index) {
           
            let notaGuardada = localStorage.getItem(item);
            if (notaGuardada) {
              let notaObj = JSON.parse(notaGuardada);
              let nota = new Nota(
                notaObj.id,
                notaObj.titulo,
                notaObj.comentario,
                notaObj.portada,
                notaObj.fecha,
                notaObj.contenido,
                true,
                newProyecto.getId()
              );
              newProyecto.addNota(nota).build();
              guardarNotaLocal(nota); 
       
            }
        });

  }

    if (itemsArray.length > 0) {
        itemsArray.forEach(function(item, index) {
            newProyecto.addEtiqueta(item).build();
        });
      
    }

guardarProyectoEnLocalStorage(newProyecto)
 window.location.href = `inicio.html`;
}

function guardarProyectoEnLocalStorage(Proyecto) {
    let Proyectocreada = Proyecto.build();
    localStorage.setItem(Proyectocreada.id, JSON.stringify(Proyectocreada));
}


//----------------------- funciones del front
function abrir(){
    let modalnew = document.getElementById('modalnew');
    modalnew.classList.toggle('open')
    const menu = document.getElementById('nuevoop');
    menu.style.display = 'none';
    cardsincarpeta();
}
function cerrar(){
    let modalnew = document.getElementById('modalnew');
    modalnew.classList.toggle('open')
    const menu = document.getElementById('nuevoop');
    menu.style.display = 'none';
}

let fechapropiedades = document.getElementById('fechapropiedades');
const date = new Date();
const options = {
    weekday: 'long', // lunes
    year: 'numeric', // 2024
    month: 'long',   // octubre
    day: 'numeric',  // 14
    hour: 'numeric', // 09
    minute: 'numeric', // 29
    hour12: true // Formato de 12 horas con AM/PM
};

const formattedDate = date.toLocaleString('es-CO', options);
fechapropiedades.innerHTML = formattedDate


let itemsArray = [];

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
}

// Obtén los elementos del DOM
const folderIcon = document.getElementById('foldericon');
const colorPicker = document.getElementById('colorPicker');

// Escucha el clic en el div con id "foldericon" para abrir el selector de color
folderIcon.addEventListener('click', function() {
    colorPicker.click(); // Activa el selector de color oculto
});

// Cambia el color de la fuente del div cuando se selecciona un color
colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    folderIcon.style.color = selectedColor; // Cambia el color de la fuente
});

let selectedCheckboxes = [];


function cardsincarpeta(){
  let carruselcard = document.getElementById("cardsincarpeta");

  let todosLosDatos = {};
  let menucont = ` `;
  selectedCheckboxes = [];
     // Recorrer cada clave en localStorage
     for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i); // Obtener la clave
      let valor = localStorage.getItem(clave); // Obtener el valor
      const notaObj = JSON.parse(valor);

      if (!notaObj.IdFolder && notaObj.IsNota) {
      menucont+= `  <div  class="cardnew">
                  <div style="background-image: url(${notaObj.portada});" class="portada-cardnew">
                  </div>
                  <div class="cardnew-Titulo">
                   <p> ${notaObj.titulo}</p> 
                  </div>
                  <div class="cardnew-pie">
                      <img src="img/perfil.webp" alt="fotoperfil">
                      <p> ${notaObj.fecha}</p>
                        <input type="checkbox" id="${notaObj.id}">
                  </div>
              </div>
 `
      }
    }


        
        menucont+= `</div>`;

        carruselcard.innerHTML = menucont;
 
        const cardsnew = document.querySelectorAll('.cardnew');
        // Recorre todas las tarjetas y añade un listener de clic a cada una
        cardsnew.forEach(function(card) {
            card.addEventListener('click', function() {
                // Encuentra el checkbox dentro de la tarjeta que fue clickeada
                const checkbox = card.querySelector('input[type="checkbox"]');
                 checkbox.checked = !checkbox.checked;
                     // Si está marcado, lo agrega al array; si no, lo elimina
        if (checkbox.checked) {
          selectedCheckboxes.push(checkbox.id);
      } else {
          // Elimina el id del array si el checkbox se desmarca
          selectedCheckboxes = selectedCheckboxes.filter(id => id !== checkbox.id);
      }
     });
        });
}
