'use strict';
  

const lista = [
  {
    id: 1,
    fullname: 'Madelayne Suarez',
    URL: 'https://i.pinimg.com/236x/d5/70/89/d57089f77d1d528bbbccb6360faa1655.jpg'
  },
  {
    id: 2,
    fullname: 'Selene Suarez',
    URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1u5kMvYO-Zkp5p05GK2uDjB96wjemwdgkBQ&s.png'
  }
];

const container = document.getElementById('container');

lista.forEach((item) => {

  const card = document.createElement('div');
  card.style.border = '1px solid black';
  card.style.width = '220px';
  card.style.padding = '10px';
  card.style.margin = '10px';

  const name = document.createElement('p');
  name.textContent = item.fullname;

  const img = document.createElement('img');
  img.src = item.URL;
  img.alt = item.fullname;
  img.style.width = '200px';

  card.appendChild(img);
  card.appendChild(name);
  container.appendChild(card);
});
