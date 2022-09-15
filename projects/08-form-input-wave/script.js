const labelElements = document.querySelectorAll('.container label');
const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');


labelElements.forEach(label => {
    label.innerHTML = label.innerText
                    .split('')
                    .map((letter, index) => {
                        return `<span style="transition-delay:${index * 30 }ms;">${letter}</span>`
                    })
                    .join('');
});

emailInput.addEventListener('keyup', onPressHandler);
pwInput.addEventListener('keyup', onPressHandler);

function onPressHandler(event) {
    label = event.target.labels[0];

    if(event.target.value === '') {
        label.childNodes.forEach((child) => {
            child.classList.remove('fixed');
        })
        return;
        console.log('returned');
    }
    label.childNodes.forEach((child) => {
        child.classList.add('fixed');
    })
}