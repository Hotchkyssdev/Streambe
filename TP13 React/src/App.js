import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Componentes/TP1/Contador';
import CalculadoraCuadrados from './Componentes/TP1/CalculadoraCuadrados';
import PrecioTotal from './Componentes/TP1/PrecioTotal'; 

function App() {
  const productos = [
    { nombre: 'Manzana Verde (1kg)', precio: 2100.0 },
    { nombre: 'Pan (1kg)', precio: 1600.0 },
    { nombre: 'Maple de Huevo', precio: 4000.0 },
    { nombre: 'Vacio (1kg)', precio: 6000.0}
  ];

  return (
    <div className="App">
      <main>
        <br></br>
        <Contador />
        <br></br>
        <CalculadoraCuadrados />
        <br></br>
        <PrecioTotal productos={productos} /> 
        <br></br>
      </main>
    </div>
  );
}

export default App;
