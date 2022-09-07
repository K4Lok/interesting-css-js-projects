const cardElements = document.querySelectorAll('.card');

window.addEventListener('scroll', updateCard);

updateCard();

function updateCard() {
    const boundary = window.innerHeight * (5 / 6);

    cardElements.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < boundary) {
            card.classList.add('show');
        }
        else {
            card.classList.remove('show');
        }
    });
}