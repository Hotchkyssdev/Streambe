// Función que toma un número y retorna el triple de ese valor
const triplicador = (num) => {
    return num * 3;
  };
  
  // Función que toma dos números y devuelve el producto de los dos
  const multiplicador = (num1, num2) => {
    return num1 * num2;
  };
  
  // Función que toma dos números y devuelve el resultado de dividir el primero por el segundo
  const division = (num1, num2) => {
    return num1 / num2;
  };
  
  // Función que toma dos números y devuelve el resultado del módulo del primero sobre el segundo
  const resto = (num1, num2) => {
    return num1 % num2;
  };

// Triplicar 5
const triplicado = triplicador(5);

// Multiplicar el triplicado por 12
const multiplicado = multiplicador(triplicado, 12);

// Dividir el resultado por 12
const dividido = division(multiplicado, 12);

// Encontrar el resto de dividir eso en 3
const resultadoFinal = resto(dividido, 3);

console.log(resultadoFinal); // Debería imprimir 0
