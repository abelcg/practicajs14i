/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/

/* let edad1 = parseInt(prompt('Ingrese la primer edad'));
let nombre1 = prompt('Ingrese el primer nombre');
let edad2 = parseInt(prompt('Ingrese la segunda edad'));
let nombre2 = prompt('Ingrese el segundo nombre');
let edad3 = parseInt(prompt('Ingrese la tercer edad'));
let nombre3 = prompt('Ingrese el tercer nombre');

//Función max() devuelve el mayor de los argumentos pasados.
let maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
} */

let edad1 = +prompt("Ingrese la primer edad");
let nombre1 = prompt('Ingrese el primer nombre');
let edad2 = +prompt("Ingrese la segunda edad");
let nombre2 = +prompt('Ingrese el segundo nombre');
let edad3 = +prompt("Ingrese la tercer edad");
let nombre3 = prompt('Ingrese el tercer nombre');

let maximo = Math.max(edad1, edad2, edad3);

console.log(maximo);

switch (maximo) {
  case edad1:
    document.write(`El mayor es:  ${nombre1}`);
    break;
  case edad2:
    document.write(`El mayor es:  ${nombre2}`);
    break;
  case edad3:
    document.write(`El mayor es:  ${nombre3}`);
    break;
  default:
    alert("ingrese una edad y nombre");
}
