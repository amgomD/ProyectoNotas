



function abrirmover(id){
    let modalnew = document.getElementById('modalmover');
    modalnew.classList.toggle('open')
    const menu = document.getElementById('menuop2');
    menu.style.display = 'none';
    cargarCarpetas(id);
}

function cerrarmover(){
    let modalnew = document.getElementById('modalmover');
    modalnew.classList.toggle('open')
    const menu = document.getElementById('menuop2');
    menu.style.display = 'none';
}
function cargarCarpetas(nid){

    let carruselcard = document.getElementById("content-carpetas");
    let todosLosDatos = {};
    let menucont = ` `;
       // Recorrer cada clave en localStorage
       for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i); // Obtener la clave
        let valor = localStorage.getItem(clave); // Obtener el valor
        const notaObj = JSON.parse(valor);
        console.log(notaObj)
        if (!notaObj.IsNota && notaObj.id) {
        menucont+= `  
        <div id="${notaObj.id}" class="carpeta">
              <h4 style="color:${notaObj.colorIcon}"  id="icon-carpeta"> <i class="fa-solid fa-folder"></i>
              ${notaObj.nombre}
              </h4>
       </div>
   `
        }
      }



          
      menucont+= `</div>`;

      carruselcard.innerHTML = menucont;


      
const cards = document.querySelectorAll('.carpeta');

cards.forEach(item => {
console.log(nid)
    item.addEventListener('click', function() {
      // Obtener el id del div clickeado 
      const id = this.id;
      console.log(id)
      if(id){
        actualizarIdFolderEnLocalStorage(nid,id)
 
        window.location.href = `Proyectos.html?id=${id}`;
      }
 

    });

  });


}


function actualizarIdFolderEnLocalStorage(id, nuevoIdFolder) {
    let nota = JSON.parse(localStorage.getItem(id));
    if (nota) {
        borrarNotaPorIdFolder(nota.IdFolder,id)
        nota.IdFolder = nuevoIdFolder;
     localStorage.setItem(id, JSON.stringify(nota));

        console.log('IdFolder actualizado:', nota);
    } else {
        console.log('El objeto con ese ID no fue encontrado.');
    }
}


function borrarNotaPorIdFolder(idObjeto, idNotaConNuevoIdFolder) {
    // Obtener el objeto desde localStorage
    let objeto = JSON.parse(localStorage.getItem(idObjeto));
    // Verificar si el objeto y su array de notas existen
    if (objeto && objeto.notas) {
        // Filtrar las notas, dejando fuera la que cambió su IdFolder
        objeto.notas = objeto.notas.filter(nota => nota.id !== idNotaConNuevoIdFolder);
        // Guardar el objeto modificado de nuevo en el localStorage
        localStorage.setItem(idObjeto, JSON.stringify(objeto));
        console.log('Nota eliminada. Array de notas actualizado:', objeto.notas);
    } else {
        console.log('El objeto o el array de notas no fueron encontrados.');
    }
}