'use strict';

// Crear una función (todos tipos) que eleve al cuadrado un numero 
//ingresado como argumento y retorne el resultado.
//1. declaracion funciones
function elevarAlCuadrado(num) {
    return num * num;
}
let resultado = elevarAlCuadrado(5);
//alert("El numero elevado al cuadrado es: " + resultado);

//2. expresion de funciones
let elevarAlCuadradoExp = function(num) {
    return num * num;
};
let resultadoExp = elevarAlCuadradoExp(6);
//alert("El numero elevado al cuadrado es: " + resultadoExp);


//3. funcion flecha
let elevarAlCuadradoFlecha = (num) => {
    return num * num;
};
let resultadoFlecha = elevarAlCuadradoFlecha(12);
alert("El numero elevado al cuadrado es: " + resultadoFlecha);






