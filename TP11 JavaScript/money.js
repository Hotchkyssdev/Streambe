document.addEventListener('DOMContentLoaded', () => {
    const showMoneyButton = document.getElementById('show-money');
    const showMiamiButton = document.getElementById('show-miami');
    const showMaiameeeButton = document.getElementById('show-maiameee');

    const imageMoney = document.getElementById('image-money');
    const imageMiami = document.getElementById('image-miami');
    const imageMaiameee = document.getElementById('image-maiameee');

    showMoneyButton.addEventListener('click', () => {
        imageMoney.classList.toggle('oculto');
    });

    showMiamiButton.addEventListener('click', () => {
        imageMiami.classList.toggle('oculto');
    });

    showMaiameeeButton.addEventListener('click', () => {
        imageMaiameee.classList.toggle('oculto');
    });

    imageMoney.addEventListener('click', () => {
        imageMoney.classList.add('oculto');
    });

    imageMiami.addEventListener('click', () => {
        imageMiami.classList.add('oculto');
    });

    imageMaiameee.addEventListener('click', () => {
        imageMaiameee.classList.add('oculto');
    });
});
