// const colorPicker = document.getElementById('colorPicker');
// const ball = document.querySelector('.ball');
// const field = document.querySelector('.field');



// colorPicker.addEventListener('input', (event) => {
//     document.body.style.backgroundColor = event.target.value;
// });





// field.addEventListener('click', (event) => {
//     const fieldRect = field.getBoundingClientRect(); 
//     const x = event.clientX - fieldRect.left; 
//     const y = event.clientY - fieldRect.top;  
//     ball.style.left = `${x - ball.offsetWidth / 2}px`;
//     ball.style.top = `${y - ball.offsetHeight / 2}px`;
// });

const colorPickerr = document.getElementById('colorPickerer');
const text = document.getElementById('text');

colorPickerr.addEventListener('input', (event) => {
    text.style.color = event.target.value;
});
