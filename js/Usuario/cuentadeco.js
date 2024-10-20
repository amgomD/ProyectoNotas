

function cuenta(){
    const config1 = Configuracion.getInstance();
    let configuraciones = config1.getConfig();

    let fechapropiedades = document.getElementById('fechapropiedades');


    const usuarioJSON = localStorage.getItem('user');
    let usuarioData = JSON.parse(usuarioJSON);
    let nuevousuario = null;
    let usuario = null;


    if (usuarioData ) {
        let usuarioBasico = new Usuario();
        
        usuarioBasico.setConfig(usuarioData.usuario.config);
          switch (usuarioData.usuario.config.planId) {
            case 1 :
                usuario = new UsuarioBasicoDecorator(usuarioBasico);
            break;
            case 2:
                usuario = new UsuarioProDecorator(usuarioBasico);
                break;
            case 3:
                usuario = new UsuarioPremiumDecorator(usuarioBasico);
            break;
  
            }
     guardarusuariolocal(usuario);
    } else {
        const usuarioBasico = new Usuario();
         usuario = new UsuarioBasicoDecorator(usuarioBasico);
        guardarusuariolocal(usuario);
        config1.setConfig(
            {
                plan:usuario.getConfig().planDesc,
                fechapla:usuario.getConfig().planFecha
            }
        )
    
    }
    


let nuevoElemento =   `    
  <div id="modalperfil" class="modal-wrapper">
        <div class=" modal modal-perfil">
    <div class="perfilnuevo">
           <div class="perIzq">
           </div>
           <div class="perDer">
   
            <p id="username">Andres Gomez Niño</p>
             <sub>${usuario.getConfig().planDesc}</sub>
           </div>
        
          <div>
                     <div class="item'perfil">
         <div id="guardarsu" class="btn-solid">
            Cambiar suscripcion
         </div>
          <div onclick="salisperfil()" class="btn-outline">
            Salir
         </div>
             </div>
        </div>

        </div>
<div class="columnas-perfil">
    <div class="info-perfil">
    <div>
        <div class="item'perfil">
            <sub>Usuario</sub>
            <p id="username">Andres Gomez Niño</p>
        </div>
        <div class="item'perfil">
            <sub>Email</sub>
            <p id="email">andres@gmail.com </p>
        </div>
    </div>
    <div>
           <div class="item'perfil">
            <sub>Plan</sub>
            <p id="plan"> ${usuario.getConfig().planDesc} </p>
        </div>
        <div class="item'perfil">
            <sub>Fecha suscripcion</sub>
            <p id="fechasup">${usuario.getConfig().planFecha} </p>
        </div>
    </div>

    </div>
<div class="planes">
    <div id="1" class="basico">
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
          usuario.setConfig({
            planId: Number(planId) ,
          });
       
      });
  });



  let plansel = document.getElementById(usuario.getConfig().planId)
    if(!plansel){
    plansel = document.getElementById('1')
    }
     plansel.classList.add('seleccionado'); 



document.getElementById('guardarsu').addEventListener('click',function(event){
    let usuarioBasico = new Usuario();
    switch (usuario.getConfig().planId) {

        case 1 :
            usuario = new UsuarioBasicoDecorator(usuarioBasico);
        break;
        case 2:
            usuario = new UsuarioProDecorator(usuarioBasico);
            break;
        case 3:
            usuario = new UsuarioPremiumDecorator(usuarioBasico);
        break;

        }


       config1.setConfig(
        {
            plan:usuario.getConfig().planDesc,
            fechapla:usuario.getConfig().planFecha
        }
    )
    guardarusuariolocal(usuario);
  

    salisperfil();
})

}

function salisperfil(){
    let modalnew = document.getElementById('modalperfil');
    modalnew.classList.toggle('open')
    modalnew.remove();
}


    function guardarusuariolocal(config){
        let usuariocreado = config;
        localStorage.setItem('user', JSON.stringify(usuariocreado));
    }
