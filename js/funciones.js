// declarar una funcion

/* 
function nombreFuncion(){
    codigo a ejecutar
}
*/

/* 
function holaMundo(){
    
    console.log('hola mundo, como estas?')
}
 */
//invocar, ejecutar o llamar una funcion

//holaMundo()

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

//funciones anonimas: se declaran con variables


//scope de una funcion

let heroe = 'Batman'

function mostrarHeroe(){
   // let heroe = 'Superman'
    return `Bienvenido ${heroe}`
}

console.log(mostrarHeroe())

console.log(heroe)