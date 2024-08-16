document.addEventListener('DOMContentLoaded', () => {
    const magiaDiv = document.getElementById('magia');
    const imagenMagica = document.getElementById('imagen-magica');

    magiaDiv.addEventListener('mouseover', () => {
        imagenMagica.style.display = 'none';
    });

    magiaDiv.addEventListener('mouseout', () => {
        imagenMagica.style.display = 'block';
    });
});
