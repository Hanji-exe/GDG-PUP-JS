const counterText = document.querySelector('#counter-text');
const buttonAdd = document.querySelector('#button-add');
const buttonSubtract = document.querySelector('#button-subtract');

let counterVal = 0;

function updateCounter() {
    counterText.textContent = counterVal;
}

buttonAdd.addEventListener("click", function () {
    counterVal++;
    updateCounter();
});

buttonSubtract.addEventListener("click", function () {
    counterVal--;
    updateCounter();
});