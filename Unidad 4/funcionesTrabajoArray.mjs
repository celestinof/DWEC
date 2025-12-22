let array1=[8,7,4,4,2,1,3,9,2,3,5]

function numeroMasAltoArray(a){
    //Creamos una copia del array que recibimos
    let copia=[...a];
    //Ordenamos el array
    copia.sort();
    //Buscamos la longitud del array, para saber cuantos elementos tiene
    let longitud=copia.length;
    //Como los indices empiezan en 0, hay que tener cuidado y restar uno.
    return copia[longitud-1];

}

//PRUEBA numeroMasAltoArray(array1);


function numerosImparesArray(a){

    let arrayImpares=[];
    
    for (let elemento of a){

        if (elemento%2!=0) {

            arrayImpares.push(elemento);

        }     

    }
    return arrayImpares;

}
//prueba
//console.log(numerosImparesArray(array1));

function mediaAritmetica(a){

    let arrayCopia=a;
    let suma=0;
    for (let elemento of a){

        suma+=elemento;
    }

    let resultado=suma/arrayCopia.length;

    return resultado

}
//prueba
//console.log(mediaAritmetica(array1));

function moda(a) {
    // 1. Crear un mapa de frecuencias (contar cuántas veces sale cada cosa)
    const frecuencias = a.reduce((contador, elemento) => {
        // Si el elemento ya existe, le sumamos 1, si no, empezamos en 1
        contador[elemento] = (contador[elemento] || 0) + 1;
        return contador;
    }, {});

    // 2. Convertir el objeto de frecuencias en un array para poder manipularlo
    // Esto nos da algo como: [ ["8", 3], ["1", 1], ["3", 2] ]
    const listaFrecuencias = Object.entries(frecuencias);

    // 3. Ordenar la lista de mayor a menor según la cantidad de repeticiones
    // El elemento [1] de cada pareja es la cantidad
    listaFrecuencias.sort((a, b) => b[1] - a[1]);

    // 4. El primer elemento de la lista ordenada es nuestra moda
    const moda = listaFrecuencias[0][0];

    // Como las claves de objeto son siempre texto, lo convertimos a número
    return Number(moda);
}

// Ejemplo de prueba:
const miArray = [1, 2, 3, 2, 4, 2, 5, 2, 1, 1];
console.log("La moda es:", moda(miArray)); // Debería devolver 2

function esPrimo(numero) {
    if (numero < 2) return false; // El 0 y el 1 no son primos
    
    // Comprobamos si es divisible por cualquier número hasta su raíz cuadrada
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function contarPrimos(lista) {
    // 1. Filtramos el array para quedarnos solo con los primos
    const soloPrimos = lista.filter(numero => esPrimo(numero));
    
    // 2. Devolvemos la longitud del nuevo array filtrado
    return soloPrimos.length;
}

// Ejemplo de uso:
const misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(`Hay ${contarPrimos(misNumeros)} números primos.`); // Resultado: 5 (2, 3, 5, 7, 11)