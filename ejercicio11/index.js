'use strict';

/*
Una empresa necesita contratar personal y la condicion es que no sea mayor y menor a 65. 
Crear un programa que ingresando su edad, valide si es apto o no. 
*/

let age = Number(prompt("Ingrese su edad: "));


if ( !(age >= 18 && age <= 65) ) {
  alert("Es favorecido para recibir la vacuna.");
}  {
  alert("NO es favorecido.");
}
