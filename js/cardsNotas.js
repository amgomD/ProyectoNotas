
   
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

    item.addEventListener('contextmenu', function(event) {
      const id = this.id;
      event.preventDefault();  // Previene el menú contextual por defecto del navegador
      console.log('Hola'+id);
      const menu = document.getElementById('menuop2');
      menu.style.display = 'block';
      menu.style.left = `${event.pageX}px`;
      menu.style.top = `${event.pageY}px`;
      const papelera = document.getElementById('papelera');
      papelera.addEventListener('click', (event) => {
        const id = this.id;
        console.log(id);
        localStorage.removeItem(id);
     window.location.href = `inicio.html`;
      });

  });
 



  document.addEventListener('click', (event) => {
    const menu = document.getElementById('menuop2');
    if (!menu.contains(event.target) && !item.contains(event.target)) {
        menu.style.display = 'none';
    }
  });



  });





 