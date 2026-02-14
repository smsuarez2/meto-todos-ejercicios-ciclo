'use strict';

let precio = Number(prompt("Ingrese el precio del producto: "));
let cantidad = Number(prompt("Ingrese la cantidad de productos: "));

let totalCompra = precio * cantidad;
alert("El total de la compra es: $" + totalCompra);

// Promoción del estacionamiento
if (totalCompra > 20) {
    alert("El estacionamiento es GRATIS.");
} else {
    alert("Debe pagar $1 por el estacionamiento.");
}


/// comnnrirnc

alert(2 > 1);    // true >   Mayor que
alert(4 <  8);  // true <   Menor que
alert(valorA >= valorB); // mayor igual que
alert( valorA <= valorB); // menor igual que 
alert(2 == '2'); // true (convierte tipo)
alert(2 === '2'); // false (tipo distinto)

alert('Z' > 'A'); // true  
alert(null == undefined); // true
alert(null >= 0); // false 