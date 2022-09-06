const bgElement = document.querySelector('.bg');
const bgAfterElement = document.querySelector('.bg-after');
const loadingElement = document.querySelector('.loading-text');

let load = 0;
const msec = 20;

const countInterval = setInterval(() => {
    load++;
    if(load == 50) clearInterval(grayOutInterval);

    if(load <= 100) loadingElement.innerHTML = `${load}%`;
    
    if(load == 100) clearInterval(grayOutInterval);

    if(load >= 100) {
        unBlurTheBg();
        loadingElement.style.opacity = scale(load, 100, 150, 1, 0);
        loadingElement.style.fontSize = `${scale(load, 100, 150, 8, 0)}rem`;
        if(load == 150) {
            clearInterval(countInterval);
        }
    }
}, msec);

const grayOutInterval = setInterval(() => {
    grayOut();
}, msec);

function grayOut() {
    bgElement.style.filter = `grayscale(${scale(load, 0, 50, 100, 0)}%)`;
}

function unBlurTheBg() {
    bgAfterElement.style.backdropFilter = `blur(${scale(load, 100, 150, 30, 0)}px)`;
}

function scale(input, in_min, in_max, out_start, out_end) {
    return (input - in_min) * (out_end - out_start) / (in_max - in_min) + out_start;
}