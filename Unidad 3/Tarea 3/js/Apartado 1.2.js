 //URL de la web
        const url=window.location;
        //Obtención del elemento donde mostramos la información. C
        const infoURL=document.getElementById("textoUrl");
        infoURL.innerHTML=`La URL de la web es: ${url}`;

        function iraGoogle(){
            //Propiedad href. Le estamos diciendo cual es el location que tiene.
            window.location.href="https://www.google.com/";
        }
        
        function iraYahoo() {
            //Método replace En este caso se borra el historial no permitiendo volver.
            window.location.replace("https://es.search.yahoo.com/"); 
        }