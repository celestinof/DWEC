// --- ACTIVIDAD 2: FORMULARIO ---

window.addEventListener("load", () => {
    //Creamos constantes para acceder más fácilemte
    //formulario
    const formulario = document.getElementById("formulario");

    // nombre (con getElement)
    const nombre= document.getElementById("nombre");

    //apellidos (con querySelector, por mostrar otra forma de hacerlo)
    const apellido=document.querySelector("#apellidos");
    //Obtenemos edad
    const edad = document.getElementById("edad");
    //Obtenemos el NIF
    const nifInput = document.getElementById("nif");

    //Constante para email
    const email = document.getElementById("email");
    //Constante para provincia
    const provincia = document.getElementById("provincia");
    //constante para fecha
    const fecha = document.getElementById("fecha");
    //constante para teléfono
    const telefono = document.getElementById("telefono");
    //constante para hora
    const hora = document.getElementById("hora");


   //1. Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
   
    //cuando nombre pierde el foco...
    nombre.addEventListener("blur", (e) => {
    //... cogemos lo que está escrito y lo pasamos a mayúsculas 
        e.target.value = e.target.value.toUpperCase();
    
    
    
    //2. Se debe validar que nombre y apellidos sean cadenas de texto, sin números ni caracteres especiales (p. ej. =, %, etc.).
    //Usamos regExp = /^[a-zA-ZÁÉÍÓÚÑ\s]+$/
    /**
     * a-z y A-Z: Letras normales.
     * ÁÉÍÓÚÑ: Letras con tildes y eñes.
     * \s: Espacios en blanco (necesario para nombres compuestos).
     * +: Significa que debe haber al menos una letra.
     * $: QUe ahí termina la cadena correcto (y no vengan sorpresas tras un espacio)    */

    const patron=/^[a-zA-ZÁÉÍÓÚÑ\s]+$/;

        const valor = e.target.value;

        if ((!patron.test(valor))){
            // Si hay números o símbolos, ponemos el mensaje de error
        e.target.setCustomValidity("El nombre no admite números ni caracteres especiales");
    } else {
        // Si es correcto (o está vacío), borramos cualquier error previo
        e.target.setCustomValidity("");
    }});

    // Ahora el apellido
    apellido.addEventListener("blur", (e) => {
        e.target.value=e.target.value.toUpperCase();

    //Lo mismo para el 2

        const patron=/^[a-zA-ZÁÉÍÓÚÑ\s]+$/;

        const valor = e.target.value;

        if ((!patron.test(valor))){
            // Si hay números o símbolos, ponemos el mensaje de error
        e.target.setCustomValidity("El nombre no admite números ni caracteres especiales");
    } else {
        // Si es correcto (o está vacío), borramos cualquier error previo
        e.target.setCustomValidity("");
    }

    })

    //3. edad
    edad.addEventListener("blur", (e) => {
    const valor = parseInt(e.target.value);
    if (isNaN(valor) || valor < 0 || valor > 105) {
        e.target.setCustomValidity("La edad debe ser un número entre 0 y 105");
    } else {
        e.target.setCustomValidity("");
    }
});

  
    //4. 4.	Se debe validar el NIF utilizando expresiones regulares para que siga el formato "12345678A". 
    // Además, válida que la letra sea la correcta. Y debe validarse cada vez que se introduce un carácter en el input.


    nifInput.addEventListener("input", (e) => {

    //lo ponemos con letras mayúsculas    
    const nif = e.target.value.toUpperCase();


    e.target.value = nif; // Forzamos mayúsculas mientras escribe
    
    //Para las validaciones del NIF
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const formatoValido = /^\d{8}[A-Z]$/.test(nif);

    if (nif.length == 9) {
        if (formatoValido) {
            //8 primeros son letras
            const numero = nif.substring(0, 8);
            //Último es una letra
            const letraEntrada = nif.charAt(8);
            //Obtención de la letra
            const letraCorrecta = letras[numero % 23];

            //Verificación de la letra
            if (letraEntrada !== letraCorrecta) {
                e.target.setCustomValidity("La letra del NIF no es correcta");
            } else {
                e.target.setCustomValidity(""); // Todo OK
            }

            //si la letra está bien, se revisa el formato
        } else {
            e.target.setCustomValidity("Formato incorrecto: 8 números y 1 letra");
        }
    } else {
        // Mientras no tenga 9 caracteres, podemos dejarlo como inválido 
        // o esperar a que termine de escribir
        e.target.setCustomValidity("El NIF debe tener 9 caracteres");
    }});


    // 5. Validar E-mail
    email.addEventListener("blur", (e) => {
        // Patrón estándar para email: texto + @ + texto + . + texto
        const patronEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!patronEmail.test(e.target.value)) {
            e.target.setCustomValidity("Introduce un correo electrónico válido (ejemplo@correo.com)");
        } else {
            e.target.setCustomValidity("");
        }
    });

    // 6. Validar Provincia (Suponiendo que "0" es el valor por defecto)
    provincia.addEventListener("change", (e) => {
        if (e.target.value === "0" || e.target.value === "") {
            e.target.setCustomValidity("Selecciona una provincia de la lista");
        } else {
            e.target.setCustomValidity("");
        }
    });


    // 7. Validar Teléfono (9 dígitos obligatorios)
    telefono.addEventListener("blur", (e) => {
        const patronTel = /^\d{9}$/;
        if (!patronTel.test(e.target.value)) {
            e.target.setCustomValidity("El teléfono debe tener exactamente 9 dígitos numéricos");
        } else {
            e.target.setCustomValidity("");
        }
    });


    // 8. Validar Fecha
    fecha.addEventListener("blur", (e) => {
        // Comprobamos que no esté vacío. El tipo "date" de HTML ya ayuda con el formato.
        if (!e.target.value) {
            e.target.setCustomValidity("Debes seleccionar una fecha válida");
        } else {
            e.target.setCustomValidity("");
        }
    });


    // 9 Validar Hora
    hora.addEventListener("blur", (e) => {
        // Comprobamos que no esté vacío
        if (!e.target.value) {
            e.target.setCustomValidity("Debes seleccionar una hora");
        } else {
            e.target.setCustomValidity("");
        }
    });
    



    //10. Submit y revisión de errores
    formulario.addEventListener("submit", (e) => {
    // 1. Forzamos la comprobación de validez de todo el formulario
    if (!formulario.checkValidity()) {
        e.preventDefault(); // Detenemos el envío
        
        // 2. Buscamos el primer elemento que sea inválido
        const primerError = formulario.querySelector(":invalid");
        
        if (primerError) {
            // 3. Mostramos el aviso con el mensaje que configuramos en setCustomValidity
            alert("ERROR: " + primerError.validationMessage);
            // 4. Ponemos el foco en ese campo
            primerError.focus();
        }
    } else {
        // Si todo es válido, entonces pedimos la confirmación final
        const seguro = confirm("¿Estás seguro de que deseas enviar el formulario?");
        if (!seguro) {
            e.preventDefault();
        }
    }
});


})
    /**
     * En el desarrollo del ejercicio, encontré otra forma más rápida de hacerlo que dejo señalada para estudiar
     * Crea un array con apellido y nombre y aplica la función a los 2
    const camposTexto = document.querySelectorAll("#nombre, #apellidos");

    camposTexto.forEach(campo => {
        campo.addEventListener("blur", (e) => {
            e.target.value = e.target.value.toUpperCase();
        });
    }); */


