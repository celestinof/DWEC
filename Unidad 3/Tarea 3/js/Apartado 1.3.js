/*Por los apuntes del tema, tendríamos que hacer algo de este estilo:

        const cliente= window.navigator.appName;
        const plataforma=window.navigator.platform;

        const informacion = document.getElementById("info");

        informacion.innerHTML=`El navegador utilizado es ${cliente}, y la plataforma utilizada es ${plataforma}`

        PERO AL ESTAR DEPRECATED, HE BUSCADO OTRA MANERA DE HACERLO MÁS CORRECTA
        Buscando en foros de stackoverflow, recomiendan hacerlo de una manera similar a la siguiene
        */

        // Obtener el elemento donde se mostrará la información
        const informacion = document.getElementById("info");

        // --- 1. Obtener el User Agent (cadena que identifica el navegador y SO) ---
        const userAgent = navigator.userAgent;

        // --- 2. Determinar si es un Dispositivo Móvil ---
        // Se considera móvil si el userAgent contiene ciertas palabras clave comunes. En principio son
        //las siguientes:
        //Creo una constante para saber si es móvil:
        // a) Indico el patrón entre "/"
        // b) Los separo con un "OR". Con que esté cualquiera es móvil.
        // c) con el "i" me aseguro que haga un ignore case
        // método test que actúa sobre el patrón (/patrón/), para ver si alguna de las palabras está en el useragent
        const esMovil = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(userAgent);

        // --- 3. Extraer información del Navegador y Sistema Operativo ---
        let navegador = "Desconocido";
        let sistemaOperativo = "Desconocido";
        
        // Detección de Sistema Operativo. Eso lo miré por internet (stackoverflow).
        if (userAgent.includes("Win")) {
            sistemaOperativo = "Windows";
        } else if (userAgent.includes("Mac")) {
            sistemaOperativo = "macOS / iOS";
        } else if (userAgent.includes("Linux")) {
            sistemaOperativo = "Linux / Android";
        } else if (userAgent.includes("X11")) {
            sistemaOperativo = "UNIX";
        }

        // Detección de Navegador. Esto lo miré por internet (stackoverflow)
        if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
            navegador = "Google Chrome";
        } else if (userAgent.includes("Firefox")) {
            navegador = "Mozilla Firefox";
        } else if (userAgent.includes("Edg")) {
            navegador = "Microsoft Edge";
        } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
            navegador = "Apple Safari";
        }

        // --- 4. Construir el mensaje ---
        let mensajeMovil = "";
        
        if (esMovil) {
        mensajeMovil = "**SÍ** se ha accedido desde un dispositivo móvil.";
        } else {
        mensajeMovil = "**NO** se ha accedido desde un dispositivo móvil.";
        }           

        informacion.innerHTML = `
            <p>
                **Navegador Identificado:** <strong>${navegador}</strong><br>
                **Sistema Operativo Estimado:** <strong>${sistemaOperativo}</strong><br>
                **Acceso Móvil:** ${mensajeMovil}
            </p>
            <p>
                User Agent Completo para referencia: ${userAgent}
            </p>`;
