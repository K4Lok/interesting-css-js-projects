const panelElements = document.querySelectorAll('.panel');

panelElements.forEach((panelElement) => {
    panelElement.addEventListener('click', clickHandler);
});

function clickHandler(event) {
    removeAllActive();
    event.target.classList.add('active');
}

function removeAllActive() {
    panelElements.forEach((panelElement) => {
        panelElement.classList.remove('active');
    });
}

// for (panelElement of panelElements) {
//     panelElement.addEventListener('click', clickHandler);
// }