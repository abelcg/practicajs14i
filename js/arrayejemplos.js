let series = ['Juegos de Tronos', "Caza de Dragones", "Breaking Bad"];

console.log(series);
//agrega al ultimo
series.push("Naruto")

console.log(series);
// saca el ultimo
series.pop();

console.log(series);
//agereaga un elemento al inicio
series.unshift("Dragon Ball");

console.log(series);
//saca el primer elemento
series.shift();
console.log(series);

series.splice(1, 0, "Los Sopranos", "Rick and Morty")

console.log(series);

series.splice(1, 2);

console.log(series);

//borra a partir del indice
series.splice(0)

console.log(series);