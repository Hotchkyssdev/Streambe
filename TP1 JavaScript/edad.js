let edad = prompt("Por favor, ingresa tu edad:");

edad = Number(edad);

// Verificar si el input es un número válido
if (!isNaN(edad) && edad > 0) {
    let dias = edad * 365;

    alert("Tu edad en días es aproximadamente: " + dias + " días.");
} else {
    alert("Por favor, ingresa una edad válida.");
}
