//while
/* 
while(condicion logica){

   codigo a ejecutar x veces
   
   variable que cambia la cond logica
}

*/

let contador = 2;

while (contador <= 20) {
  //codigo a ejecutar
  document.write("Elemento " + contador + "<br>");
  //contador = contador + 2;
  contador++
}


//do-while 

/* 
 do{
   codigo a ejecutar
   variable que cambia la concion logica
 }while(condicion logica)
*/

let cont = 50;

do {
    //codigo a ejecutar
    document.write('Contador ' + cont + '<br>');
  //  cont = cont - 1
    cont--
} while (cont >= 20);



// bucle for 

/* 
for(crear variable; cond log; incremental o decremental){
    //codigo a ejecutar
}
*/

for(let i = 1; i <= 20; i++) {
  //codigo a ejecutar tantas veces
  document.write('Estructura for ' + i + '<br>');
}

let palabras = 'tomate y manzanas';

console.log(palabras.length);

for(c = 0; c < palabras.length; c++){
    document.write('letras de palabras ' + palabras.charAt(c) + '<br>');
}