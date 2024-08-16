function calcularValorTotal(productos) {
    const valorTotalPorProducto = {};
  
    productos.forEach(producto => {
      const { nombre, precio, cantidad } = producto;
  
      if (valorTotalPorProducto[nombre]) {
        valorTotalPorProducto[nombre] += precio * cantidad;
      } else {
        valorTotalPorProducto[nombre] = precio * cantidad;
      }
    });
  
    const resultado = Object.keys(valorTotalPorProducto).map(nombre => {
      return { nombre, valorTotal: valorTotalPorProducto[nombre] };
    });
  
    return resultado;
  }
  
  const productos = [
    { nombre: 'Televisor Samsung', precio: 320000, cantidad: 5 },
    { nombre: 'Laptop Dell', precio: 150000, cantidad: 3 },
    { nombre: 'Celular Motorola G60', precio: 400000, cantidad: 10 },
    { nombre: 'Televisor Noblex', precio: 200000, cantidad: 2 },
    { nombre: 'Laptop MSI', precio: 415000, cantidad: 1 }
  ];
  
  const resultado = calcularValorTotal(productos);
  console.log(resultado);
  