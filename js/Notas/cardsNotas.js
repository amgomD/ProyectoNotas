
   
cargarnotasinicio();
cargarProyectos();
function cargarnotasinicio(){
    let carruselcard = document.getElementById("carruselcard");

    let todosLosDatos = {};
    let menucont = ` `;
  
       // Recorrer cada clave en localStorage
       for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i); // Obtener la clave
        let valor = localStorage.getItem(clave); // Obtener el valor
        const notaObj = JSON.parse(valor);
        if (notaObj.IsNota) {
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

function cargarProyectos(){
  let carruselcard = document.getElementById("carruselProyectos");

  let todosLosDatos = {};
  let menucont = ` `;

     // Recorrer cada clave en localStorage
     for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i); // Obtener la clave
      let valor = localStorage.getItem(clave); // Obtener el valor
      const notaObj = JSON.parse(valor);
      if (!notaObj.IsNota) {
      menucont+= `  <div style="color:${notaObj.colorIcon}"  id="${notaObj.id}" class="folder">
                 <i class="nfolder fa-solid fa-folder"></i>
            <div class="folder-Titulo">
                   <p> ${notaObj.nombre}</p> 
                  </div>
                  <div class="folder-pie">
                      <img src="img/perfil.webp" alt="fotoperfil">
                      <p> ${notaObj.fechaCreacion}</p>
                  </div>
              </div>
 `
      }
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

      const movera = document.querySelectorAll('#movera');
      movera.forEach(nitem => {
        nitem.addEventListener('click', (event) => {
          abrirmover(id)
          });
      });


  });
 



  document.addEventListener('click', (event) => {
    const menu = document.getElementById('menuop2');
    const divs = document.querySelectorAll('#compartir');
    let clickedInside = false; 
    
    if (!menu.contains(event.target) && !item.contains(event.target)) {
        menu.style.display = 'none';
    }
    divs.forEach(function(div) {
      if (div.contains(event.target)) {
          clickedInside = true;
      }
  });
    if (!clickedInside) {
      const menu = document.getElementById('nuevoop');
      menu.style.display = 'none';
    
    }


  });



  });


  const folders = document.querySelectorAll('.folder');
  folders.forEach(item => {
      item.addEventListener('click', function() {
        // Obtener el id del div clickeado
        const id = this.id;
        if(id){
          if(id == "inicio"){
              window.location.href = `inicio.html`;
            }else{
            // Redirigir a otra página pasando el id como parámetro
            window.location.href = `Proyectos.html?id=${id}`;
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
      const divs = document.querySelectorAll('#compartir');
      let clickedInside = false; 
      
      if (!menu.contains(event.target) && !item.contains(event.target)) {
          menu.style.display = 'none';
      }
      divs.forEach(function(div) {
        if (div.contains(event.target)) {
            clickedInside = true;
        }
    });
      if (!clickedInside) {
        const menu = document.getElementById('nuevoop');
        menu.style.display = 'none';
      
      }
  
  
    });
  
  
  
    });
  
  const divs = document.querySelectorAll('#compartir');
    // Añadir evento de clic a cada div
    divs.forEach((div, index) => {
        div.addEventListener('click', () => {

            if(index==0){
              const menu = document.getElementById('nuevoop');
              menu.style.display = 'block';
              menu.style.left = `${(event.pageX)-220}px`;
              menu.style.top = `${(event.pageY)+20}px`;
            }else{
              const menu = document.getElementById('nuevoop');
              menu.style.display = 'block';
              menu.style.left = `${event.pageX}px`;
              menu.style.top = `${event.pageY}px`;
            }

        });
    });