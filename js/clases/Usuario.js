class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    getDescripcion() {
        return `${this.nombre} tiene acceso básico`;
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
        return `${this.usuario.getDescripcion()} y acceso Pro`;
    }

    getCosto() {
        return this.usuario.getCosto() + 15;
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
        return `${this.usuario.getDescripcion()} y acceso Premium`;
    }

    getCosto() {
        return this.usuario.getCosto() + 25;
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



// Crear un usuario básico
let usuario = new Usuario('Carlos', 'carlos@mail.com');
console.log(usuario.getDescripcion()); // Carlos tiene acceso básico
console.log('Costo: ', usuario.getCosto()); // Costo: 0
console.log(usuario.accesoExtra());
/* [
    {
        ProyectosIlimitados: false,
        SubidaArchivosIlimitada: false,
        ExportacionMasivaPDF: false,
        ControlVersiones: '7',
        SeguridadAvanzada: false,
        InvitarColaboradores: 10
    }
] */

// Actualizar a usuario Pro
usuario = new UsuarioPro(usuario);
console.log(usuario.getDescripcion()); // Carlos tiene acceso básico y acceso Pro
console.log('Costo: ', usuario.getCosto()); // Costo: 15
console.log(usuario.accesoExtra());
/* [
    {
        ProyectosIlimitados: true,
        SubidaArchivosIlimitada: true,
        ExportacionMasivaPDF: true,
        ControlVersiones: '30',
        SeguridadAvanzada: false,
        InvitarColaboradores: 100
    }
] */

// Actualizar a usuario Premium
usuario = new UsuarioPremium(usuario);
console.log(usuario.getDescripcion()); // Carlos tiene acceso básico y acceso Pro y acceso Premium
console.log('Costo: ', usuario.getCosto()); // Costo: 40
console.log(usuario.accesoExtra());
/* [
    {
        ProyectosIlimitados: true,
        SubidaArchivosIlimitada: true,
        ExportacionMasivaPDF: true,
        ControlVersiones: 'ilimitado',
        SeguridadAvanzada: true,
        InvitarColaboradores: 250
    }
] */
