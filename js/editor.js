function enableEditMode(){
    editortext.document.designMode = 'On';
}


document.addEventListener('click', function(event) {
    if ( event.target !== textarea) {
        editortext.document.designMode = 'Off';
    }

    
});

function execCmd(command){
    editortext.document.execCommand(command,false,null);
}

function execCommandWithArg(command,arg){
    editortext.document.execCommand(command,false,arg);
}


// Crear una instancia del proyecto
    let proyecto = cargarProyectoDesdeLocalStorage() || new Proyecto('Escribe un titulo', 'agrega un comentario');
    let nota;

    // Función para actualizar la vista en tiempo real y guardar en localStorage
    function actualizarVista() {
        // Actualizar Proyecto
        const nombreProyecto = document.getElementById('encabezado').value;
        const descripcionProyecto = document.getElementById('descripcion').value;
        proyecto.actualizarProyecto(nombreProyecto, descripcionProyecto);

        // Crear una nota decorada
      //  const contenidoNota = document.getElementById('contenidoNota').value;
     //   const decoracion = document.getElementById('decoracionNota').value;
        
        /*const nota = new Nota(contenidoNota, decoracion);

        // Actualizar o crear una nueva tarea
        const nombreTarea = document.getElementById('nombreTarea').value;
        const descripcionTarea = document.getElementById('descripcionTarea').value;
        const fechaLimite = document.getElementById('fechaLimite').value;

        if (tarea) {
            tarea.actualizarTarea(nombreTarea, descripcionTarea, fechaLimite, nota);
        } else {
            tarea = new Tarea(nombreTarea, descripcionTarea, fechaLimite, nota);
            proyecto.agregarTarea(tarea);
        }
*/
        // Guardar en localStorage
        guardarProyectoEnLocalStorage(proyecto);

        // Mostrar en la vista
        const datosProyecto = proyecto.mostrarProyecto();

        document.getElementById('encabezado').value = datosProyecto.titulo;
        document.getElementById('descripcion').value = datosProyecto.comentario;

      /*  if (datosProyecto.tarea) {
            document.getElementById('previewNombreTarea').textContent = datosProyecto.tarea.titulo;
            document.getElementById('previewDescripcionTarea').textContent = datosProyecto.tarea.descripcion;
            document.getElementById('previewFechaLimite').textContent = `Fecha Límite: ${datosProyecto.tarea.fechaLimite}`;
            document.getElementById('previewNotaDecorada').innerHTML = datosProyecto.tarea.nota;
        }*/
    }

    // Función para guardar el proyecto en localStorage
    function guardarProyectoEnLocalStorage(proyecto) {
        localStorage.removeItem('proyecto')
        localStorage.setItem('proyecto', JSON.stringify(proyecto));
    }

    // Función para cargar el proyecto desde localStorage
    function cargarProyectoDesdeLocalStorage() {
       
        const proyectoGuardado = localStorage.getItem('proyecto');
        console.log('Entroaaaaa'+proyectoGuardado)
        if (proyectoGuardado) {
            const datos = JSON.parse(proyectoGuardado);
            // Reconstruir el proyecto con clases y métodos
           // const nota = new Nota(datos.nota.contenido, datos.nota.decoracion);
          const proyectoCargado = new Proyecto(datos.titulo, datos.comentario);
         //   proyectoCargado.agregarTarea(tarea);

            return proyectoCargado;
        }
        return null;
    }

    // Eventos para detectar cambios en tiempo real
    document.getElementById('encabezado').addEventListener('input', actualizarVista);
    document.getElementById('descripcion').addEventListener('input', actualizarVista);

    // Cargar la vista inicial desde localStorage
    actualizarVista();