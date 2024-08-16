document.addEventListener('DOMContentLoaded', () => {
    const autoRojo = document.querySelector('#autoRojo');
    const autoAzul = document.querySelector('#autoAzul');
    const pista = document.querySelector('#pista');

    let posicionRojo = 0;
    let posicionAzul = 0;

    window.addEventListener('keyup', (event) => {
        const pistaAncho = pista.clientWidth;
        const autoAncho = autoRojo.clientWidth;

        if (event.key === 'a') {
            posicionRojo += 10;
            autoRojo.style.marginLeft = `${posicionRojo}px`;
            if (posicionRojo + autoAncho >= pistaAncho) {
                alert('¡El auto rojo ganó la carrera!');
                reset();
            }
        }

        if (event.key === 'l') {
            posicionAzul += 10;
            autoAzul.style.marginLeft = `${posicionAzul}px`;
            if (posicionAzul + autoAncho >= pistaAncho) {
                alert('¡El auto azul ganó la carrera!');
                reset();
            }
        }
    });

    function reset() {
        posicionRojo = 0;
        posicionAzul = 0;
        autoRojo.style.marginLeft = '0px';
        autoAzul.style.marginLeft = '0px';
    }
});
