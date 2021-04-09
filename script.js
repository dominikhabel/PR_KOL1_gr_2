let button = document.querySelector('.button');
let box = document.querySelector('.box');

button.addEventListener('click', zmien);

function zmien() {
	box.classList.add('box1');
}