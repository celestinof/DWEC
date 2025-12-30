export default class Propietarios {
    #propietarios = [];

    constructor(propietarios = []) {
        if (!Array.isArray(propietarios)) {
            throw new Error("El valor inicial de propietarios debe ser una lista.");
        }
        // Usamos el setter para aprovechar la validación
        this.propietarios = propietarios;
    }

    get propietarios() {
        return this.#propietarios;
    }

    set propietarios(listaNombres) {
        if (!Array.isArray(listaNombres)) {
            throw new Error("Se requiere una lista de nombres.");
        }
        
        // Validación: cada elemento debe ser string y no contener números
        listaNombres.forEach(nombre => {
            if (typeof nombre !== 'string' || /\d/.test(nombre)) {
                throw new Error("Cada nombre debe ser una cadena de texto sin números.");
            }
        });

        this.#propietarios = listaNombres;
    }

    toString() {
        return this.#propietarios.join(', ');
    }
}