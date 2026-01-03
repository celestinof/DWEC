// Este archivo no es necesario, pero así puedo probar si funciona
import Edificios from "./Edificios.mjs";

try {
    const miEdificio = new Edificios("Paseo Zurrón", 10, "Madrid", "28042", 2, 2);
    
    // 2. Añadir algunos propietarios
    miEdificio.agregarPropietarios(["Celestino Amigo", "Isa"], 1, 1);
    miEdificio.agregarPropietarios(["Damián Marín"], 1, 2);
    miEdificio.agregarPropietarios(["Silvia Soler"], 2, 2);

    // 3. Mostrar todo el edificio
    miEdificio.imprimirViviendas();

    // 4. Consultar una vivienda específica
    console.log("\nPropietarios del 1-1:", miEdificio.getPropietarios(1, 1));

} catch (error) {
    console.error("Hubo un error:", error.message);
}