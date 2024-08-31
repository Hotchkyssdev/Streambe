import React, { useState } from 'react';

const CalculadoraCuadrados = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularCuadrado = () => {
    const numeroParseado = parseFloat(numero);
    if (!isNaN(numeroParseado)) {
      setResultado(numeroParseado * numeroParseado);
    }
  };

  return (
    <div>
      <h2>Calculadora de Cuadrados</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresa un número"
      />
      <button onClick={calcularCuadrado}>Calcular Cuadrado</button>
      {resultado !== null && <p>El cuadrado de {numero} es: {resultado}</p>}
    </div>
  );
};

export default CalculadoraCuadrados;
