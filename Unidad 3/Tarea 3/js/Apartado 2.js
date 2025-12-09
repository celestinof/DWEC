 //Solicitamos la fecha de hoy
            const fechaHoy= new Date();

            //Fecha a día de hoy:
            //Obtenemos el día de hoy
            const diaActual=fechaHoy.getDate();
            //Los meses van de 0 a 11, por lo que hay que sumar 1 para que el mes correcto
            const mesActual=fechaHoy.getMonth()+1;
            //Obtenemos el año actual. Hay que usar getFullYear(), ya que getYear() no funciona bien (leer en internet)
            const anioActual=fechaHoy.getFullYear();

            //Constante que captura el párrafo donde se va a mostar la fecha de hoy
            const hoy=document.getElementById("fechaHoy");
            
            //Sacamos el contenido a la página modificando el ese párrafo
            hoy.innerHTML=`La fecha actual es ${diaActual}/${mesActual}/${anioActual}`


            


            
            //Almacenamos el objeto del dom en el que presentaremos el resultado
            const fechasComparadas=document.getElementById("comparaFechas");
            
            function evaluaFecha(){
            
            //Para que evalúe la fecha introducida, tienen que estar dentro de la función.
            //Si no, nada más abrir la página se carga el valor en el inputo y no vuelve a cambiar.
            //Almacenamos en valor de la fecha a evaluar, introducida en el input. Usamos value para almacenar el valor
            //Se extrae como String
            const fechaInputString=document.getElementById("fechaUsuario").value;
            //Para convertirlo a formato Date, creamos un nuevo objeto.
            const fechaInput= new Date(fechaInputString);


            if (fechaInput<fechaHoy){
                fechasComparadas.innerHTML="La fecha introducida es menor a la fecha de Hoy"
            } 
            
            //Para este else, tuve que hacerlo así, puesto que al contener las horas
            //horas, minutos, segundos y milisegundos, nunca entraba a este bloque.
            else if (fechaHoy.getDate()==fechaInput.getDate()&&
            fechaHoy.getMonth()==fechaInput.getMonth()&&
            fechaHoy.getFullYear()==fechaInput.getFullYear()){
                fechasComparadas.innerHTML="La fecha introducida es igual a la de hoy."
            }
             else {
                fechasComparadas.innerHTML="La fecha introducida es superior a la fecha de hoy"
            }       
        }

        //Para el apartado 2.2., tenemos que aumentar la fecha actual en 20 días.

            const fechaAumentadaTexto=document.getElementById("fechasumada");

            let hoyMas20 = new Date();
            hoyMas20.setDate(hoyMas20.getDate()+20);

            let diaMas20=hoyMas20.getDate();
            let mesMas20=hoyMas20.getMonth()+1;
            let anioMas20=hoyMas20.getFullYear();

        fechaAumentadaTexto.innerHTML=`La fecha de hoy más 20 días es ${diaMas20}/${mesMas20}/${anioMas20}`;
