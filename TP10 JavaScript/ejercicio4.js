let miAuto = {};

miAuto.marca = "Toyota"; 
miAuto.año = 2022;         
miAuto.nuevo = true;       

let propertyKey = "modelo";

miAuto[propertyKey] = "Corolla";

let anotherPropertyKey = "precio";

miAuto[anotherPropertyKey] = 25000;

let nextProperty = "color";

miAuto[nextProperty] = "Rojo";

for (let key in miAuto) {
  console.log(`${key}: ${miAuto[key]}`);
}

console.log(miAuto[propertyKey]);  
console.log(miAuto["modelo"]);     
console.log(miAuto[nextProperty]); 
console.log(miAuto["color"]);      
