//switch reemplaza a los if else cuando teens varios de estos
// Cauando tenemos condiciones a evaluar

/* 
switch(codicion){
    case '1': 
            //codigo a ejecutar 
    break
    case '2':
            //codigo a ejecutar }
    break
    case "otros":
             //codigo a ejecutar   
    break
    .... 
    default
         //opcion por defecto
}  

*/

let estaciones = prompt(
  "Ingrese el numero correspondiente a la estacion del año: 1.verano, 2.otoño, 3.invierno, 4.primavera"
);

switch (estaciones.toLowerCase()) {
  case "1":
  case "verano":
    document.write("Usted eligio la estacion verano");
    break;
  case "2":
  case "otoño":
    document.write("Usted eligio la estacion otoño");
    break;
  case "3":
  case "invierno":
    document.write("Usted eligio la estacion invierno");
    break;
  case "4":
  case "primavera":
    document.write("Usted eligio la estacion primavera");
    break;
  default:
    alert("Ingreso una opcion invalida");
    break;
}
