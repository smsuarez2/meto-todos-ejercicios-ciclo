'use strict';



let age = Number(prompt("Ingrese su edad: "));

if (age > 18 ) {
    alert("Es mayo de edad");
} else {
    alert("Es menor de edad.");
}

//alert( "La edad es mayor que 18 : " + (age > valorB)); // mayor que


let height = 0;

alert(height || 100); // 100  → 0 es "falsy"
alert(height ?? 100); // 0    → 0 sí está definido


////
let name = null;
let nickname = "Supercoder";

alert(name ?? nickname ?? "Anónimo"); // "Supercoder"