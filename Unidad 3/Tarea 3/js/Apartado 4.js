
        //--- 1. CONSTANTES ---
        // Referencias a los elementos del HTML (la "interfaz de usuario").
        const inputLista = document.getElementById('inputNombre');
        const listaMostrar = document.getElementById('listaUsuario');
        const btnAnadir = document.getElementById('btnAñadir');
        const btnLimpiar = document.getElementById('btnLimpiar');

        // Nombre clave único para guardar y recuperar la lista en la memoria local del navegador.
        const CLAVE_ALMACENAMIENTO = 'miListaDeNombres';
        

        //----INICIAR LAS FUNCIONES DE LA WEB AL CARGAR EL DOM ----
        /**Configura la aplicación.*/
        function iniciarApp() {
            // A. Carga los nombres guardados (localstorage) inmediatamente al abrir la página.
            mostrarLista(); 
            
            // B. Asigna las funciones a los botones (Event Listeners).
            btnAnadir.addEventListener('click', añadir);//recordar que al ir en addEventListener siempre va sin (), que se me olvida y no funciona.
            btnLimpiar.addEventListener('click', limpiar);
        }

        // CASI LO MÁS IMPORTANTE. SE ME OLVIDA. Espera a que la página HTML esté completamente cargada antes de iniciar la app.
        document.addEventListener('DOMContentLoaded', iniciarApp); 

        // --- 2. PERSISTENCIA DE DATOS (localStorage) ---

        /**Carga la lista de nombres desde localStorage, si la hay.
         * @returns {Array} Un array de nombres (o un array vacío si no hay nada guardado).*/
        
        function obtenerLista() {
        // localStorage.getItem() recupera los datos como una cadena JSON.
        const listaJSON = localStorage.getItem(CLAVE_ALMACENAMIENTO);

        let lista; // Variable para almacenar el resultado final.

        // Comprobamos si listaJSON tiene un valor (no es null, undefined, o una cadena vacía)
        if (listaJSON) {
        // Si hay datos (la condición es verdadera), los convertimos de JSON a Array.
        lista = JSON.parse(listaJSON);
        } else {
        // Si no hay datos (la condición es falsa, generalmente porque es null), inicializamos con un Array vacío.
        lista = [];
        }

        return lista; //retorna la lista, que será un array en cualquier caso
        }

        /**Guarda el array de nombres actual en localStorage.
         * @param {Array} lista - El array de nombres a guardar.*/
        function guardarLista(lista) {
            // JSON.stringify() convierte el Array en una cadena JSON para poder guardarse.
            const listaParaAlmacenar = JSON.stringify(lista);

            // Almaceno los datos en local. Podría haberlo hecho todo en un paso, pero así me parece más
            // claro paso a paso. localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(lista) );
            localStorage.setItem(CLAVE_ALMACENAMIENTO, listaParaAlmacenar );
        }

        // --- 3. FUNCIONES DE VISTA (Interactúan con el HTML) ---

    /**Actualiza la lista en el HTML, construyendo todos los <li> como una cadena de texto.
    * Usa el método .forEach() y la propiedad innerHTML para insertar el HTML de golpe.*/

    function mostrarLista() {
    // Obtiene la lista de nombres del almacenamiento (que es un Array de JS).
    const listaGuardada = obtenerLista();
    
    // Inicializamos una variable para construir la cadena HTML de todos los <li>.
    let contenidoHTML = ''; 
    
    // RECORRIDO USANDO .forEach()
    // Por cada 'nombre' en el array, ejecutamos el código.
    listaGuardada.forEach(nombre => {
        // Concatenamos (añadimos) a la cadena 'contenidoHTML' la estructura <li>...</li>
        // Se crean manualmente las etiquetas HTML como parte del texto.
        contenidoHTML += `<li>${nombre}</li>`; 
    });

    // NSERCIÓN EN EL DOM (El reemplazo de createElement/appendChild)
    
    // listaMostrar (que es la referencia al <ul>) limpia y reemplaza su contenido
    // inyectando la cadena de texto HTML que acabamos de construir.
    listaMostrar.innerHTML = contenidoHTML; 
    }

        // --- 4. FUNCIONES DE EVENTO (BOTONES) ---

        /**
         * Se ejecuta al pulsar "Añadir".
         */
        function añadir() {
            //El valor de la lista sin espacios
            const nuevoNombre = inputLista.value.trim();

            if (nuevoNombre) {
                // 1. Cargar: Obtiene la lista actual.
                const lista = obtenerLista();
                
                // 2. Modificar: Añade el nuevo nombre al array (el modelo de datos).
                lista.push(nuevoNombre); 
                
                // 3. Guardar: Persiste el array modificado en localStorage.
                guardarLista(lista);
                
                // 4. Actualizar: Dibuja la nueva lista en la pantalla.
                mostrarLista(); 
                
                // 5. Limpiar: Deja el input vacío para el siguiente nombre.
                inputLista.value = '';
            } else {
                alert("No has escrito nada");
            }
        }

        /**
         * Se ejecuta al pulsar "Limpiar Todo".
         */
        function limpiar() {
            if (confirm("¿Seguro que quieres borrar TODOS los nombres guardados?")) {
                // localStorage.removeItem() borra permanentemente la clave.
                localStorage.removeItem(CLAVE_ALMACENAMIENTO); 
                
                // La vista se actualiza, mostrando ahora una lista vacía.
                mostrarLista(); 
            }
        }


       
