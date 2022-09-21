/* 
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

let script = confirm('Ingrese una cadena de texto y presione cancelar para salir');
   let frase = '';
   let cadenaConcatenada = ''
  while (script){  
    frase = prompt('ingrese texto');
    if(frase !== null){
        cadenaConcatenada = cadenaConcatenada + frase + '-'
    } else {
        script = false
    }
}
document.write(cadenaConcatenada);

/* let cadena = "";
let cadenanueva = "";
while (confirm("Desea ingresar una palabra?") === true) {
  cadena = prompt("Ingrese una palabra");
  if (cadena !== null){
      cadenanueva = cadenanueva + cadena + "-";
  }
}
document.write(cadenanueva); */
