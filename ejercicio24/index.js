"use strict";
/* TIPO DECLARACION DE FUNCIONES
crear una funcion que reciba un numero y devuelva true si es par y false si es impar
*/

function par(a){
    return a%2==0;
} 

// probar
let resultadoPar = par(3);
alert("¿El número es par?: " + resultadoPar);


/* TIPO FUNCIONES DE EXPRESION
crear una funcion que reciba un numero y devuelva true si es par y false si es impar
*/
let espar = function (a){
return a%2==0;
} 

// probar
let result = espar(2);
alert("¿El número es par?: " + result);


/* TIPO FUNCION FLECHA
crear una funcion que reciba un numero y devuelva true si es par y false si es impar
*/
// declarar la funcion
let Par = (a) => a%2==0;


// probar
let resultado = Par(8);
alert("¿El número es par?: " + resultado);