
     // 1. FUNCIONES PARA MANEJO DEL DOM.
       
     /**Función que obtiene el texto del DOM
     * Obtiene el valor actual del contenido del elemento <textarea> con el ID "textoEvaluado",
    * eliminando cualquier espacio en blanco al inicio o al final.
    * * @returns {string} El contenido de la textarea.
    */
        function obtenerTexto() {
        // Usa .trim() para evitar contar espacios iniciales/finales
        const elementoTexto=document.getElementById("textoEvaluado");
        return elementoTexto.value;
        }

     /** Función que actualiza el contenido de texto de un elemento HTML específico por su ID.
    * @param id - El ID del elemento HTML (p. ej., "p1", "p5") cuyo texto se va a modificar.
    * @param  mensaje - El nuevo contenido de texto que se mostrará dentro del elemento.
    * @return no tiene valor de retorno
    */   
    function mostrarResultado(id, mensaje) {
        document.getElementById(id).innerText = mensaje;
    }
     
    // ===============================================
    //              FUNCIONES DE LA TAREA
    // ===============================================

    const longTexto="";
    // Apartado 3.1. Longitud
    function compLongitud() {
        const textoActual = obtenerTexto();
        //Longitud total de la cadena, almacenada en const longTexto.
        const longTexto = textoActual.length; 
        //Lleva el resultado al HTML.
        mostrarResultado("p1", `Apartado 3.1. El tamaño del texto es ${longTexto}`);
    }

    // Apartado 3.2. Número de Palabras 
    function compPalabras() {
        const textoActual = obtenerTexto();
        // Array de elementos separado por espacios.
        const palabras = textoActual.split(" ");
        //Cuenta la cantidad de elementos
        const numPalabras = palabras.length;

        //llevarlo al HTML
        mostrarResultado("p2", `Apartado 3.2. El número de palabras es: ${numPalabras}`);
    }

    // Apartado 3.3. Número de Frases (Lógica Original: split("."))
    function compFrases() {
        const textoActual = obtenerTexto();
        // Almacena en el array el número de frases, separadas por punto.
        const frases = textoActual.split(".");
        // Cuenta el número de elementos en el array.
        const numFrases = frases.length;

        //llevarlo al HTML
        mostrarResultado("p3", `Apartado 3.3. El número de frases es: ${numFrases}`);
    }

    // Apartado 3.4. Mayúsculas
    function diezEnMayus() {
        const textoActual = obtenerTexto();

        // 3.4.a: Primeros 10 caracteres (incluyendo espacios) a mayúsculas
        const carMayus = textoActual.substring(0, 10).toUpperCase();

        // 3.4.b: Primeros 10 caracteres (SIN espacios) a mayúsculas. (miré en internet como quitarlos)
        const textoActualCompactado = textoActual.replace(/\s/g, "");
        const carMayusb = textoActualCompactado.substring(0, 10).toUpperCase();

        mostrarResultado("p4", `Apartado 3.4.a. Los diez primeros caracteres mayúsculos (con espacios) son: ${carMayus}`); 
        mostrarResultado("p4b", `Apartado 3.4.b. Los diez primeros caracteres mayúsculos (sin espacios) son: ${carMayusb}`);
    }

    // Apartado 3.5. Búsqueda de Palabras
    function buscaPalabra() {
        //Se obtiene el texto, como antes
        const textoActual = obtenerTexto();
        const nombreReemplazo = "Celestino";

        // Función auxiliar de conteo (no llamada al DOM)
        function contarAlumnado(texto) {
            const textoEnMinusculas = texto.toLowerCase();
            // Contamos ocurrencias de "alumno" y "alumna".         
            const conteoAlumno = textoEnMinusculas.split("alumno").length - 1; //explicación del -1 abajo, que no lo veía
            const conteoAlumna = textoEnMinusculas.split("alumna").length - 1;
            return conteoAlumno + conteoAlumna;
        
            // Ojo, como vamos a separar alumno y alumna de la cadena, por ejemplo en en caos de alumno:
            // Como vamos a "cortar alumno del array del resto del texto, el texto resultante será igual
            // al número de alumnos más uno. Por ej: let var1="Soy un alumno nuevo"
            // let conteo=var1.split("almumno"). conteo sería igual a  ["Soy un", "nuevo"] (2, en vez de 1). 
        }

        // Función auxiliar de reemplazo (no llamada al DOM)
        function reemplazarAlumnado(texto, reemplazo) {
            // Usamos RegEx con bandera 'gi' (global e insensible)
            const regex = /alumn[oa]/gi; 
            return texto.replace(regex, reemplazo);
        }

        const conteo = contarAlumnado(textoActual);
        const textoReemplazado = reemplazarAlumnado(textoActual, nombreReemplazo);
        
        let mensaje = `Apartado 3.5. En total se encontraron ${conteo} referencias a "alumno/a".\n\n
        Texto original con reemplazo (${nombreReemplazo}):\n${textoReemplazado}`;

        mostrarResultado("p5", mensaje);
    }


    //Lanzar todas las funciones juntas.
    function todasJuntas(){

    compLongitud();
    compPalabras();
    compFrases();
    diezEnMayus();
    buscaPalabra();

    }
        