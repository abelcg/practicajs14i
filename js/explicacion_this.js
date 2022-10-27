const auto = {
    marca: 'Ford',
    modelo: 'Focus',
    año: 2018,
    avanzar: function(){
        return 'moviendose hacia adelante'
       },
     retroceder(){
        return 'moviendose hacia atras'
     },
     bocina: ()=>{
        return 'bang bang'
     },
     mostrarMarcaModelo: function(){
       // console.log(this)
        return  `${this.marca}  ${this.modelo}`
     }
}

console.log(auto.mostrarMarcaModelo())


/* 
keyword this hace referencia al objeto actual. Sirve para obtener todo lo que tiene un objeto 
*/

const cuenta = {
    nroCuenta: '545646546546',
    saldo: 100,
    deposito(cantidad){

        this.saldo = this.saldo + cantidad
    }, 
    retiro(cantidad){
        return this.saldo = this.saldo - cantidad
    }
}
//puedo pasar parámetros a los metodos del objeto
cuenta.deposito(150)
cuenta.deposito(50)
cuenta.deposito(10)
console.log(cuenta.saldo)
cuenta.retiro(10)
cuenta.retiro(150)
cuenta.retiro(150)
