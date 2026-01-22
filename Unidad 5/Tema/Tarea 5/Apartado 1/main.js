

//Inicialización
window.addEventListener("load", () => {
    // Seleccionamos TODOS los enlaces y creamos el array enlaces
    const enlace = document.querySelectorAll(".enlace");

    // Recorremos la lista y asignamos el evento a cada uno
    enlace.forEach(enlace => {
        enlace.addEventListener("click", mostrarOcultar);
    });
});

    function mostrarOcultar (){
    //Si recordamos el tema, this nos dice que se refiere al elemento sobre el que
    //se produce el evento. Con parentElement subimos un nivel    
    const div = this.parentElement;
    const enlace = this;

    //Ahora hay que distinguir si la clase accordion lleva el active o no.
    /**
     * Si div es class="accordion active", se elimina active
     * Si div es class="accordion", se añade active
     */
    if (div.classList.contains("active")) {

        div.classList.remove("active");
        enlace.textContent="Mostrar contenido";

    } else {

        div.classList.add("active");
        enlace.textContent="Ocultar contenido";
    }    
    }

    //Manejo de teclas:

    //Cuando pulsamos la tecla (keydown), lanzamos la función en la que el parámetro es el propio evento de pulsación
    window.addEventListener("keydown", (event) => {
    // Obtenemos la tecla en mayúsculas para evitar problemas con Bloq Mayús
    const tecla = event.key.toUpperCase();

    //capturamos array con los enlaces
    const enlace = document.querySelectorAll(".enlace");

    enlace.forEach(enlace => {
        const estaActivo = enlace.parentElement.classList.contains("active");

        if (tecla === "A") {
            // "A" de Abierto: Si NO está active, se puede pulsar (si no se queda como está).           
            if (!estaActivo) 
                
                //llamamos usando call a enlace
                mostrarOcultar.call(enlace);
        } 
        else if (tecla === "C") {
            // "C" de Cerrado: Si SÍ está activo, lo pulsamos 
            if (estaActivo) 
                
                //llamamos usando call a enlace
                mostrarOcultar.call(enlace);
        } 
        else if (tecla === "T") {
            
            // "T" de Toggle: Invertimos el estado siempre 
                mostrarOcultar.call(enlace);
        }
    });
});