"use strict";
//Comparar este bloque con el del archivo con js para ver las diferencias
function compruebaEdad() {
    //declaración de variables
    const EDAD_INTRODUCIDA = document.getElementById("edad");
    const ELEMENTO_RESULTADO = document.getElementById("resultado");
    /*Pero por el tipado fuerte de typscript, tenemos que asegurarnos de que
    los campos que vienen del HTML no son null, y manejar posibles errores
    antes de utilizarlos. Si no ts nos dará error */
    if (EDAD_INTRODUCIDA && ELEMENTO_RESULTADO) {
        /* Este bloque solo actua si tanto EDAD_INTRODUCIDA como ELEMENTO_RESULTADO
        tienen valor asignado.
        No obstante, para accede a "value" hay que decirle a ts que
         tipo de elemento es cada constante.
        */
        const inputElement = EDAD_INTRODUCIDA;
        //ahora ya si que podemos indicar a ts la variable con el tipado number,
        //sobre el valor del elemento
        const EDAD_INT = parseInt(inputElement.value);
        let resultado;
        if (EDAD_INT < 0 || EDAD_INT > 120) {
            resultado = "Edad fuera del rango admitido (1 a 120)";
        }
        else {
            if (EDAD_INT < 18) {
                resultado = "Eres menor de edad";
            }
            else {
                resultado = "Eres mayor de edad";
            }
        }
        ELEMENTO_RESULTADO.textContent = resultado;
    }
    return false;
}
