
function config(){

    const config1 = Configuracion.getInstance();
    let configuraciones = config1.getConfig();


    let nuevoElemento =   ` 
        <div id="modalconfig" class="modal-wrapper">
    <div class="modalperfil">
<div class="modal-config">
    <h1>Configuracion</h1>
    <div class="config-ite">
        <div class="lado-izq">
            <sub>Plan</sub>
            <p id="plan">Plan basico</p>
    
        </div>
        <div class="lado-der">
            <sub>Fecha</sub>
            <p id="fechaplan">lunes</p>
    
        </div>
    </div>
    <div class="config-ite">
        <div class="lado-izq">
            <sub>Notificar</sub>
            <p >Notificar cambios por correo al final del dia</p>
    
        </div>
        <div class="lado-der">
            <div class="switch">
                <input type="checkbox" id="noticorreo" />
                <label for="noticorreo"></label>
              </div>
              
        </div>
    </div>
    <div class="config-ite">
        <div class="lado-izq">
            <sub>Resumen</sub>
            <p id="Resumen">Resumen de la actividad en los ultimos 8 dias</p>
    
        </div>
        <div class="lado-der">
            <div class="switch">
                <input type="checkbox" id="resumen" />
                <label for="resumen"></label>
              </div>
    
        </div>
    </div>
    <div class="config-ite">
        <div class="lado-izq">
            <sub>Tema</sub>
            <p id="plan">Cambia la apariencia del sistema</p>
            <div class="theme-selector">
                <div class="optiong">
                  <input type="radio" id="sistema" name="theme"  />
                  <label for="sistema">
                    <div class="img-placeholder system"></div>
                    <p>Sistema</p>
                  </label>
                </div>
                <div class="optiong">
                  <input type="radio" id="claro" name="theme" />
                  <label for="claro">
                    <div class="img-placeholder light"></div>
                    <p>Claro</p>
                  </label>
                </div>
                <div class="optiong">
                  <input type="radio" id="oscuro" name="theme" />
                  <label for="oscuro">
                    <div class="img-placeholder dark"></div>
                    <p>Oscuro</p>
                  </label>
                </div>
              </div>
              
        </div>
  
    </div>
</div>
</div>

</div>

` ;

document.body.insertAdjacentHTML('beforeend', nuevoElemento);
let modalnew = document.getElementById('modalconfig');
modalnew.classList.toggle('open')
const modalConfig = document.getElementById('modalconfig');
const modalPerfil = document.querySelector('.modalperfil');

// Función para mostrar un mensaje al hacer clic en el fondo del modal
modalConfig.addEventListener('click', function () {
    modalnew.remove() 
});

// Detenemos la propagación del evento cuando se hace clic en el contenido del modal
modalPerfil.addEventListener('click', function (event) {
  event.stopPropagation(); // Evita que el clic se propague al contenedor padre
});

let fechaplan =document.getElementById('fechaplan')
fechaplan.innerHTML = configuraciones.fechapla;


let plan =document.getElementById('plan')
plan.innerHTML = configuraciones.plan;

let noticorreo = document.getElementById('noticorreo');
noticorreo.checked = configuraciones.notificarCorreo;

noticorreo.addEventListener('change', function () {
    if (noticorreo.checked) {
        config1.setConfig({
            notificarCorreo: noticorreo.checked,
        });
   

    } else {

        config1.setConfig({
            notificarCorreo: noticorreo.checked,
        });
   
    }
  });



  let resumen = document.getElementById('resumen');
  resumen.checked = configuraciones.resumenes;
  
  resumen.addEventListener('change', function () {
      if (resumen.checked) {
          config1.setConfig({
            resumenes: resumen.checked,
          });
  
  
      } else {
  
          config1.setConfig({
            resumenes: resumen.checked,
          });
 
      }
    });
  


    const opciones = document.getElementsByName('theme');
    let seleccion = null;

    opciones.forEach((opcion) => {

      if (opcion.id == configuraciones.tema ) {
        opcion.checked = true;
      }


      opcion.addEventListener('change',function(event){
        config1.setConfig({
            tema: this.id,
          });
    })
    });



}

