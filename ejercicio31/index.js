'use strict';
const container = document.getElementById('container');
const nuevoTitulo = document.createElement('h1');
nuevoTitulo.textContent = 'Estudiantes';

const estudiantes = ['María', 'Sergio', 'Rosa', 'Daniel', 'Sele'];

const nuevaLista = document.createElement('ol');

estudiantes.forEach ((item) => {

    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    nuevaLista.appendChild (itemElement);

  }


)

container.appendChild(nuevoParrafo);
container.appendChild(nuevaLista);
