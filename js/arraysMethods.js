//Callbacks: son funciones que se pasan o envían como parámetros en una función
//función de 1er orden es una fincón que se puede mandar como parámetros en una función

let abecedarios = ['c', 'a', 'd', 'f', 'z', 'x', 'e', 'i', 'o', 'b']

let vocales = ['E', 'I', 'A', 'U', 'O' ]

let letras = ['E', 'i', 'o', 'A', 'u', 'a', 'e', 'U']

console.log(vocales.sort())
console.log(abecedarios.sort())
console.log(letras.sort())

let numeros = [37, 11, 2, 15, 26, 52, 48, 8, 100, 255]

//metodos mutables: son los que cambian al array original
//sort muta al arregle original

 console.log(numeros.sort(function (a, b) {
    return a-b
})) 

console.log(abecedarios.reverse())

//si ingresa una palabra por ejmplo hola --> aloh

let revertirPalabra = (word)=>{
    return word.split('').reverse().join('')
}
console.log(revertirPalabra('palabra'))


//metodo filter
//es mutable: modifica al array original 

/* let pares = numeros.filter((num)=>{
    return num % 2 == 0;
})

console.log(pares) */


let mayor10 = numeros.filter((num)=> num > 10)

console.log(mayor10)


//find 
//devuelve el primer elemento que cumple con la condicion o undefined

let alumnos = ['Juan', 'Pedro', 'Carla', 'Pablo', 'Maria', 'Juan Cruz', 'Juan']

let resutadoBusqueda = alumnos.find( alumno => alumno === 'Pablo')

console.log(resutadoBusqueda)


//metodo inmutable
//map --> devuelve un nuevo arreglo con los resultados de aplicar un llamado a la funcion (callback)
//a cada uno de elemnetos del array 

let numerosDubles = numeros.map(num => num*2)

//array original
console.log(numeros)
//nuevo array luego de mapear cada elemento con la funcion  para darme el doble da cada uno 
console.log(numerosDubles)

//map sirve para hacer una copia del array original

let alumnosCopia = alumnos.map(alumno => alumno)

console.log(alumnosCopia)
//console.log(alumnos)

//forEach --> no muta el arreglo original y no genera un nuevo array 
// Si quiero guardar / copiar en un nuevo array uso map si no uso forEach

alumnos.forEach((alumno) =>{
    let nombreMayus = alumno.toUpperCase();
    console.log(nombreMayus)
})


//Ejercicio: Filtrar de un arreglo de personas los nombres que contengan la letra 'm'

let personas = ['Joaquin', 'Abel', 'Mariano', 'Emmanuel', 'Mirta', 'Ambar', 'Horacio']

let nombresFiltrados = (letra)=>{
    let nombres =  personas.filter(nombre => nombre.toUpperCase().trim().includes(letra.toUpperCase().trim()))
    return nombres
}

console.log(nombresFiltrados(' m'))

//con este ejemplo vemos como impletar un buscador.
//trim() metodo de String que elimina espacios vacios al inicio y final de la cadena de caracteres


//reduce: metodo que me devuelve un valor resultado de aplicar a cada elemento un callback

let numbers = [1, 2, 5, 6]

let sum = numbers.reduce((resultado, actual)=> {
    return resultado + actual
}, 0)

console.log(sum)


//encontrar elementos unicos con reduce

const array = [18, 8, 9, 18, 18, 3, "4"];

console.log(array.indexOf(18))

const array2 = [1,2,3,5,1]

//podes clonar el array usando spread operator (...) 

//console.log([...array2, 118])

let uniqueArray = array2.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );

console.log(uniqueArray)

//encontrar unicos con filter

const array3 = [18, 8, 9, 18, 18, 3, "4"];

let uniqueArray4 = array.filter((item, index) => array3.indexOf(item) === index);

console.log(uniqueArray4)


//encontrar elemntos unicos de un arrya usando set

let dupeArray = [1, 1, 4, 5, 4, 4, 2, 1, 5];


let uniqueArray5 = Array.from(new Set(dupeArray));


let uniqueArray2 = [...new Set(dupeArray)];

console.log(uniqueArray5);

console.log(uniqueArray2);

