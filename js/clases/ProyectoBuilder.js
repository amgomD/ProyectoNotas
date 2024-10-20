class Proyecto {
    constructor(builder) {
        this.id = builder.id;
        this.nombre = builder.nombre;
        this.descripcion = builder.descripcion;
        this.fechaCreacion = builder.fechaCreacion;
        this.integrantes = builder.integrantes;
        this.prioridad = builder.prioridad;
        this.notas = builder.notas;
        this.etiquetas = builder.etiquetas;
        this.colorIcon = builder.colorIcon;
    }
    setId (id){
        this.id = id
       }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    setIntegrantes(integrantes) {
        this.integrantes = integrantes;
    }

    setPrioridad(prioridad) {
        this.prioridad = prioridad;
    }

    setNota(notas) {
        this.notas = notas;
    }

    setEtiqueta(etiquetas) {
        this.etiquetas = etiquetas;
    }

    setcolorIcon(colorIcon) {
        this.colorIcon = colorIcon;
    }
    setFechaCreacion(fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
    addNota(nota) {
        this.notas.push(nota);
    }

    addEtiqueta(etiqueta) {
        this.etiquetas.push(etiqueta);
    }
    getId (){
        let id = this.id;
     return id;
    }

}


class ProyectoBuilder {
    constructor() {
        this.id = Math.random().toString(36).substr(2, 9);
        this.nombre = '';
        this.descripcion = '';
        this.fechaCreacion = new Date();
        this.integrantes = [];
        this.prioridad = 'Baja';  // Valor por defecto
        this.notas = [];
        this.etiquetas = [];
        this.colorIcon = '#e8e8e8';
    }
    setId (id){
        this.id = id
        return this;
       }
       getId (){
        let id = this.id;
     return id;
    }
    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    setIntegrantes(integrantes) {
        this.integrantes = integrantes;
        return this;
    }

    setPrioridad(prioridad) {
        this.prioridad = prioridad;
        return this;
    }

    setNota(notas) {
        this.notas = notas;
        return this;
    }

    setEtiqueta(etiquetas) {
        this.etiquetas = etiquetas;
        return this;
    }
    setFechaCreacion(fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
        return this;
    }
    setcolorIcon(colorIcon) {
        this.colorIcon = colorIcon;
        return this;
    }

    addNota(nota) {
        this.notas.push(nota);
        return this;
    }

    addEtiqueta(etiqueta) {
        this.etiquetas.push(etiqueta);
        return this;
    }

    build() {
        return new Proyecto(this);
    }
}


class Director {
    constructor(builder) {
        this.builder = builder;
    }

    construirProyectoBasico() {
        this.builder.setNombre('Nueva carpeta básica')
                    .setDescripcion('');
    }

    construirProyectoCompleto() {
        this.builder.setNombre('Nueva carpeta completa')
                    .setDescripcion('Descripción del proyecto completo')
                    .setIntegrantes(['yo', 'yo'])
                    .setPrioridad('Alta')
                    .setNota([])
                    .setEtiqueta([])
                    .setcolorIcon('#e8e8e8');
    }
}

