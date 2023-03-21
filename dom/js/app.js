// ACCESING
let header = document.getElementsByTagName('header');
let titulo = document.getElementsByClassName('titulo')[0];
let card = document.getElementById('card');
let cardDos = document.querySelector('.card-dos');

// botones
let redButton = document.getElementById('red-button');
let yellowButton = document.getElementById('yellow-button');
let greenButton = document.getElementById('green-button');
let noneButton = document.getElementById('none-button');



card.addEventListener('click', () => alert('Hola'));

cardDos.addEventListener(
  'click',
  () => (cardDos.style.backgroundColor = 'yellow')
);

// MODIFY
// header[0].innerHTML = '<h2>Contrast between Baroque and Mannerism</h2>';
titulo.textContent = "Western Europe During The Early Fifteen Century";


// EVENT LISTENERS BOTONES
redButton.addEventListener("click", () => {
  header[0].classList.remove('b-yellow', 'b-green');
  header[0].classList.add('b-red');
})
yellowButton.addEventListener("click", () => {
  header[0].classList.remove('b-red', 'b-green');
  header[0].classList.add('b-yellow');
})
greenButton.addEventListener("click", () => {
  header[0].classList.remove('b-red', 'b-yellow');
  header[0].classList.add('b-green');
})
noneButton.addEventListener("click", () => {
  header[0].classList.remove('b-red', 'b-yellow', 'b-green');
})