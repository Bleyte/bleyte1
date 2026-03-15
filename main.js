const numberDisplay = document.querySelector('.number-display');
const generateBtn = document.querySelector('#generate-btn');
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Lotto Generation Logic
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
