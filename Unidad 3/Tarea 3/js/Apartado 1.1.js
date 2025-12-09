        //  Dimensiones de la PANTALLA. NO VARÍAN.
        const altura_pantalla = window.screen.availHeight; // Altura disponible de la pantalla (excluye barra de tareas)
        const anchura_pantalla = window.screen.availWidth; // Ancho disponible de la pantalla (excluye barra de tareas)

        //El resto de dimensiones si varían, así que hay pedir que se capturen cada vez que tiene un tamaño distinto.
        //antes de mostrar el mensaje.
        function muestraMensaje () {
        
        //Almacenamos el encabezado en una constante para modificar más tarde su contenido
        const datos_navegador=document.getElementById("datos_navegador");

        // Como window es el objeto por defecto, en este caso voy a usarlo. En el siguiente no, para que se vea.
        //  Dimensiones del NAVEGADOR (Ventana Completa)
        const altura_navegador = window.outerHeight; // Altura total del navegador, incluyendo bordes y barras de herramientas
        const anchura_navegador = window.outerWidth;  // Ancho total del navegador, incluyendo bordes y barras de herramientas

        //Sin uso de window por defecto.
        //  Dimensiones del VIEWPORT (Espacio Útil para el Contenido)
        const altura_utilnavegador = innerHeight; // Altura del área de contenido (viewport)
        const anchur_utilnavegador = innerWidth;  // Ancho del área de contenido (viewport)    
        
        datos_navegador.innerHTML=`La altura de la pantalla es ${altura_pantalla} px, la anchura es ${anchura_pantalla} px.<br>
        La altura del navegador (con bordes) es de ${altura_navegador} px, y su anchura ${anchura_navegador} px.<br>
        El espacio útil en el navegador es de ${altura_utilnavegador} px de altura, y ${anchur_utilnavegador} px de anchura.`;
        }

        //lanzamos el temporizador que lanza la funcion cada 1 segundo.
        setInterval(muestraMensaje,1000 );

