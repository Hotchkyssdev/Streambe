const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 20 },
    { nombre: "Elena", edad: 30 },
    { nombre: "David", edad: 22 }
  ];

personas.sort((a, b) => a.edad - b.edad);

personas.forEach((persona, index) => {
  persona.posicion = index + 1; 
});

console.log(personas);
