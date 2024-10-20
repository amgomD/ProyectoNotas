class Usuario {
    constructor() {

        const date = new Date();
        const options = {
            weekday: 'long', // lunes
            year: 'numeric', // 2024
            month: 'long',   // octubre
            day: 'numeric',  // 14
            hour: 'numeric', // 09
            minute: 'numeric', // 29
            hour12: true // Formato de 12 horas con AM/PM
        };
        
        const formattedDate = date.toLocaleString('es-CO', options);
    

        this.config = {
            planId: 1,
            planDesc: 'Plan basico',
            planFecha: formattedDate,
            ProyectosIlimitados: false,
            SubidaArchivosIlimitada: false,
            ExportacionMasivaPDF: false,
            ControlVersiones: '7',
            SeguridadAvanzada: false,
            InvitarColaboradores: 10,
        };
    }

    getConfig() {
        return this.config;
    }

    setConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
}

// Decorador base
class UsuarioDecorator {
    constructor(usuario) {
        this.usuario = usuario;
    }

    getConfig() {
        return this.usuario.getConfig();
    }

    setConfig(newConfig) {
        this.usuario.setConfig(newConfig);
    }
}

// Decorador para el plan básico
class UsuarioBasicoDecorator extends UsuarioDecorator {
    constructor(usuario) {
        
        const date = new Date();
        const options = {
            weekday: 'long', // lunes
            year: 'numeric', // 2024
            month: 'long',   // octubre
            day: 'numeric',  // 14
            hour: 'numeric', // 09
            minute: 'numeric', // 29
            hour12: true // Formato de 12 horas con AM/PM
        };
        
        const formattedDate = date.toLocaleString('es-CO', options);
        super(usuario);
        this.setConfig({
            planId: 1,
            planDesc: 'Plan basico',
            planFecha: formattedDate,
            ProyectosIlimitados: false,
            SubidaArchivosIlimitada: false,
            ExportacionMasivaPDF: false,
            ControlVersiones: '7',
            SeguridadAvanzada: false,
            InvitarColaboradores: 10,
        });
    }
}

// Decorador para el plan pro
class UsuarioProDecorator extends UsuarioDecorator {
    constructor(usuario) {
        const date = new Date();
        const options = {
            weekday: 'long', // lunes
            year: 'numeric', // 2024
            month: 'long',   // octubre
            day: 'numeric',  // 14
            hour: 'numeric', // 09
            minute: 'numeric', // 29
            hour12: true // Formato de 12 horas con AM/PM
        };
        
        const formattedDate = date.toLocaleString('es-CO', options);
        super(usuario);
        this.setConfig({
            planId: 2,
            planDesc: 'Plan pro',
            planFecha:formattedDate,
            ProyectosIlimitados: true,
            SubidaArchivosIlimitada: true,
            ExportacionMasivaPDF: false,
            ControlVersiones: '30',
            SeguridadAvanzada: true,
            InvitarColaboradores: 50,
        });
    }
}

// Decorador para el plan premium
class UsuarioPremiumDecorator extends UsuarioDecorator {
    constructor(usuario) {
        const date = new Date();
        const options = {
            weekday: 'long', // lunes
            year: 'numeric', // 2024
            month: 'long',   // octubre
            day: 'numeric',  // 14
            hour: 'numeric', // 09
            minute: 'numeric', // 29
            hour12: true // Formato de 12 horas con AM/PM
        };
        
        const formattedDate = date.toLocaleString('es-CO', options);
        super(usuario);
        this.setConfig({
            planId: 3,
            planDesc: 'Plan premium',
            planFecha: formattedDate,
            ProyectosIlimitados: true,
            SubidaArchivosIlimitada: true,
            ExportacionMasivaPDF: true,
            ControlVersiones: '90',
            SeguridadAvanzada: true,
            InvitarColaboradores: 100,
        });
    }
}

/* Uso del patrón Decorator
const usuariode = new Usuario();
console.log('Configuración inicial:', usuariode.getConfig());

const usuarioBasico = new UsuarioBasicoDecorator(usuariode);
console.log('Configuración básica:', usuarioBasico.getConfig());

const usuarioPro = new UsuarioProDecorator(usuarioBasico);
console.log('Configuración pro:', usuarioPro.getConfig());

const usuarioPremium = new UsuarioPremiumDecorator(usuarioPro);
console.log('Configuración premium:', usuarioPremium.getConfig());
*/