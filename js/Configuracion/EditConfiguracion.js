
function config(){
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
                  <input type="radio" id="system" name="theme" checked />
                  <label for="system">
                    <div class="img-placeholder system"></div>
                    <p>Sistema</p>
                  </label>
                </div>
                <div class="optiong">
                  <input type="radio" id="light" name="theme" />
                  <label for="light">
                    <div class="img-placeholder light"></div>
                    <p>Claro</p>
                  </label>
                </div>
                <div class="optiong">
                  <input type="radio" id="dark" name="theme" />
                  <label for="dark">
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
    modalnew.classList.remove('open')
});

// Detenemos la propagación del evento cuando se hace clic en el contenido del modal
modalPerfil.addEventListener('click', function (event) {
  event.stopPropagation(); // Evita que el clic se propague al contenedor padre
});
}


