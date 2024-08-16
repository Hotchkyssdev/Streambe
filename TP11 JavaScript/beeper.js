document.addEventListener('DOMContentLoaded', () => {
    const beepButton = document.getElementById('beepButton');

    const seEjecutaEnEvento = () => {
        const body = document.body;
        body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
        body.classList.toggle('color');
    };

    beepButton.addEventListener('click', seEjecutaEnEvento);
});
