// Almacenar la edad actual del usuario en una Variable
let edadActual = prompt("Por favor, ingresa tu edad actual:");
edadActual = Number(edadActual);

// Almacenar la edad máxima estimada en otra Variable
let edadMaxima = prompt("Por favor, ingresa tu edad máxima estimada:");
edadMaxima = Number(edadMaxima);

// Declarar una Variable con el nombre de tu snack favorito
let snackFavorito = prompt("¿Cuál es tu snack favorito?");

// Estimar cuántos snacks comerás por día y guardarlo en una Variable
let snacksPorDia = prompt("¿Cuántos " + snackFavorito + " comes por día?");
snacksPorDia = Number(snacksPorDia);

// Calcular cuántos snacks te quedan por comer en el resto de tu vida
let añosRestantes = edadMaxima - edadActual;
let snacksRestantes = añosRestantes * 365 * snacksPorDia;

alert("Necesitarás " + snacksRestantes + " " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

// Agregar un precio por unidad y calcular el gasto total
let precioPorSnack = prompt("¿Cuál es el precio de un " + snackFavorito + "?");
precioPorSnack = Number(precioPorSnack);
let gastoTotal = snacksRestantes * precioPorSnack;

alert("Vas a gastar " + gastoTotal.toFixed(2) + " en " + snackFavorito + " el resto de tu vida.");
