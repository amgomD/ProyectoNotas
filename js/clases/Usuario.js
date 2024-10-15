class Usuario {
    constructor(nombre, email,fecha,plan) {
        this.nombre = nombre;
        this.email = email;
        this.fecha = fecha;
        this.plan = plan;
    }


getNombre(){
    return this.nombre
}

getEmail(){
    return this.email
}
getfecha(){
    return this.fecha
} 
getplan(){
    return this.plan
} 
setPlan(plan){
    this.plan = plan;  
}
getDescripcion() {
        return `Plan basico`;
    }


    getInfo() {
        return {
            nombre: this.nombre,
            email: this.email,
            fecha: this.fecha,
            plan: this.plan,
        };
    }



    getCosto() {
        return 0; // Plan básico es gratuito
    }

    accesoExtra() {
        return [
            {
                ProyectosIlimitados: false,
                SubidaArchivosIlimitada: false,
                ExportacionMasivaPDF: false,
                ControlVersiones: '7',
                SeguridadAvanzada: false,
                InvitarColaboradores: 10
            }
        ];
    }
}
//Decorador base --------------------------------
class UsuarioDecorator {
    constructor(usuario) {
        this.usuario = usuario;
    }

    getDescripcion() {
        return this.usuario.getDescripcion();
    }
    getNombre(){
        return this.nombre
    }
    
    getEmail(){
        return this.email
    }
    getfecha(){
        return this.fecha
    } 
    getplan(){
        return this.plan
    } 
    setPlan(plan){
        this.plan = plan;  
    }
    getDescripcion() {
            return `Plan basico`;
        }
    
    getCosto() {
        return this.usuario.getCosto();
    }

    accesoExtra() {
        return this.usuario.accesoExtra();
    }
}
// Decorador UsuarioPro---------------------------
class UsuarioPro extends UsuarioDecorator {
    getDescripcion() {
        return `${this.usuario.getDescripcion()} y Pro`;
    }
    getNombre(){
        return this.usuario.getNombre();
    }
    
    getEmail(){
        return this.usuario.getEmail();
    }
    getfecha(){
        return this.usuario.getfecha();
    } 
    getplan(){
        return this.usuario.getplan();
    } 


    getCosto() {
        return this.usuario.getCosto() + 20;
    }
    setPlan(plant){
        this.usuario.plan = plant;
    }

    accesoExtra() {
        const permisos = this.usuario.accesoExtra();

        // Modificar y añadir permisos para usuario Pro
        permisos[0].ProyectosIlimitados = true;
        permisos[0].SubidaArchivosIlimitada = true;
        permisos[0].ExportacionMasivaPDF = true;
        permisos[0].ControlVersiones = '30';
        permisos[0].InvitarColaboradores = 100;
        
        return permisos;
    }
}

// Decorador UsuarioPremium
class UsuarioPremium extends UsuarioDecorator {
    getDescripcion() {
        return `${this.usuario.getDescripcion()} y  Premium`;
    }
    getNombre(){
        return this.usuario.getNombre();
    }
    
    getEmail(){
        return this.usuario.getEmail();
    }
    getfecha(){
        return this.usuario.getfecha();
    } 
    getplan(){
        return this.usuario.getplan();
    } 
    getCosto() {
        return this.usuario.getCosto() + 30;
    }


    accesoExtra() {
        const permisos = this.usuario.accesoExtra();

        // Modificar y añadir permisos para usuario Premium
        permisos[0].ProyectosIlimitados = true;
        permisos[0].SubidaArchivosIlimitada = true;
        permisos[0].ExportacionMasivaPDF = true;
        permisos[0].ControlVersiones = 'ilimitado';
        permisos[0].SeguridadAvanzada = true;
        permisos[0].InvitarColaboradores = 250;
        
        return permisos;
    }
}


