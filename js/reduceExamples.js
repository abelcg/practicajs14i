//Encontrar el elemento más grande de un arreglo iterando una sola vez

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el);

//si no agregamos el parámetro inicial value => acc será el 1er elemnto del array
// y el 2do elemento será desde donde empieza a iterar, es decir el = 2do elemento

const result = getBiggest([50, -1500, 1000, 0, 1, 54]);

console.log(result);



