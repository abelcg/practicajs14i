let nombre = "Tony Stark"
let nroSerie = "123abc"
let precio = 5500
let version = "end-game"

//crear un objeto vacio de manera literal

let objVacio = {}

//crear un objeto de manera literal

let funkoIronMan = {
    //clave : valor -- key : value son las llamadas propiedades o atributos de un objeto
    nombre : "Tony Stark",
    nroSerie : "123abc",
    precio : 5500,
    version : "end-game",
    //metodos

    sinStock: function(){
        return false;
    },

    disponible(){
        return false;
    }
}

//llamar o invocar un método nombreObjeto.metodo()

console.log(funkoIronMan.disponible())


//mostrar el objeto en consola
console.log(funkoIronMan)

//mostrar el objeto en el documento
//document.write(funkoIronMan)

//mostrar una propiedad del objeto. Forma 1: nombreObjeto.propiedad

document.write("Producto FunkoIronMan<br>" + funkoIronMan.nombre)

//mostrar una propiedad del objeto. Forma 2: nombreObjeto['propiedad']

document.write("<br>Precio: " + funkoIronMan['precio'])

//si queremos utilizar un for..of para iterar el objeto --> nos dirá que el objeto no es iterable
// se puede usar en cambio un for..in

document.write('<h5> FunkoIronMan </h5>')

for(const prop in funkoIronMan){
   document.write(`<br> ${prop} : ${funkoIronMan[prop]}`)
}

//mostrar un objecto usando un bucle for tradicional 

const mostrarObjecto = ()=>{
    //usando el método keys del objeto obtengo un array con las claves del objeto
    let claves = Object.keys(funkoIronMan)
    console.log(claves);
    console.log(claves.length);

    document.write("<br><br>Funko Iron Man")
   
    for (let i=0; i<claves.length; i++){
        let clave = claves[i] //obtengo el nombre de c/u de las claves por cada vuelta
        let valor = funkoIronMan[clave]
        document.write(`<br> ${clave} : ${valor}`)
        //console.log(`${clave} : ${valor}`)
    }
}

mostrarObjecto()

//mostrar el objeto usando su arrays de keys con un for...of

let keys = Object.keys(funkoIronMan)

for(const key of keys){
    const value = funkoIronMan[key]
    console.log(key, value)
}

//mostrar solo los valores del objeto por medio del método values
// devuelve un array con los valores de mi objeto
console.log(Object.values(funkoIronMan))

//mostrar usando las keys y mapeando el array de keys

const mapObjt = Object.keys(funkoIronMan).map(key => {
    const value = funkoIronMan[key]
    console.log(key, value)
})


//mostrar el usando usando el método entries ---> que devuelve una array con los pares key value

Object.entries(funkoIronMan).map(entry =>{
    const [key, value] = entry
    console.log(key, value)
})



//modificar una propiedad
funkoIronMan.precio = 6000

funkoIronMan.version = "Iron Man 2"

mostrarObjecto()

//agregar una nueva propiedad al obj

funkoIronMan.tamaño = ['pequeño', 'mediano', 'grande']

mostrarObjecto()

//borrar una nueva propiedad del obj

delete funkoIronMan.version

mostrarObjecto()