/* 
Agenda telefónica

Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. 
Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

●	aniadirContacto(Contacto): Añade un contacto a la agenda, 
    sino la agenda no puede almacenar mas contactos indicar por pantalla.
●	existeContacto(Conctacto): indica si el contacto pasado existe o no.
●	listarContactos(): Lista toda la agenda
●	buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
●	eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
●	agendaLlena(): indica si la agenda está llena.
●	huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.

*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre} Telefono: ${this.telefono}`);
  }

  get obtenerNombre() {
    return this.nombre;
  }

  get obtenerTelefono() {
    return this.telefono;
  }

  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  set modificarTelefono(nuevoTelefono) {
    this.telefono = nuevoTelefono;
  }
}

class Agenda {
  constructor(tamanio) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  //si quiero cambiar tamañio usare el setter
  set modificarTamanio(cantidad) {
    this.tamanio = cantidad;
  }

  agregarContacto(contacto) {
    //verificar si el contacto existe
    if (this.existeContacto(contacto)) {
      console.log("El contacto existe, no se puede agregar");
    } else {
      //verificar si la agenda esta llena
      if (!this.agendaLlena()) {
        this.contactos.push(contacto);
        console.log("Contacto añadido");
        this.listarContactos();
      }
    }
  }

  existeContacto(contacto) {}

  agendaLlena() {}

  listarContactos() {}
}
