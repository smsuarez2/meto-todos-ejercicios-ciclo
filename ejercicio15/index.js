"use strict";

/* solicitar al usuario que ingrese un numero entero 
y generar la tabla de multiplicar de ese numero del 1 al 12*/

let n ;
let t = 13;
let i = 0;
let p;

n = Number(prompt("Ingrese un número: "))
while (i < t){
    p=n*i;
    alert (n +"x"+ i+"="+p);
    i++
}

let numero;

do {
    numero = prompt("Ingresa un número entero:");

    // Validar sin isNaN:
    // 1. Que no esté vacío
    // 2. Que no tenga letras (solo dígitos y opcional signo -)
    // 3. Que sea entero
    if (numero.trim() === "" || !/^[-]?\d+$/.test(numero)) {
        alert("Por favor ingresa un número ENTERO válido.");
        numero = null; // para seguir repitiendo el bucle
    }

} while (numero === null);

numero = Number(numero);

let resultado = `Tabla de multiplicar del ${numero}:\n\n`;

for (let i = 1; i <= 12; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
}

alert(resultado);
console.log(resultado);