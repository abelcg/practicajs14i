let letras = ['E', 'i', 'o', 'A', 'u', 'a', 'e', 'U']
let numeros = [37, 11, 2, 15, 26, 52, 48, 8, 100, 255]

 function compareLetters(a, b) {
    // paso 1 
    let charCode1 = a.toLowerCase();
    let charCode2 = b.toLowerCase();
   
    //paso 2
    //supongamos U = 85 > E = 69 ---> INTERCAMBIAR
    if (charCode1 > charCode2) return 1;
    //supongamos i = 105 < o = 111 ---> NO INTERCAMBIAR
    if (charCode1 < charCode2) return -1;
    //supongamos i = 105 = i = 105 ---> NO HACE NADA
    return 0;
} 


function compareLetters(a, b) {
    // 1000 > 500 
    if(a > b) return 99; //INTERCAMBIAR
    if(a < b) return -68; //NO INTERCAMBIAR
    // a = b no hace nada
    return 0;
}


//a = 20 y b = 50 si hago al resta me da un numero -
//a = 1000 y b = 500 si hago al resta me da un numero +
//a = 200 y b= 200 la resta me da 0

function compareLetters(a, b) {
   return a-b;
}