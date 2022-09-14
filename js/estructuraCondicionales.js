/* Escribe un programa de una sola 
línea que escriba en la pantalla el resultado de sumar 3 + 5. */
/* 

let numero = 3;
let numero2 = 5;

document.write(numero + numero2);

document.write("<br>")
document.write(3+5) */

/* 5.- Escribe un programa de tres líneas que pida un número, 
pida otro número y escriba el resultado de sumar estos dos números. */
/* 
let num = parseInt(prompt("Ingrese primer numero"));
let numero2 = parseInt(prompt("Ingrese segundos numero"));
document.write(num + numero2);
 */

//Estructuta condicionales

/* 
if(condicion pueder verdadera o falsa){
    se ejecuta esta parte de codigo si la condicion es verdadera
}
*/

/* let num = 8;
let num2 = 8; */
/* 
if (num == num2) {
    console.log("son iguales")
}
 */
/* if (num !== num2) {
    console.log("son iguales")
} else{
    console.log("son distintos")
} */

/* let edadPablo = 35;
let edadMarcos = 5;

if(edadPablo > edadMarcos){
    document.write("Pablo es mayor")
}else if(edadPablo < edadMarcos){
    document.write("Marcos es mayor")
} else {
    document.write("tienen la misma edad")
} */

let edadPablo = 5;
let edadMarcos = 45
let edadMaria = 15;

if(edadPablo < edadMarcos || edadPablo < edadMaria){
    document.write("Pablo es el menor de los tres")
} else if(edadMarcos < edadPablo || edadMarcos < edadMaria){
    document.write("Marcos es el menor de los tres")
} else {
    document.write("Maria es el menor de los tres")
}

// OR: Tengo dos conciones:  Solo 1  verdadera para que sea de resultado true
//AND: Ambas deben ser true para que de como resultado true
