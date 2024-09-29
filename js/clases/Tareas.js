class Tarea {
    constructor(builder) {
      this.titulo = builder.titulo;
      this.descripcion = builder.descripcion;
      this.fechaLimite = builder.fechaLimite;
      this.completada = builder.completada || false;

    }
  
    // Método para clonar la tarea
    clonar() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  
    // Método para mostrar la tarea
    mostrarTarea() {
      console.log(`Tarea: ${this.titulo}\nDescripción: ${this.descripcion}\nFecha límite: ${this.fechaLimite}`);
    }
  
    // Builder para Tarea
    static get Builder() {
      class Builder {
        constructor(titulo) {
          this.titulo = titulo;
        }
  
        setDescripcion(descripcion) {
          this.descripcion = descripcion;
          return this;
        }
  
        setFechaLimite(fechaLimite) {
          this.fechaLimite = fechaLimite;
          return this;
        }
  
        agregarNota(nota) {
          if (!this.notas) this.notas = [];
          this.notas.push(nota);
          return this;
        }
  
        setCompletada(completada) {
          this.completada = completada;
          return this;
        }
  
        build() {
          return new Tarea(this);
        }
      }
      return Builder;
    }
  }
  