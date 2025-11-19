   
        /**
         * @autor Celestino Amigo, para módulo de DAW.
        */
        // ------------------------------------
        // --- INICIALIZACIÓN Y VALIDACIÓN DE OPCIÓN ---
        // ------------------------------------

        /** Constantes que redirigen a cada una de las secciones del ejercicio */
        const factorial = document.getElementById("factorial");
        const media = document.getElementById("media");
        const palindromo = document.getElementById("palindromo");
        const dni = document.getElementById("dni");

        /**/
        let eleccionString="";
        let eleccion=0;
        let eleccionInvalida = true;

        // Bucle de validación de la elección inicial
        while (eleccionInvalida) {
            eleccionString = prompt("Seleccione opción: \n"
                + "1. Cálculo de factorial.\n" + "2. Cálculo de media.\n" + "3. Verificación de palíndromo: \n" + "4. Verificación de DNI: \n"
            )

            try {
                // 1. Manejo de cancelación y cadenas vacías.
                if (eleccionString === null || eleccionString.trim() === "") {
                    // Si el usuario cancela, salimos del bucle y del switch.
                    eleccionInvalida = false;
                    eleccion = 0; 
                    break;
                }

                // 2. Convertimos el valor a entero.
                eleccion = parseInt(eleccionString);

                // 3. Verificamos si es numérico.
                if (isNaN(eleccion)) {
                    throw new Error("Valor introducido no numérico");
                }

                // 4. Verificamos el rango (1 a 4).
                if (eleccion < 1 || eleccion > 4) {
                    throw new Error("Valor introducido fuera del rango (1 a 4)");
                }

                // Si no hay errores, se sale del bucle.
                eleccionInvalida = false;

            } catch (error) {
                alert(error.message); //Mensaje de alerta en pantalla con el error, y reinicio del bucle.
            }
        }

        // ------------------------------------
        // --- EJECUCIÓN DEL PROGRAMA SELECCIONADO ---
        // ------------------------------------

        /**
         * La elección dispara la función asignada a cada caso, definidas más abajo.
        */
        switch (eleccion) {

            case 1:
                factorial.style.display = 'block';
                // La etiqueta <p> para la opción elegida puede actualizarse aquí:
                document.getElementById("opcion elegida").textContent = "Ha elegido: 1. Cálculo de factorial.";
                validaciondeFactorial(); 
                break;

            case 2:
                media.style.display = 'block';
                document.getElementById("opcion elegida").textContent = "Ha elegido: 2. Cálculo de media.";
                calculoMedia();
                break;

            case 3:
                palindromo.style.display = 'block';
                document.getElementById("opcion elegida").textContent = "Ha elegido: 3. Verificación de palíndromo.";
                verificaPalindromo();
                break;

            case 4:
                dni.style.display = 'block';
                document.getElementById("opcion elegida").textContent = "Ha elegido: 4. Verificación de DNI.";
                validarDNI();
                break;

            default:
                // Caso de cancelación o elección inválida
                document.getElementById("opcion elegida").textContent = "Operación cancelada o elección no válida.";
                break;
        }

        // ------------------------------------
        // --- DEFINICIÓN DE FUNCIONES ---
        // ------------------------------------


        // ------------------------------------
        // --- FUNCIÓN TAREA 2 ---
        // ------------------------------------


        /**
         * @description Calcula el factorial de un número entero no negativo solicitado al usuario.
         * Para darle más interactividad al ejemplo lo solicito por prompt por pantalla.
         */
        function validaciondeFactorial() { 
            let numeroString;
            let numero;
            let resultado = 1;
            let mensajefactorial;

            do {
                numeroString = prompt("Introduce el número para calcular el factorial");
                numero = parseInt(numeroString);

                //Verificación de que es un número entero positivo. Si no, se reinicia el bucle.
                if (isNaN(numero) || numero < 0 || numeroString === null) {
                    alert("Por favor, introduce un número entero no negativo válido.");
                }
            } while (isNaN(numero) || numero < 0 || numeroString === null);

            for (let i = numero; i >= 1; i--) {
                resultado = resultado * i;
            }

            mensajefactorial = document.getElementById("resultado_factorial");

            if (mensajefactorial) {
                mensajefactorial.textContent = `El factorial de ${numero} es ${resultado}.`;
            } else {
                console.log(`No se encontró el elemento con ID "resultado_factorial".`);
            }
        }



        // ------------------------------------
        // ----- FUNCIÓN TAREA 3---------------
        // ------------------------------------

        /**
         * @description Solicita la cantidad de números y luego pide cada número,
         * calculando su media aritmética.
         */
        function calculoMedia() {
            let arrayNumeros = [];
            let cantidadnumString;
            let cantidadnum;
            let numeroString;
            let numero;
            let sumaNumeros = 0;
            let media = 0;
            let mensajeMedia = document.getElementById("resultado_media")

            do {
                cantidadnumString = prompt("Introduce el total de números para el que quieres calcular la media: ");
                cantidadnum = parseInt(cantidadnumString);

                if (isNaN(cantidadnum) || cantidadnum < 0 || cantidadnumString === null) {
                    alert("Por favor, introduce un número entero no negativo válido.");
                }
            } while (isNaN(cantidadnum) || cantidadnum < 0 || cantidadnumString === null);

            for (let i = 0; i < cantidadnum; ++i) {
                do {
                    numeroString = prompt(`Introduce el número en la posición ${i + 1} de ${cantidadnum}`);
                    numero = parseFloat(numeroString); // Usar parseFloat para permitir decimales
            
            //Verificación de número
                    if (isNaN(numero) || numeroString === null) {
                        alert("Por favor, introduce un número válido.");
                    }
                } while (isNaN(numero) || numeroString === null);

                arrayNumeros.push(numero);
            }

            // Bucle para sumar los números
            for (let num of arrayNumeros) {
                sumaNumeros += num;
            }

            // Cálculo y visualización de la media (fuera del bucle de suma)
            if (arrayNumeros.length > 0) {
                media = sumaNumeros / arrayNumeros.length;
            }
            

            if (mensajeMedia) {
                mensajeMedia.textContent = `La media es: ${media.toFixed(2)}`;
            } else {
                console.log(`No se encontró el elemento con ID "resultado_media".`);
            }
        }



        // ------------------------------------
        // ----- FUNCIÓN TAREA 4---------------
        // ------------------------------------

        /**
         * @description Verifica si una cadena de texto solicitada al usuario es un palíndromo.
         * Ignora mayúsculas y minúsculas, aunque no si hay acentos...
         */
        function verificaPalindromo() {
            let palindromo;
            let arrayComparacion1 = [];
            let arrayComparacion2 = [];
            let esPalindromo = true;
            const mensajePalindromo = document.getElementById("mensaje_palindromo");

            do {
                palindromo = prompt("Introduce un palíndromo: ");

                if (palindromo === null) {
                    if (mensajePalindromo) mensajePalindromo.textContent = "Operación cancelada.";
                    return;
                }
            } while (palindromo.trim() === "");

            let textoNormalizado = palindromo.toLocaleLowerCase();
            let textoLimpio = "";

            // Limpieza de texto, para que no entren los espacios o caracteres. (solo letras y números)
            for (let i = 0; i < textoNormalizado.length; i++) {
                let caracter = textoNormalizado[i];
                if ((caracter >= 'a' && caracter <= 'z') || (caracter >= '0' && caracter <= '9')) {
                    textoLimpio += caracter;
                }
            }

            // Llenar arrays para comparación
            for (let letra of textoLimpio) {
                arrayComparacion1.push(letra);
            }
            arrayComparacion2 = [...arrayComparacion1];
            arrayComparacion2.reverse();

            // Comparar
            for (let i = 0; i < arrayComparacion1.length; i++) {
                if (arrayComparacion1[i] !== arrayComparacion2[i]) {
                    esPalindromo = false;
                    break;
                }
            }

            // Mostrar resultado
            if (mensajePalindromo) {
                if (esPalindromo) {
                    mensajePalindromo.textContent = `"${palindromo}" SÍ es un palíndromo.`;
                } else {
                    mensajePalindromo.textContent = `"${palindromo}" NO es un palíndromo.`;
                }
            }
        }


        // ------------------------------------
        // ----- FUNCIÓN TAREA 5---------------
        // ------------------------------------


        /**
         * @description Solicita y valida un NIF español repetidamente hasta que es correcto o se cancela.
         */
        function validarDNI() {
            const LETRAS_NIF = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            const mensajeElemento = document.getElementById("mensaje_dni");

            while (true) {
                let nif = prompt("Introduce tu NIF (8 dígitos + 1 letra):");

                if (nif === null) {
                    if (mensajeElemento) {
                        mensajeElemento.textContent = "Validación de NIF cancelada.";
                        mensajeElemento.style.color = "orange";
                    }
                    return false;
                }

                nif = nif.trim().toUpperCase();

                if (nif.length !== 9) {
                    alert(`Error: El NIF introducido debe tener exactamente 9 caracteres.`);
                    continue;
                }

                const numeroNIF = nif.substring(0, 8);
                const letraNIF = nif.substring(8, 9);

                if (isNaN(numeroNIF) || numeroNIF.length !== 8) {
                    alert("Error: Los primeros 8 caracteres deben ser dígitos.");
                    continue;
                }

                const numeroEntero = parseInt(numeroNIF, 10);
                const indiceLetra = numeroEntero % 23;
                const letraCalculada = LETRAS_NIF[indiceLetra];

                if (letraNIF === letraCalculada) {
                    if (mensajeElemento) {
                        mensajeElemento.textContent = `NIF Válido: ${nif}`;
                        mensajeElemento.style.color = "green";
                    }
                    return true;
                } else {
                    alert(`NIF Inválido. La letra '${letraNIF}' es incorrecta. La letra correcta es '${letraCalculada}'.`);
                }
            }
        }
