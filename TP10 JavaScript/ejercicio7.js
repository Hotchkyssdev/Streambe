const numeros = [2, 4, 5, 37, 0];

const numeros_duplicados = {};

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  numeros_duplicados[numero] = numero * 2;
}

console.log(numeros_duplicados);
