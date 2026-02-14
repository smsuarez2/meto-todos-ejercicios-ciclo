"use strict";

/* crear una funcion que muestre un mensaje*/

//DECLARAR
//1            2        
function suma(a,b){
   let res =a*b;
    return res;      
}  
//Llamar a la funcion
let a = Number(prompt("Ingrese un número: "));
let b = Number(prompt("Ingrese un número: "));
let res = suma(a,b);
alert ("El resultado es : " + res);