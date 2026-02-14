'use strict';

let total = Number(prompt("Ingresar el total de Kilometro: "));
const precio = 0.25;
const arranque = 0.55;

let producto = (precio * total)+arranque;

if (producto < 1.50 ) {
    producto = 1.50
} 
alert("El valor a pagar es:"+ producto);
//alert( "La edad es mayor que 18 : " + (age > valorB)); // mayor que