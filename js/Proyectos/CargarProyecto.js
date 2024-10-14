
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
   localStorage.removeItem(newProyecto.id);
    window.location.href = `inicio.html`;
  });
  cargarnotasinicio();
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