
   
cargarnotasinicio();
function cargarnotasinicio(){
    let carruselcard = document.getElementById("carruselcard");

    let todosLosDatos = {};
    let menucont = ` `;
  
       // Recorrer cada clave en localStorage
       for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i); // Obtener la clave
        let valor = localStorage.getItem(clave); // Obtener el valor
        const notaObj = JSON.parse(valor);
        
        menucont+= `  <div id="${notaObj.id}" class="card">
                    <div class="portada-card">

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


          
          menucont+= `</div>`;

          carruselcard.innerHTML = menucont;


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
  });
