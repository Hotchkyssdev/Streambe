const estudiantes = [
    { nombre: "Juan", nota: 4 },
    { nombre: "María", nota: 6 },
    { nombre: "Pedro", nota: 8 },
    { nombre: "Ana", nota: 5 },
    { nombre: "Luis", nota: 9 },
    { nombre: "Sofía", nota: 10 }
  ];
  
  const aumentarNota = (listaEstudiantes) => {
    listaEstudiantes.forEach(estudiante => {
      if (estudiante.nota > 5) {
        estudiante.nota += 2;
        if (estudiante.nota > 10) {
          estudiante.nota = 10;
        }
      }
    });
  };
  
  aumentarNota(estudiantes);
  
  console.log(estudiantes);
  