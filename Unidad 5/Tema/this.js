//Inicialización
window.addEventListener("load",init);
function init(){
    document.getElementById('myButton1').addEventListener('click', clickHandle);
    document.getElementById('myButton2').addEventListener('click', clickHandle.bind('Elemento personalizado'));
}

//Función de prueba del objeto this en eventos
function clickHandle(event) {
    console.log("-----------------------------------"); 
    console.log('Usando this:');
    console.log(this); 

    console.log('Usando event.target con bind: ');
    console.log(event.target);
}