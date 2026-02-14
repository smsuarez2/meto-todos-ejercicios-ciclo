'use strict';

//const phrase='Hola Mundo';
//alert(phrase[0]);  // H
//alert(phrase.at(0));
//alert (phrase.substring(2, 6))

// crear una función que reciba un string como argumento,
// y devuelva el indice del espacio separado 
// El string debe tener una frase con dos palabras

//function palabras(str) {
 // return str.indexOf(' ');
//}   
//alert(palabras('Hola Mundo')); 
//alert(phrase.substring(0, 4)); // Hola


function findSpaceWithFor(phrase){
    let indexFound = -1;
    
    for (let i= 0; i< phrase.length; i++){
        
        if (phrase[i] == ' '){
            indexFound = i;
          
        }
    }
return indexFound;
}
let frase= 'Selene Suarez';
let indice=findSpaceWithFor(frase);
let priemraPalabra=frase.substring(0, indice);  //frase.sbstring(0, indice);
let segundaPalabra=frase.substring(indice + 1); //frase.substring(indice + 1);
alert('La primera palabra es: ' + priemraPalabra + ' y la segunda palabra es: ' + segundaPalabra);
