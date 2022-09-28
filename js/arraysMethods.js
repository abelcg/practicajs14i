//Callbacks: son funciones que se pasan o envían como parámetros en una función
//función de 1er orden es una fincón que se puede mandar como parámetros en una función

let abecedarios = ['c', 'a', 'd', 'f', 'z', 'x', 'e', 'i', 'o', 'b']

console.log(abecedarios.sort())

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

let pares = numeros.filter((num)=>{
    return num % 2 == 0;
})

console.log(pares)