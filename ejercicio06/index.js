'use strict';

let precio = Number(prompt("Ingresar el precio: "));
let cantidad = Number(prompt("Ingresar la cantidad: "));

let producto = precio * cantidad;
alert("El resultado del producto es: " + producto);



/*  WHILE
Mientras i sea menor o igual a 5,
imprime el número.
Cuando llegue a 6, se detiene.
*/
let i = 1;

while (i <= 5) {
  console.log("Número:", i);
  i++; // aumenta en 1
}


/*  DO WHILE
✔ El código pide la contraseña al menos 1 vez.
✔ Repite hasta que el usuario escriba “1234”*/
let pass;

do {
  pass = prompt("Ingresa la contraseña: ");
} while (pass !== "1234");

console.log("Acceso permitido");


/* BREAK
break detiene el bucle aunque 
la condición diga “while(true)”.
*/

while (true) {
  let num = Number(prompt("Ingresa un número (0 para salir):"));

  if (num === 0) break;

  console.log("Número ingresado:", num);
}

console.log("Programa finalizado");

/*  FOR
¿Qué pasa aquí?
✔ i = 1 → inicio
✔ i <= 3 → condición
✔ i++ → aumenta 1 cada vuelta
*/
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
 

/* CONTINUE
Imprime: 1, 3, 5, 7, 9
 Se saltan los números pares.
*/

for (let i = 1; i <= 10; i++) {

  if (i % 2 === 0) continue; // si es par, lo salta

  console.log(i);
}


/* ETIQUETA INFINITO
break outer detiene los dos bucles, no solo uno.*/ 
outer: for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    let value = prompt(`Valor (${i},${j}) o "x" para salir:`);

    if (value === "x") break outer; // rompe ambos bucles
  }
}

console.log("Fin del proceso");