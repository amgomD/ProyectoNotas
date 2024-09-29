class Nota {
    constructor(contenido) {
      this.contenido = contenido;
    }
  
    obtenerContenido() {
      return this.contenido;
    }
  }


  
  class NotaDecorator {
    constructor(nota) {
      this.nota = nota;
    }
  
    obtenerContenido() {
      return this.nota.obtenerContenido();
    }
  }
  
  class Negrita extends NotaDecorator {
    obtenerContenido() {
      return `<strong>${super.obtenerContenido()}</strong>`;
    }
  }
  
  class Cursiva extends NotaDecorator {
    obtenerContenido() {
      return `<em>${super.obtenerContenido()}</em>`;
    }
  }
  
  class Subrayado extends NotaDecorator {
    obtenerContenido() {
      return `<u>${super.obtenerContenido()}</u>`;
    }
  }
  