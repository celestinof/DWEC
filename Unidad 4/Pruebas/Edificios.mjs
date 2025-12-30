import Propietarios from './Propietarios.mjs';

export default class Edificio {
    #calle;
    #numero;
    #localidad;
    #codigoPostal;
    #numPisos;
    #numPuertasPorPiso;
    #pisos;

    constructor(calle, numero, localidad, codigoPostal, numPisos, numPuertasPorPiso) {
        // Inicialización mediante setters para validar
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
        this.numPisos = numPisos;
        this.numPuertasPorPiso = numPuertasPorPiso;
        
        // Inicializamos el Map de pisos
        this.#pisos = new Map();
    }

    // Getters y Setters con validaciones básicas
    get calle() { return this.#calle; }
    set calle(valor) {
        if (typeof valor !== 'string' || valor.trim() === "") throw new Error("Calle no válida.");
        this.#calle = valor;
    }

    get numero() { return this.#numero; }
    set numero(valor) {
        if (!Number.isInteger(valor) || valor <= 0) {
            throw new Error("El número de la calle debe ser un entero positivo.");
        }
        this.#numero = valor;
    }

    get localidad() { return this.#localidad; }
    set localidad(valor) {
        if (typeof valor !== 'string') throw new Error("Localidad no válida.");
        this.#localidad = valor;
    }

    get codigoPostal() { return this.#codigoPostal; }
    set codigoPostal(valor) {
        if (!Number.isInteger(valor)) throw new Error("El código postal debe ser un número.");
        this.#codigoPostal = valor;
    }

    get numPisos() { return this.#numPisos; }
    set numPisos(valor) { this.#numPisos = valor; }

    get numPuertasPorPiso() { return this.#numPuertasPorPiso; }
    set numPuertasPorPiso(valor) { this.#numPuertasPorPiso = valor; }

    // Gestión de Propietarios
    cambiarPropietarios(planta, puerta, nombres) {
        if (planta > this.#numPisos || puerta > this.#numPuertasPorPiso || planta <= 0 || puerta <= 0) {
            throw new Error("El número de piso o puerta está fuera de rango.");
        }

        const id = `${planta}-${puerta}`;
        // Creamos una nueva instancia de Propietarios (esto valida los nombres internamente)
        this.#pisos.set(id, new Propietarios(nombres));
    }

    getPropietariosPiso(planta, puerta) {
        const id = `${planta}-${puerta}`;
        return this.#pisos.get(id) || "Sin propietarios registrados";
    }

    actualizarDireccion(calle, numero, localidad, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }

    toString() {
        let info = `Edificio en ${this.#calle} ${this.#numero}, ${this.#localidad} (${this.#codigoPostal}). Pisos: ${this.#numPisos}, Puertas por piso: ${this.#numPuertasPorPiso}.\n`;
        info += "Lista de propietarios:";
        this.#pisos.forEach((propietarioObj, id) => {
            info += `\n- Piso ${id}: ${propietarioObj.toString()}`;
        });
        return info;
    }
}