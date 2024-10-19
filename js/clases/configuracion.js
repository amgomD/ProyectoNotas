class Configuracion {
    constructor() {
        if (Configuracion.instance) {
            throw new Error("No se puede instanciar directamente. Use Configuracion.getInstance().");
        }


        this.config = {
            plan: 'basic',
            notificarCorreo: true,
            resumenes: false,
            tema: 'light',
        };

        Configuracion.instance = this;
    }

    static getInstance() {
        if (!Configuracion.instance) {
            Configuracion.instance = new Configuracion();
        }
        return Configuracion.instance;
    }

    getConfig() {
        return this.config;
    }

    setConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
}



