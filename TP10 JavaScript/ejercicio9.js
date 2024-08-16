const actoresPrincipales = ["Oscar Isaac", "Emma Stone", "Aaron Taylor-Johnson", "Uma Thurman", "Ian McKellen"];
const actoresVocales = [];

actoresPrincipales.forEach(actor => {
  const nombreApellido = actor.split(" ");
  const nombre = nombreApellido[0];
  const apellido = nombreApellido[1];
  
  if (/[AEIOUaeiou]/.test(nombre.charAt(0)) || /[AEIOUaeiou]/.test(apellido.charAt(0))) {
    actoresVocales.push(actor);
  }
});

console.log(actoresVocales);

const actoresPrincipalesPorPelicula = {
  "Dune": ["Timothee Chalamet", "Oscar Isaac"],
  "La La Land": ["Emma Stone", "Ryan Gosling"],
  "Kick-Ass": ["Aaron Taylor-Johnson", "Chloe Grace Moretz"],
  "Kill Bill": ["Uma Thurman", "David Carradine"],
  "The Lord of the Rings": ["Ian McKellen", "Elijah Wood"]
};

// Utiliza el arreglo existente actoresPrincipales sin redeclararlo
actoresPrincipales.length = 0; // Vaciamos el arreglo si lo necesitas

for (const pelicula in actoresPrincipalesPorPelicula) {
  actoresPrincipalesPorPelicula[pelicula].forEach(actor => {
    if (!actoresPrincipales.includes(actor)) {
      actoresPrincipales.push(actor);
    }
  });
}

console.log(actoresPrincipales);

const peliculas = [];

for (const pelicula in actoresPrincipalesPorPelicula) {
  peliculas.push(pelicula);
}

console.log(peliculas);

const peliculaPorActor = {};

for (const pelicula in actoresPrincipalesPorPelicula) {
  actoresPrincipalesPorPelicula[pelicula].forEach(actor => {
    if (!peliculaPorActor[actor]) {
      peliculaPorActor[actor] = [];
    }
    peliculaPorActor[actor].push(pelicula);
  });
}

console.log(peliculaPorActor);

  