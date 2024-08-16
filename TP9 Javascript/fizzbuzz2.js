const fizzBuzz2 = (palabra1, palabra2, hasta, fizz_num = 3, buzz_num = 5) => {
    let resultado = [];
  
    for (let i = 1; i <= hasta; i++) {
      if (i % fizz_num === 0 && i % buzz_num === 0) {
        resultado.push(palabra1 + palabra2);
      } else if (i % fizz_num === 0) {
        resultado.push(palabra1);
      } else if (i % buzz_num === 0) {
        resultado.push(palabra2);
      } else {
        resultado.push(i.toString());
      }
    }
  
    return resultado.join(", ");
  };
  

  