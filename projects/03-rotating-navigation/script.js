const openBtnElement = document.getElementById('open');
const closeBtnElement = document.getElementById('close');
const container = document.querySelector('.container');

openBtnElement.addEventListener('click', () => {
    container.classList.add('show-nav');
});

closeBtnElement.addEventListener('click', () => {
    container.classList.remove('show-nav');
})