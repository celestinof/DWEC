// Estos son los datos iniciales que nos pide el ejercicio [cite: 17-20]
let datosIniciales = [
    { nombre: "Oscar", apellidos: "Gomez", edad: "32" },
    { nombre: "Ana", apellidos: "Gonzalez", edad: "33" }
];

// Seleccionamos los elementos que vamos a usar de la página
const formulario = document.querySelector('form');
const tabla = document.querySelector('table tbody');
const botonAñadir = document.querySelector('input[type="submit"]');

// Función que se ejecuta al cargar la página [cite: 16]
window.onload = () => {
    // Metemos los datos iniciales en la tabla
    datosIniciales.forEach(persona => {
        crearNuevaFila(persona.nombre, persona.apellidos, persona.edad);
    });
    // Comprobar si el botón debe estar activo al principio [cite: 6]
    validarFormulario();
};

// Esta función crea una fila nueva usando el sistema de nodos [cite: 7]
function crearNuevaFila(nombre, apellido, edad) {
    const fila = document.createElement('tr');

    // Creamos las celdas de datos
    fila.innerHTML = `
        <td class="nombre">${nombre}</td>
        <td class="apellidos">${apellido}</td>
        <td class="edad">${edad}</td>
        <td>
            <button class="boton-borrar">🗑️</button>
            <button class="boton-subir">⬆️</button>
            <button class="boton-bajar">⬇️</button>
        </td>
    `;

    // Buscamos los botones dentro de la fila recién creada para darles funciones [cite: 9]
    fila.querySelector('.boton-borrar').onclick = () => fila.remove(); // Borra la fila [cite: 11]
    fila.querySelector('.boton-subir').onclick = () => subirFila(fila); // Sube la fila [cite: 12]
    fila.querySelector('.boton-bajar').onclick = () => bajarFila(fila); // Baja la fila [cite: 14]

    // Añadimos la fila al final de la tabla [cite: 4]
    tabla.appendChild(fila);
}

// Función para subir una fila [cite: 12]
function subirFila(fila) {
    const filaAnterior = fila.previousElementSibling;
    // Si hay una fila arriba y no es el encabezado (th), la movemos [cite: 13]
    if (filaAnterior && filaAnterior.querySelector('td')) {
        fila.parentNode.insertBefore(fila, filaAnterior);
    }
}

// Función para bajar una fila [cite: 14]
function bajarFila(fila) {
    const filaSiguiente = fila.nextElementSibling;
    // Si hay una fila debajo, la movemos [cite: 15]
    if (filaSiguiente) {
        fila.parentNode.insertBefore(filaSiguiente, fila);
    }
}

// Comprobar que los inputs no estén vacíos [cite: 6]
function validarFormulario() {
    const inputs = formulario.querySelectorAll('input[required]');
    let todoLleno = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === "") todoLleno = false;
    });

    // Si todo está lleno, activamos el botón; si no, lo desactivamos
    botonAñadir.disabled = !todoLleno;
}

// Escuchar cuando el usuario escribe para validar el botón
formulario.addEventListener('input', validarFormulario);

// Manejar el envío del formulario [cite: 3]
formulario.onsubmit = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue
    
    // Sacamos los valores de los inputs
    const nombre = formulario.nombre.value;
    const apellido = formulario.apellidos.value;
    const edad = formulario.edad.value;

    // Añadimos la fila
    crearNuevaFila(nombre, apellido, edad);

    // Limpiamos los cuadros de texto [cite: 5]
    formulario.reset();
    validarFormulario();
};