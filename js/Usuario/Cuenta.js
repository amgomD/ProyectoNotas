

function cuenta(){

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


    const usuarioJSON = localStorage.getItem('user');
    let usuarioData = JSON.parse(usuarioJSON);
    let nuevousuario = null;
    let usuario = null;


    if (usuarioData ) {
          
        // Obtener el objeto usuario
        if(usuarioData.usuario){
            usuario = new Usuario(
                usuarioData.usuario.nombre, 
                usuarioData.usuario.email,
                usuarioData.usuario.fecha,
                usuarioData.usuario.plan);
    
        }else{
            usuario = new Usuario(
                usuarioData.nombre, 
                usuarioData.email,
                usuarioData.fecha,
                usuarioData.plan);
    
        }

               
        switch (usuario.getplan()) {
            case "1" :
            usuario = new Usuario('Andres Gomez Niño', 'Andres@mail.com',formattedDate,1);
                break;
            case "2":
                usuario = new UsuarioPro(usuario);
    
                break;
            case "3":
                usuario = new UsuarioPremium(usuario);
                break;
            default:
                usuario = new Usuario('Andres Gomez Niño', 'Andres@mail.com',formattedDate,1); 
        }

    } else {
         usuario = new Usuario('Andres Gomez Niño', 'Andres@mail.com',formattedDate,1);
    }
    


let nuevoElemento =   `    
  <div id="modalperfil" class="modal-wrapper">
        <div class=" modal modal-perfil">
    <div class="perfilnuevo">
           <div class="perIzq">
           </div>
           <div class="perDer">
   
            <p id="username">${usuario.getNombre()}</p>
             <sub>${usuario.getDescripcion()}</sub>
           </div>
       

        </div>
<div class="columnas-perfil">
    <div class="info-perfil">
        <div class="item'perfil">
            <sub>Usuario</sub>
            <p id="username">${usuario.getNombre()}</p>
        </div>
        <div class="item'perfil">
            <sub>Email</sub>
            <p id="email">${usuario.getEmail()} </p>
        </div>
        <div class="item'perfil">
            <sub>Plan</sub>
            <p id="plan"> ${usuario.getDescripcion()} </p>
        </div>
        <div class="item'perfil">
            <sub>Fecha suscripcion</sub>
            <p id="fechasup"> ${usuario.getfecha()} </p>
        </div>
        <div class="item'perfil">
         <div id="guardarsu" class="btn-solid">
            Cambiar suscripcion
         </div>
          <div onclick="salisperfil()" class="btn-outline">
            Salir
         </div>
        </div>
    </div>
<div class="planes">
    <div id="0" class="basico">
     <h4>Plan basico</h4>
     <h1>$0</h1>
     <div class="cosas">
        <div class="incluye">
            <p><i class="fa-solid fa-circle-xmark"></i> Proyectos ilimitados</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Archivos ilimitados</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Exportacion masiva</p>
         </div>
         <div class="incluye">
            <p> <i class="fa-solid fa-circle-check"></i> control de versiones: 7 dias</p>
            <p> <i class="fa-solid fa-circle-check"></i> 10 colaboradores</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Seguridad avanzada</p>
         </div>
     </div>
    

    </div>
    <div id="2" class="pro">
        <h4>Plan Pro</h4>
        <h1>$20</h1>
        <div class="cosas">
           <div class="incluye">
               <p><i class="fa-solid fa-circle-check"></i> Proyectos ilimitados</p>
               <p><i class="fa-solid fa-circle-check"></i> Archivos ilimitados</p>
               <p><i class="fa-solid fa-circle-check"></i> Exportacion masiva</p>
            </div>
            <div class="incluye">
               <p><i class="fa-solid fa-circle-check"></i> control de versiones: 30 dias</p>
               <p><i class="fa-solid fa-circle-check"></i> 100 colaboradores</p>
               <p><i class="fa-solid fa-circle-xmark"></i> Seguridad avanzada</p>
            </div>
        </div>
    </div>
    <div id="3" class="premium">
        <h4>Plan Premium</h4>
        <h1>$50</h1>
        <div class="cosas">
           <div class="incluye">
               <p><i class="fa-solid fa-circle-check"></i> Proyectos ilimitados</p>
               <p><i class="fa-solid fa-circle-check"></i> Archivos ilimitados</p>
               <p><i class="fa-solid fa-circle-check"></i> Exportacion masiva</p>
            </div>
            <div class="incluye">
               <p><i class="fa-solid fa-circle-check"></i> control de versiones: ilimitado</p>
               <p><i class="fa-solid fa-circle-check"></i> 250 colaboradores</p>
               <p><i class="fa-solid fa-circle-check"></i> Seguridad avanzada</p>
            </div>
        </div>
    </div>
</div>
</div>
  



            
        </div>
    </div>


  `    
  document.body.insertAdjacentHTML('beforeend', nuevoElemento);

  let modalnew = document.getElementById('modalperfil');
  modalnew.classList.toggle('open')
  const planes = document.querySelectorAll('.planes > div');

  // Agrega un event listener para cada plan
  planes.forEach(plan => {
      plan.addEventListener('click', () => {
          // Elimina la clase 'seleccionado' de todos los planes
          planes.forEach(p => p.classList.remove('seleccionado'));
          
          // Agrega la clase 'seleccionado' al plan clickeado
          plan.classList.add('seleccionado');
  
          // Obtén el id del plan clickeado
          const planId = plan.getAttribute('id');
          usuario.setPlan(planId);
          // Aquí puedes hacer lo que necesites con el id
      });
  });



  let plansel = document.getElementById(usuario.getplan())
     plansel.classList.add('seleccionado'); 




document.getElementById('guardarsu').addEventListener('click',function(event){
    guardarsus(usuario);
})

}

function salisperfil(){
    let modalnew = document.getElementById('modalperfil');
    modalnew.classList.toggle('open')
}

function guardarsus( usuario){
    console.log(usuario)
        guardarusuariolocal(usuario);
}
   

    function guardarusuariolocal(usuario){
        let usuariocreado = usuario;
        localStorage.setItem('user', JSON.stringify(usuariocreado));
    }