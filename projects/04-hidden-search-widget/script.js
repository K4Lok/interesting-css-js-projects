const searchElement = document.querySelector('.search');
const inputElement = document.querySelector('.input');
const btnElement = document.querySelector('.btn');

btnElement.addEventListener('click', () => {
    searchElement.classList.toggle('active');
});