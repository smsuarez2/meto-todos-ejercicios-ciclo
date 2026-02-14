'use strict'; 
// Activa el modo estricto de JavaScript.
// Ayuda a evitar errores comunes y obliga a escribir código más seguro.

let numero = "0877852635";
// Variable tipo STRING.
// Se guarda como texto para poder manipular cada dígito fácilmente.

// ===============================
// split()
// ===============================
let numeroDigits = numero.split('');
// split('') convierte el STRING en un ARRAY.
// Cada carácter del texto pasa a ser un elemento del arreglo.
// Resultado: ["0","8","7","7","8","5","2","6","3","5"]

// ===============================
// slice()
// ===============================
let firstDigit = numeroDigits.slice(0, 1);
// slice(inicio, fin) obtiene una parte del ARRAY sin modificar el original.
// Aquí extraemos el primer elemento (posición 0).
// Tipo de dato: ARRAY → ["0"]

let remainingDigits = numeroDigits.slice(1);
// Desde la posición 1 hasta el final.
// Tipo de dato: ARRAY → ["8","7","7","8","5","2","6","3","5"]

// ===============================
// map() + Number()
// ===============================
let numericDigits = remainingDigits.map(digit => Number(digit));
// map() recorre cada elemento del ARRAY.
// Number() convierte cada STRING en un NUMBER.
// Tipo de dato resultante: ARRAY de números → [8,7,7,8,5,2,6,3,5]

// ===============================
// map() para sumar
// ===============================
let increasedDigits = numericDigits.map(digit => digit + 1);
// map() se usa nuevamente para sumar 1 a cada número.
// Tipo de dato: ARRAY de números → [9,8,8,9,6,3,7,4,6]

// ===============================
// concat()
// ===============================
let finalPhoneArray = firstDigit.concat(increasedDigits);
// concat() une dos ARRAYS.
// No modifica los originales, devuelve uno nuevo.
// Resultado: ["0",9,8,8,9,6,3,7,4,6]

// ===============================
// join()
// ===============================
let finalPhone = finalPhoneArray.join('');
// join('') convierte el ARRAY en un STRING.
// Une todos los elementos sin separadores.
// Resultado: "0988963746"

// ===============================
// Mostrar resultado
// ===============================
alert("Teléfono final: " + finalPhone);
// Muestra el teléfono final en una ventana emergente.

