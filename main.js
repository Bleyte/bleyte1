
const numberDisplay = document.querySelector('.number-display');
const generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', () => {
    numberDisplay.innerHTML = '';
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.sort((a, b) => a - b);
    numbers.forEach(number => {
        const span = document.createElement('span');
        span.textContent = number;
        numberDisplay.appendChild(span);
    });
});
