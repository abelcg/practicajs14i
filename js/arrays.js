//Arrays o arreglos

//arreglo vacio

let arreglo = [];

// inicializar array con constructor

let peliculas = new Array("El Padrino", "El exorcista");

console.log(peliculas);

// arreglo con elementos
 
let series = ['Juegos de Tronos', 8, "Caza de Dragones", 1, "Breaking Bad", 5, true];

console.log(series);

// length del arreglo de series/ contar elemantos del array
document.write("cantidad de series " + series.length);


//para acceder a un elemento del array
console.log(series[4])


//agrega al ultimo
series.push("Naruto")

console.log(series);

// saca el ultimo
series.pop();

console.log(series);

//agrega un elemento al inicio

series.unshift("Dragon Ball");

console.log(series);

//saca el primer elemento
series.shift();
console.log(series);

//Agrego un elemento en una posicion particular, 
//slice(posicion donde agrego el/los elementos, elementos a borrar del arreglo, elemento/s a agregar en esa posición)

series.splice(1, 0, "Los Sopranos")

console.log(series);

//En la posicion 1 elimino dos elementos incluyendo al de dicha posición  
series.splice(1, 2);

console.log(series);

//borra todos a partir del indice
series.splice(0)

console.log(series);