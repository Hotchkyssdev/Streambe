import React from 'react';

const PrecioTotal = ({ productos }) => {
  const total = productos.reduce((suma, producto) => suma + producto.precio, 0);

  return (
    <div>
      <h2>Precio Total de Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.nombre}: ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default PrecioTotal;
