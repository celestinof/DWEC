export default class Propietarios {
    //PROPIEDADES
    //Se pide que tenga propiedad privada propietarios. Así que con el # la hago privada:
    #propietarios;

    
    //Constructor. Por defecto inicia una lista vacía si no hay listaInicial:
    constructor(listaInicial = []) {
        //Preguntamos a la clase Array si listaInicial NO ES un array. Si no lo es lanzamos error
        if (!Array.isArray(listaInicial)) {
            throw new Error("El valor pasado debe ser una lista.");
        }
        // Si es un array, Llamamos al setter (que crearemos ahora) para que valide el contenido
        this.propietarios = listaInicial; 
    }

    //SETTER Y GETTER
    set propietarios(nuevaLista){
        //Para el setter el enunciado pide que los elementos sean strings, y no numéricos
        for (let elemento of nuevaLista){
            if (typeof(elemento)!="string") {
                throw new Error ("La lista contiene elementos que no son String")}
            }
        //Si la lista está bien, la grabamos en #propietarios        
        this.#propietarios=nuevaLista;
    }

    //retorna la lista de propietarios
    get propietarios(){
        return this.#propietarios; 
    }

    //MÉTODO ADICIONAL
    //método toString (en las clases no se usa function). Retorna los elementos de la lista separados por coma.
    toString(){
    return this.propietarios.join(", ");
    }

}

