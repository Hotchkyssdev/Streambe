document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los párrafos y guardarlos en una variable
    const parrafos = document.querySelectorAll('p');

    // Usar un for loop para recorrer todos los párrafos
    for (let i = 0; i < parrafos.length; i++) {
        const parrafo = parrafos[i];

        // Agregar un eventListener que alterne la clase "resaltado" al hacer clic
        parrafo.addEventListener('click', () => {
            parrafo.classList.toggle('resaltado');
        });
    }
});
