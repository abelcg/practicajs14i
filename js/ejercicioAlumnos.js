/* 
Problema: pedir por pantalla el nombre de 5 alumnos de un curso, usando bucle while.
Guardarlos en un arreglo llamado alumnos
mostrar por consola por cada uno un saludo de bienvenida 
*/

let alumnos = [];

while (alumnos.length < 5) {
    //guardar los alumnos en el array de alumnos
    alumnos.push(prompt('ingrese nombre de alumno'))
}

document.write(alumnos)
///console.log(alumnos.length) 

for(let i = 0; i < alumnos.length; i++){
  console.log(`Hola ${alumnos[i]} bienvenido al curso`)
}