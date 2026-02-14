'use strict';

/*
Crear un programa que permita ingresar la edad y los años de trabajo. y veririficar si es apto o no para jubilarse. 
Considerar que la jubilacion permte 30 años de trabajo o que se mayor de 60 */

let edad = Number(prompt("Ingrese su edad:"));
let aniosTrabajo = Number(prompt("Ingrese sus años de trabajo:"));

// Condición: 30 años de trabajo O ser mayor de 60
if (aniosTrabajo >= 30 || edad > 60) {
  alert("Es apto para jubilarse.");
} else {
  alert("NO es apto para jubilarse.");
}
