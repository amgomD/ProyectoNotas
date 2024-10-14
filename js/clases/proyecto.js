
class Proyecto  {
    constructor() {
        let nuid = Math.random().toString(36).substr(2, 9);
        this.id = nuid;
        this.nombre = '';
        this.descripcion = '';
        this.fechaCreacion = new Date();
        this.integrantes = [];
        this.prioridad = 'Baja';  // Valor por defecto
        this.notas = [];
        this.etiquetas = [];
        this.colorIcon = '#e8e8e8'
    }
    
    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    setcolorIcon(colorIcon) {
        this.colorIcon = colorIcon;
        return this;
    }
    setFechaCreacion(fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
        return this;
    }
    setId (id){
     this.id = id
     return this;
    }
getId (){
    let id = this.id;
 return id;
}
    addIntegrante(integrante) {
        this.integrantes.push(integrante);
        return this;
    }
    setNota(notas){
        this.notas = notas;
        return this;
    }
    setEtiqueta(etiquetas){
        this.etiquetas = etiquetas;
        return this;
    }
    setPrioridad(prioridad) {
        this.prioridad = prioridad;
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
getProyecto(){
    return{
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        fechaCreacion: this.fechaCreacion,
        integrantes:this.integrantes,
        prioridad:this.prioridad,
        notas:this.notas,
        etiquetas:this.etiquetas,
        colorIcon:this.colorIcon
    }  
}
 

    build() {
        return{
            id: this.id,
            nombre: this.nombre,
            descripcion: this.descripcion,
            fechaCreacion: this.fechaCreacion,
            integrantes:this.integrantes,
            prioridad:this.prioridad,
            notas:this.notas,
            etiquetas:this.etiquetas,
            colorIcon:this.colorIcon
        }
    
    }

}
