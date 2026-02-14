'use strict';

// Escribir un programa que valide si una persona puede obtener una vacuna considerando su edad.
//La politica dice que losniños menores de 5 años y los adultos mayores de 65 son los favorecidos.
// Solicitar la edad al usuario y mostrar el mensaje de favorecido o no

let age = Number(prompt("Ingrese su edad: "));


if ( !(age > 5 || age < 65) ) {
  alert("Es favorecido para recibir la vacuna.");
}  {
  alert("NO es favorecido.");
}

/*
Una empresa necesita contratar personal y la condicion es que no sea mayor y menor a 65. 
Crear un programa que ingresando su edad, valide si es apto o no. 
*/