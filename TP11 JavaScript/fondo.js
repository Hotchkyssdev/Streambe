document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('colorInput');
    const colorMap = {
        "rojo": "red",
        "azul": "blue",
        "amarillo": "yellow"
    };

    colorInput.addEventListener('input', (event) => {
        const inputColor = event.target.value.toLowerCase().trim();
        
        if (colorMap[inputColor]) {
            document.body.style.backgroundColor = colorMap[inputColor];
        } else {
            document.body.style.backgroundColor = 'white';
        }
    });

    colorInput.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && colorInput.value.length === 1) {
            document.body.style.backgroundColor = 'white';
        }
    });
});
