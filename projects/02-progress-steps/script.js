const progressElement = document.querySelector("#progress");

const circleElements = document.querySelectorAll(".circle");

const prevBtnElement = document.querySelector("#prev");
const nextBtnElement = document.querySelector("#next");

let currentStage = 1;

prevBtnElement.addEventListener("click", prevBtnHandler);
nextBtnElement.addEventListener("click", nextBtnHandler);

function prevBtnHandler() {
    currentStage--;
    checkStageForBtns();
    updateStyles();
}

function nextBtnHandler() {
    currentStage++;
    checkStageForBtns();
    updateStyles();
}

function checkStageForBtns() {
    if(currentStage === 1) {
        prevBtnElement.setAttribute('disabled', '');
    }
    else if(currentStage === 4) {
        nextBtnElement.setAttribute('disabled', '');
    }
    else {
        prevBtnElement.removeAttribute('disabled');
        nextBtnElement.removeAttribute('disabled');
    }
}

function updateProgress() {
    progressElement.style.width = `${(currentStage - 1) * 30}%`;
    console.log(`${currentStage * 15}%`);
}

function updateCircles() {
    circleElements.forEach((circleElement, _id) => {
        const id = _id + 1;
        if(id <= currentStage) {
            circleElement.classList.add('active');
            return;
        }
        circleElement.classList.remove('active');
    });
}

function updateStyles() {
    updateProgress();
    updateCircles();
}