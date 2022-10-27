//clases son como moldes de objetos. Creamos / instanciamos objetos a partir de las clases
/* 

function Person(){
    this.name = "",
    this.lastName = "",
    this.age = ""
}

esto es equivalente  a escribir con la notación class
*/

//Es importante que el nombre de la clase va la primera letra con mayúscula

class Person {
  constructor(nombre, apellido, edad, dni, email, tel = 55555) {
    //es la funcion constructor. Es el 1er metodo que se ejecuta
    (this.name = nombre),
      (this.lastName = apellido),
      (this.age = edad),
      (this.dni = dni),
      (this.email = email),
      (this.tel = tel);
  }
  //los metodos se definen fuera del constructor
  greet() {
    return `Hello Im ${this.name} ${this.lastName}`;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                         Name: ${this.name}
                        <br> Last Name: ${this.lastName}
                        <br> Age: ${this.age}
                        <br> Dni: ${this.dni}
                        <br> Email: ${this.email}
                        <br> Tel: ${this.tel}
        `);
  }
  //propiedades conmutadas o getters y setters
  //get sirven para mostrar una propiedad del objeto

  get showName() {
    return this.name;
  }

  get showLastName() {
    return this.lastName;
  }

  // continuamos con los demás getters
  //para modificar usaremos los setters

  set modificarNombre(nuevoNombre) {
    this.name = nuevoNombre;
  }

  set modificarApellido(nuevoApellido) {
    this.lastName = nuevoApellido;
  }
}

//instaciar un objeto se usa new seguido de la clase y
// entre los parentesis iran los parametros que toma el constructor
const Abel = new Person(
  "Abel",
  "Cordoba",
  35,
  32478445,
  "abel@gmail.com",
  48745454
);
const Pedro = new Person(
  "Pedro",
  "Picapiedra",
  88,
  4855455,
  "pedro@gmail.com",
  5152121212
);
const Marcos = new Person("Marcos", "Gomez", 15, 485545555, "marcos@gmail.com");

const arr = new Array(1, false, {});

/* let nombre = prompt('ingrese un nombre')
let apellido = prompt('Ingrese apellido')
const ana = new Person(nombre, apellido) */

//console.log(ana.greet());

console.log(Abel);
console.log(Pedro);
console.log(Marcos);
console.log(arr);

console.log(Abel.greet());
console.log(Pedro.greet());
console.log(Marcos.greet());

Abel.showData();

// es una mala práctica re asignar el valor a una propiedad si el objecto se crea por medio de una clase
//Abel.age = 45;

Abel.showData();

//utilzando las propiedad conmutada get

document.write("<br><br>" + Abel.showName + " " + Abel.showLastName);

//utilzando las propiedad conmutada set

Pedro.modificarNombre = "Pablo";
Pedro.modificarApellido = "Marmol";

Pedro.showData();

//Herencia

class Alumno extends Person {
  //constructor toma todos los parametros de su clase padre agregando sus propios parametros
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    curso,
    comision,
    cuotaAlDia
  ) {
    // invocar al constructor de la clase padre
    super(nombre, apellido, edad, dni, email, tel);
    (this.curso = curso),
      (this.comision = comision),
      (this.cuotaAlDia = cuotaAlDia);
  }

  get mostrarCurso() {
    return this.curso;
  }

  get mostrarComision() {
    return this.comision;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                         Name: ${this.name}
                        <br> Last Name: ${this.lastName}
                        <br> Age: ${this.age}
                        <br> Email: ${this.email}
                        <br> curso: ${this.curso}
                        <br> comision: ${this.comision}
        `);
  }
}

class Tutor extends Person {
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    comision,
    legajo,
    antiguedad
  ) {
    super(nombre, apellido, edad, dni, email, tel);
    (this.comision = comision),
      (this.legajo = legajo),
      (this.antiguedad = antiguedad);
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                             Name: ${this.name}
                            <br> Last Name: ${this.lastName}
                            <br> Age: ${this.age}
                            <br> dni: ${this.dni}
                            <br> Email: ${this.email}
                            <br> comision: ${this.comision}
                            <br> legajo: ${this.legajo}
                            <br> antiguedad: ${this.antiguedad}
            `);
  }
}

//crear o instanciar un alumno

let Delfina = new Alumno(
  "Delfina",
  "Robles",
  22,
  45454555,
  "delfi@gamil.com",
  384511515,
  "Fullstack",
  "14i",
  true
);


let agustin = new Tutor(
    "Agustin",
    "Gigli",
    18,
    32445755,
    "giglimagustin@gmail.com",
    215154545,
  "14i",
  5454544,
  5
  );
  
// Polimorfismo: mismo metodo con diferencia resulta o acción
  Delfina.showData();
  agustin.showData();

  