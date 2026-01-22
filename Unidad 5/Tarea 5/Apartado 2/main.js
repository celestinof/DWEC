// --- ACTIVIDAD 2: FORMULARIO ---

window.addEventListener("load", () => {
    const formulario = document.querySelector("form");
    const camposTexto = document.querySelectorAll("#nombre, #apellidos");

    // 1. Mayúsculas y Validación al perder el foco (blur)
    camposTexto.forEach(campo => {
        campo.addEventListener("blur", (e) => {
            const input = e.target;
            
            // Convertir a mayúsculas
            input.value = input.value.toUpperCase();

            // Validar que solo haya letras y espacios
            const patronLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            
            if (input.value !== "" && !patronLetras.test(input.value)) {
                input.setCustomValidity("No se admiten números ni caracteres especiales");
            } else {
                input.setCustomValidity(""); // Limpiar error si es correcto
            }
        });
    });

    // 2. Confirmación de envío (submit)
    formulario.addEventListener("submit", (e) => {
        // El navegador primero comprueba las validaciones anteriores automáticamente.
        // Si todo está bien, lanzamos la confirmación:
        const mensaje = "¿Estás seguro de que deseas enviar los datos?";
        
        if (!confirm(mensaje)) {
            e.preventDefault(); // Detiene el envío si el usuario cancela
        }
    });
});