// Almacenar en una Variable la cantidad de días que vas a estar de viaje
let cantidadDias = prompt("¿Cuántos días vas a estar de viaje?");
cantidadDias = Number(cantidadDias);

// Estimar tu presupuesto máximo por todo el viaje y guardarlo en una Variable
let presupuestoMaximo = prompt("¿Cuál es tu presupuesto máximo para todo el viaje?");
presupuestoMaximo = Number(presupuestoMaximo);

let comida;

// Estimar cuántas comidas vas a tener en todo tu viaje
let comidasPorDia = 4; 
let totalComidas = cantidadDias * comidasPorDia;

// Calcular cuánto podés gastar en cada comida
let gastoPorComida = presupuestoMaximo / totalComidas;

alert("Podés gastar " + gastoPorComida.toFixed(2) + " en cada comida para que te alcance la plata durante los " + cantidadDias + " días de viaje.");
