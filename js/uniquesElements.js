let arr = [1, 2, 2, 1, 3, 3, 5]; // [1,2,3,5]
let unique = [];
let item = 1;
let uniqueCopy = [...unique]; // ...arr === 1,2,2...,5
console.log(uniqueCopy);
let uniqueCopyAddItem = [...unique, item]; //copiamos el array y agregamos el item al último
console.log(uniqueCopyAddItem);

//primera vuelta con unique inicializado en vacio []
console.log(unique);
console.log(unique.includes(item));
//reasignamos a unique como su copia agragando al ultimo item
console.log((unique = [...unique, item]));
//2da vuelta
item = 2;
console.log(unique);
console.log(unique.includes(item));
console.log((unique = [...unique, item]));
//3ra vuelta
item = 2;
console.log(unique);
console.log(unique.includes(item));
// si esta incluido no reasignamos devolvemos unique como esta
console.log(unique);
//4ta vuelta
item = 1;
console.log(unique);
console.log(unique.includes(item));
console.log(unique);
//5ta vuelta
item = 3;
console.log(unique);
console.log(unique.includes(item));
console.log((unique = [...unique, item]));
//6ta vuelta
item = 3;
console.log(unique);
console.log(unique.includes(item));
console.log(unique);
//última vuelta
item = 5;
console.log(unique);
console.log(unique.includes(item));
console.log((unique = [...unique, item]));



const uniques = arr.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);

console.log(uniques);
