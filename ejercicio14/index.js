'use strict';

/* let respuestas;
let cucharadas = 1;

do {
    respuestas = prompt("Requiere una cucharada mas de azucar? (yes/no): ");
    if (respuestas == "yes"){
        cucharadas++;
    alert ("se agrego una cucharada mas el total seria " + cucharadas)
    }
}while (respuestas == "yes");
    alert("Su total de cucharadas " + cucharadas + " de azucar")*/


let respuesta;

do {
    respuesta = prompt("¿Deseas una cucharada mas de azúcar en tu café? (si / no)");

    if (respuesta === "si") {
        alert("Perfecto, se añadió una cucharada de azúcar.");
    } else if (respuesta !== "no") {
        alert("Respuesta no válida. Por favor escribe 'si' o 'no'.");
    }

} while (respuesta !== "no");

alert("Listo, tu café está servido ");

/*let cucharadas;

do {
    // Pedimos al usuario un número
    cucharadas = Number(prompt("¿Cuántas cucharadas de azúcar deseas agregar? (0 para ninguna)"));

    // Validar si es un número
    if (isNaN(cucharadas) || cucharadas < 0) {
        alert("Por favor, ingresa un número válido.");
    } else if (cucharadas > 0) {
        alert(`Se añadieron ${cucharadas} cucharadas de azúcar a tu café.`);
    }

} while (isNaN(cucharadas) || cucharadas < 0);

alert("Tu café está listo ☕");
*/