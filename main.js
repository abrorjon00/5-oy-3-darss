const changeColorButton = document.querySelector('#change');
const toggleTextButton = document.querySelector('#togg');
const textElement = document.querySelector('#text');
const clockElement = document.querySelector('#clock');
const themeToggleButton = document.querySelector('#themeToggle');
const textInput = document.querySelector('#textInput');
const toggleButtonsContainer = document.querySelector('#buttons');
const toggleButtons = document.querySelector('#toggleButtons');
const lengthElement = document.querySelector('#length');
  


changeColorButton && changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});



toggleTextButton && toggleTextButton.addEventListener('click', () => {
    textElement && (textElement.style.display = textElement.style.display === 'none' ? 'block' : 'none');
});
 



const updateClock = () => {
    clockElement && (clockElement.textContent = new Date().toLocaleTimeString());
};
setInterval(updateClock, 1000);
updateClock();




themeToggleButton && themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Tungi rejim' : 'Kunduzgi rejim';
});




textInput && textInput.addEventListener('input', (e) => {
    lengthElement && (lengthElement.textContent = e.target.value.length);
});




toggleButtons && toggleButtons.addEventListener('click', () => {
    toggleButtonsContainer && (toggleButtonsContainer.style.display = toggleButtonsContainer.style.display === 'none' ? 'block' : 'none');
});