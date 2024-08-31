import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(contador => contador + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>Contador Automático: {contador}</h1>
    </div>
  );
};

export default Contador;
