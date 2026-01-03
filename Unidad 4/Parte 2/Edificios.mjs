import Propietarios from "./Propietarios.mjs"

class Edificios {
    // Definición de propiedades privadas
    #calle;
    #numero;
    #localidad;
    #codigoPostal;
    #numPisos;
    #numPuertasPorPiso;
    #pisos;

    constructor(calle, numero, localidad, codigoPostal, numPisos, numPuertasPorPiso) {
        // Para inicializar con setters. Vienen de fuera al hacer new Edificio (por parámetro)
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
        this.numPisos = numPisos;
        this.numPuertasPorPiso = numPuertasPorPiso;

        // Se inicia un map para Pisos. Usamos el # ya que lo iniciamos nosotros internamente.
        this.#pisos = new Map();

        // 3. Rellenamos el Map con objetos Propietarios
        for (let piso = 1; piso <= this.numPisos; piso++) {
            for (let puerta = 1; puerta <= this.numPuertasPorPiso; puerta++) {
                // Creamos un identificador de piso y de puerta
                let pisoPuerta = piso + "-" + puerta;
                
                // Guardamos un nuevo objeto Propietarios en esa ubicación. Clave piso-puerta y propietario
                this.#pisos.set(pisoPuerta, new Propietarios());
            }
        }
    }

    // --- SECCIÓN DE GETTERS Y SETTERS ---
    // Aquí es donde validamos que los datos sean correctos

    get calle() { return this.#calle; }
    set calle(valor) {
        if (typeof valor !== "string" || valor.trim() === "") throw new Error("La calle no es válida");
        this.#calle = valor;
    }

    get numero() { return this.#numero; }
    set numero(valor) {
        if (isNaN(valor) || valor <= 0) throw new Error("El número debe ser un valor positivo");
        this.#numero = valor;
    }

    get localidad() { return this.#localidad; }
    set localidad(valor) {
        if (typeof valor !== "string" || valor.trim() === "") throw new Error("La localidad no es válida");
        this.#localidad = valor;
    }

    get codigoPostal() { return this.#codigoPostal; }
    set codigoPostal(valor) {
        // Validamos que el CP tenga exactamente 5 dígitos numéricos
        if (!/^\d{5}$/.test(valor)) throw new Error("El código postal debe tener 5 números");
        this.#codigoPostal = valor;
    }

    get numPisos() { return this.#numPisos; }
    set numPisos(valor) {
        if (isNaN(valor) || valor <= 0) throw new Error("El edificio debe tener al menos 1 piso");
        this.#numPisos = valor;
    }

    get numPuertasPorPiso() { return this.#numPuertasPorPiso; }
    set numPuertasPorPiso(valor) {
        if (isNaN(valor) || valor <= 0) throw new Error("Cada piso debe tener al menos 1 puerta");
        this.#numPuertasPorPiso = valor;
    }

    // --- MÉTODOS DE GESTIÓN DEL EDIFICIO ---

    agregarPropietarios(nombres, piso, puerta) {
        // 1. Creamos la misma llave que usamos en el constructor
        const pisoPuerta = piso + "-" + puerta;

        // 2. Buscamos el objeto Propietarios en nuestro Map
        const vivienda = this.#pisos.get(pisoPuerta);

        // 3. Si la vivienda existe, usamos su setter para guardar los nombres
        if (vivienda) {
            vivienda.propietarios = nombres; // 'propietarios' es el setter de la otra clase
        } else {
            throw new Error("El piso o puerta indicados no existen en este edificio.");
        }
    }

    imprimirViviendas() {
        console.log(`Listado de propietarios del edificio en calle ${this.calle}, nº ${this.numero}:`);
        
        // Recorremos el Map: llave es el "piso-puerta" y valor es el objeto Propietarios
        for (let [llave, objetoPropietario] of this.#pisos) {
            // Usamos el toString() que definiste en la clase Propietarios
            console.log(`Puerta ${llave}: ${objetoPropietario.toString()}`);
        }
    }

    getPropietarios(piso, puerta) {
        const llave = piso + "-" + puerta;
        const vivienda = this.#pisos.get(llave);
        // Si existe devolvemos los nombres, si no, un mensaje de aviso
        return vivienda ? vivienda.propietarios : "Vivienda no encontrada";
    }
}

export default Edificios;