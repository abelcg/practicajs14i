// declarar una funcion

/* 
function nombreFuncion(){
    codigo a ejecutar
}
*/


let holaMundo = ()=>{
    
    console.log('hola mundo, como estas?')
}

//invocar, ejecutar o llamar una funcion
holaMundo()


//funciones con parametros 
/* 
function nombreFuncion(parametro 1, parametro 2){
  codigo a ejecutar
}
*/

function saludar(nombre, apellido){
   
    console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`)
}

saludar('Abel', 'Cordoba')


//ejemplo de funcion con parametros

function sumarValores(valor1, valor2){
   if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
    console.warn('debe ingresar un valor numerico')
   } else{
       return (`${valor1} + ${valor2} = ${valor1 + valor2}`)
   }
}

//console.log(sumarValores(8,4))

console.log(sumarValores('hola', 's'))

//console.log(sumarValores('hola',4))


let calculadora = (valor1, valor2, operador = '+') => {
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
        alert('debe ingresar un valor numerico')
       }
    switch (operador) {
        case '+':
            return (`${valor1} + ${valor2} = ${valor1 + valor2}`)
    
        case '-':
            return (`${valor1} - ${valor2} = ${valor1 - valor2}`)
    
        case '*':
            return (`${valor1} * ${valor2} = ${valor1 * valor2}`)
    
        case '/':
            return (`${valor1} / ${valor2} = ${valor1 / valor2}`)
    
        default:
            return 'La operacion ingresada no es valida'
    }
   
}


calculadora(4,5,'*')
 

// funciones que nos retornan un valor

function convertirDolaresPesos(dolares){
    let pesos = dolares * 280
    //siempre el return en ultima linea de mi funcion
    return pesos
}

let precioCeludar = convertirDolaresPesos(100)

console.log(`el precio del celular es ${precioCeludar}`)

console.log('el precio de la play 5 es ' + convertirDolaresPesos(600))


//funciones flecha o arrow function

/* 
  let nombredelafuncion = ()=>{

      //codigo a ejecutar
  }
*/

/* 
let sumar = (num1, num2)=>{
return (num1+num2)
} */

let sumar = (num1, num2)=> (num1+num2)


console.log(sumar(2,5))

//scope de una funcion

let heroe = 'Batman'

function mostrarHeroe(){
   // let heroe = 'Superman'
    return `Bienvenido ${heroe}`

}

console.log(mostrarHeroe())

console.log(heroe)


//funciones anonimas: se declaran como constantes

const square = function (num){
    return Math.pow(num, 2);
}

let sumSquare = (num1, num2)=>{
    return square(num1) + square(num2);
}

console.log(sumSquare(2,5))


