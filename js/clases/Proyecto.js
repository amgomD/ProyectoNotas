class Proyecto {
    constructor(builder) {
      this.titulo = builder.titulo;
      this.comentario = builder.comentario;
      this.portada = builder.portada;
      this.fechacreacion = builder.fechacreacion;
      this.notas = builder.notas || [];
    }
  
    // Método para mostrar la información del proyecto
    mostrarProyecto() {
      return {
        titulo: this.titulo,
        comentario: this.comentario,
        notas: this.notas 
      };
  }
    // Agregar una tarea al proyecto
    agregarNotas(notas) {
      this.notas.push(notas);
    }
    actualizarProyecto(titulo, comentario) {
      this.titulo = titulo;
      this.comentario = comentario;
  }
    // Builder para Proyecto
    static get Builder() {
      class Builder {
        constructor(titulo) {
          this.titulo = titulo;
        }
  
        setComentario(comentario) {
          this.comentario = comentario;
          return this;
        }
  
        setPortada(portada) {
          this.portada = portada;
          return this;
        }
  
        setFechacreacion(fechacreacion) {
          this.fechacreacion = fechacreacion;
          return this;
        }
  
        agregarnotas(notas) {
          this.notas = notas;
          return this;
        }
  
        build() {
          return new Proyecto(this);
        }
      }
      return Builder;
    }
  }
  