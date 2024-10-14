class Integrante {
    constructor(nombre, rol) {
        this.nombre = nombre;
        this.rol = rol;
    }

    getIntegrante(){
        return{
            nombre: this.nombre,
            rol:this.rol
        };
    }

}
