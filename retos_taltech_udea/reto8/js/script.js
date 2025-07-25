document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const showBtn = document.getElementById('showBtn');
    const outputBox = document.getElementById('outputBox');


    showBtn.addEventListener('click', function() {
        const message = inputBox.value;
        console.log ('Dato ingresado', message);
        outputBox.textContent = message;
    })
})