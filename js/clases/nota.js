
class NotaPrototype{
    constructor(proto){
this.proto = proto;
return this.clone();
    }

    clone(){
     let nota = new Nota();
     let nuid = Math.random().toString(36).substr(2, 9);
     nota.id = nuid;
     nota.titulo = this.proto.titulo;
     nota.comentario = this.proto.comentario;
     nota.portada = this.proto.portada;
     nota.fecha = this.proto.fecha;
     nota.contenido = this.proto.contenido;
     nota.IsNota = this.proto.IsNota;
     nota.IdFolder = this.proto.IdFolder;
     return nota
    }

}

class Nota{
    constructor(id,titulo,comentario,portada,fecha,contenido,IsNota,IdFolder){
        this.id = id;
        this.titulo = titulo;
        this.comentario = comentario;
        this.portada = portada;
        this.fecha = fecha;
        this.contenido = contenido;
        this.IsNota = true;
        this.IdFolder = IdFolder;
    }

    getNota(){
        return{
            id: this.id,
            titulo:this.titulo,
            comentario:this.comentario,
            portada:this.portada,
            fecha:this.fecha,
            contenido:this.contenido,
            IsNota:this.IsNota,
            IdFolder : this.IdFolder
        };
    }


    setFolder(newIdFolder){
        this.IdFolder = newIdFolder;
    }
    setTitulo(newTitulo){
        this.titulo = newTitulo;
    }
    setComentario(newcomentario){
        this.comentario = newcomentario;
    }
    setPortada(portada){
        this.portada = portada;
    }
    setFecha(fecha){
        this.fecha = fecha;
    }
    setContenido(contenido){
        this.contenido = contenido;
    }
}

function crearnota(){
    let id = Math.random().toString(36).substr(2, 9);
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 (enero) a 11 (diciembre)
const dia = fechaActual.getDate().toString().padStart(2, '0');

    let nuevaNota = new Nota(id,"",
        "","../img/fondo1.png",`${dia}/${mes}/${año}`,"",true,"");
      
        guardarNotaLocal(nuevaNota); 
        window.location.href = `Nota.html?id=${encodeURIComponent(nuevaNota.id)}`;

}

function guardarNotaLocal(nota) {
    let id = Math.random().toString(36).substr(2, 9);
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 (enero) a 11 (diciembre)
const dia = fechaActual.getDate().toString().padStart(2, '0');

    nota.setFecha(`${dia}/${mes}/${año}`)
    let notcreada = nota.getNota();
    localStorage.setItem(notcreada.id, JSON.stringify(nota));
}
/*guardarProyectoEnLocalStorage(proyecto);*/

