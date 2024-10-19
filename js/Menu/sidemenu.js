

document.addEventListener("DOMContentLoaded", function() {
    const barraSuperior = document.getElementById("barraSuperior");
    const contenidoPrincipal = document.getElementById("contenidoPrincipal");
    const encabezado = document.getElementById("encabezado");
    const titulo = document.getElementById("titulo");
    const portada = document.getElementById("portada");

    cargarnotas();
    
    

function cargarnotas(){
    let bmenuLateral = document.getElementById("menu-lateral");

    let todosLosDatos = {};
    let menucont =
    `      
    <div class="menu-Content">
        <div class="perfilnuevo">
           <div class="perIzq">
           </div>
           <div class="perDer">
   
            <p id="username">ANDRES GOMEZ Niño</p>
           <i style="cursor:pointer;" onclick="cuenta()" class="fa-solid fa-pen-to-square"></i>
           </div>
       

        </div>


        <div class="items">
            <i class=" fa-solid fa-magnifying-glass"></i>
            Buscar
        </div>
        <div id="inicio" class="items">
            <i class="fa-solid fa-house"></i> Inicio
        </div>
        <div onclick="config()" id="configuracion" class="items">
            <i class="fa-solid fa-gear"></i>Configuraciones
        </div>

       
        <div class="tituloitem">
            Privado
        </div>






          `;
       // Recorrer cada clave en localStorage
       for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i); // Obtener la clave
        let valor = localStorage.getItem(clave); // Obtener el valor
        const notaObj = JSON.parse(valor);
        if(notaObj.IsNota){
            menucont+= ` <div id="${notaObj.id}" class="items">
            <img style="border-radius:500px;" src="${notaObj.portada}" width="15px"
                alt="icon" id="icon"> ${notaObj.titulo}
        </div>
       `
        }
  
      }


          
          menucont+= `</div>
          
          
          `;

          bmenuLateral.innerHTML = menucont;


}




const items = document.querySelectorAll('.items');
items.forEach(item => {
    item.addEventListener('click', function() {
      // Obtener el id del div clickeado
      const id = this.id;
      if(id){
        if(id == "inicio"){
            window.location.href = `inicio.html`;
          }else{
            if(id == "configuracion"){

            }else{
          // Redirigir a otra página pasando el id como parámetro
          window.location.href = `Nota.html?id=${id}`;
        }
    }
}
 

    });
  });
    



    function ajustarPadding() {
        const alturaBarra = barraSuperior.offsetHeight;
        contenidoPrincipal.style.paddingTop = alturaBarra + "px";
    }

    ajustarPadding(); // Ajusta el padding cuando la página se carga

    // Si la barra puede cambiar de tamaño después de la carga (por ejemplo, en respuesta a eventos de la página), puedes ajustar nuevamente
    window.addEventListener("resize", ajustarPadding);


    const menuIcon = document.getElementById("Menu");
    const menuLateral = document.getElementById("menu-lateral");

    // Función para mostrar el menú lateral
    function mostrarMenu() {
        menuLateral.style.left = "0"; // Desliza el menú hacia la vista
    }

    // Función para ocultar el menú lateral
    function ocultarMenu() {
        menuLateral.style.left = "-590px"; // Desliza el menú hacia fuera de la vista
    }

    // Mostrar el menú cuando el cursor está sobre el ícono o el menú
    menuIcon.addEventListener("mouseenter", mostrarMenu);
    menuLateral.addEventListener("mouseenter", mostrarMenu);

    // Ocultar el menú cuando el cursor deja el ícono o el menú
    menuIcon.addEventListener("mouseleave", function() {
        // Retrasar un poco para dar tiempo al usuario de mover el cursor al menú
        setTimeout(function() {
            if (!menuLateral.matches(':hover') && !menuIcon.matches(':hover')) {
                ocultarMenu();
            }
        }, 200);
    });
   
    menuLateral.addEventListener("mouseleave", function() {
        // Retrasar un poco para dar tiempo al usuario de mover el cursor al ícono
        setTimeout(function() {
            if (!menuLateral.matches(':hover') && !menuIcon.matches(':hover')) {
                ocultarMenu();
            }
        }, 200);
    });
});
