// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring. (developer mozilla)


let frase =  prompt('Ingrese una frase')
//console.log(frase);

//frase.lenght = devuelve la cantidad de caracteres
//frase.charAt(indice)

for (let i = 0; i < frase.length; i++) {
    
    const caracter = frase.charAt(i);
    switch (caracter) {
        case 'a':
           document.write(frase.substring(i,i + 1) + '<br>');
            break;
    
        case 'e':
           document.write(frase.substring(i,i + 1) + '<br>');
            break;
    
        case 'i':
           document.write(frase.substring(i,i + 1) + '<br>');
            break;
    
        case 'o':
           document.write(frase.substring(i,i + 1) + '<br>');
            break;
    
        case 'u':
           document.write(frase.substring(i,i + 1) + '<br>');
            break;
    
        default:
           console.log("no es vocal");
            break;
    }
}
