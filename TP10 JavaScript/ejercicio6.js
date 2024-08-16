const peliculas = [
    { titulo: "Inception", rating: 8.8, loHasVisto: true },
    { titulo: "Interstellar", rating: 8.6, loHasVisto: true },
    { titulo: "The Dark Knight", rating: 9.0, loHasVisto: true },
    { titulo: "The Matrix", rating: 8.7, loHasVisto: false },
    { titulo: "The Shawshank Redemption", rating: 9.3, loHasVisto: true }
  ];
  
  for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    const hasVisto = pelicula.loHasVisto ? "Sí" : "No";
    console.log(`Título: ${pelicula.titulo}, Rating: ${pelicula.rating}, ¿La has visto?: ${hasVisto}`);
  }
  