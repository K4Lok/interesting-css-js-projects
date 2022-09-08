const containerElement = document.querySelector('.container');
const leftElement = document.querySelector('.left');
const rightElement = document.querySelector('.right');

leftElement.addEventListener('mouseenter', () => { 
    containerElement.classList.add('hover-left')
});
leftElement.addEventListener('mouseleave', () => {
    containerElement.classList.remove('hover-left')
});

rightElement.addEventListener('mouseenter', () => { 
    containerElement.classList.add('hover-right')
});
rightElement.addEventListener('mouseleave', () => {
    containerElement.classList.remove('hover-right')
});