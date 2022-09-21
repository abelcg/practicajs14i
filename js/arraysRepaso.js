//declaramos array usando su constructor

let array = new Array(1, 2, 3, 4)

console.log(array)

//declaro un array vacio usando su constructor

let array2 = new Array()

console.log(array2)

//definir un arreglo de manera literal

let array3 = [1,2,3]

console.log(array3)

//definir un arreglo vacio de forma literal

let array4 = [];

//mostrar un elemento del array en una determina posicion
console.log(array3[5])

//cantidad de elemento del array

console.log(array3.length)

//mostrar el ultimo el elemento del array

console.log(array3[array3.length-1])

//reasignar el valor a un determinado elemento del array

array3[0] = 4

console.log(array3)

array3[5] = 'hola'

console.log(array3)

console.log(array3[4])

console.log(array3.length)

//agregar elementos al ultimo

array3.push('chau')

console.log(array3)

//sacar o eliminar el ultimo elemento del array

array3.pop()

console.log(array3)

//agregar elementos en la primer posicion 

array3.unshift('lunes')

console.log(array3)

//sacar o eliminar de la primer posicion

array3.shift()

console.log(array3)

//agregar elementos en una determina posicion

array3.splice(3, 0, 5)

console.log(array3)

//elminar elementos en una determina posicion

array3.splice(4, 2)

console.log(array3)

//eliminar todos los elementos desde una determina posicion
array3.splice(1)

console.log(array3)

array3.splice(1, 0 ,3,2,1)

console.log(array3)

//seleccionar elementos de un array

console.log(array3.slice(1,4))

// seleccionar letras de una palabra
let word = 'palabra'

console.log(word.substring(1,4))

//recorrer y/o mostrar los elementos del array

for (let i = 0; i < array3.length; i++){
    console.log(array3[i])
}

//recorrer y/o mostrar los elementos usando for..of

for(let elementos of array3){
    console.log(elementos)
}

//recorrer un string usanndo for..of

for(let char of word){
    console.log(char)
}

//operador spread 

console.log(...array3)

console.log(...word)


// dado un arreglo de edades encontrar el menor 

let edades = ['45', '12', '88', '41']

console.log(Math.min(...edades))



//convertir string a un array 
console.log(word.split(''))

let palabra = 'hola';

console.log(Array.from(palabra))

//convertir el array en un string
console.log(array.join(','))

//convertir el array a un string
let word2 = ['mundo', "hola"]

console.log(String(word2))

//concatenar o unir dos array

console.log(array3.concat(edades))

//conocer el indice de un elemento del array

let arrayWord = word.split('')

console.log(arrayWord.indexOf('l'))

console.log(arrayWord.indexOf(5))

//saber si esta incluido como elemento de un array

console.log(arrayWord.includes(5))

console.log(arrayWord.includes('a'))

/* 
Problema: pedir por pantalla el nombre de 5 alumnos de un curso, usando bucle while.
Guardarlos en un arreglo llamado alumnos
mostrar por consola por cada uno un saludo de bienvenida 
*/