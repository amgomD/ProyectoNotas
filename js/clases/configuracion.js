class Configuracion {
    constructor() {
        if (Configuracion.instance) {
            throw new Error("No se puede instanciar directamente. Use Configuracion.getInstance().");
        }
        const storedConfig = localStorage.getItem('config');


        this.config = {
            plan: 'basic',
            fechapla:'Hoy',
            notificarCorreo: false,
            resumenes: false,
            tema: 'sistema',
        };
        if (storedConfig) {
            try {
              this.config = {
                ...this.config,  // Mantenemos los valores por defecto
                ...JSON.parse(storedConfig) // Sobrescribimos con los valores de localStorage
              };
            } catch (error) {
              console.error('Error al parsear los datos de localStorage:', error);
            }
          }


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
        guardarConfLocal(this.config)
    
    }
}



function guardarConfLocal(newConfig) {
    localStorage.setItem('config', JSON.stringify(newConfig));
}

