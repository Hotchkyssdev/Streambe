const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 28 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 }
  ];
  
  const personasMayoresDe27 = personas.filter(persona => persona.edad > 27);
  
  console.log(personasMayoresDe27);
  