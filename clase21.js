class persona {
    constructor (nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
}
 

saludar() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} metros`)
}

soyAlto() {
    return this.altura > 1.8
}
}

 class Desarrollador extends persona {
     constructor(nombre,apellido,altura){ 
    super(nombre,apellido,altura)
    }
saludar(){
    console.log(`hola , me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

}
 }
 

//persona.prototype.saludar = function () {
    //console.log(`hola me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} metros`)
   // while (persona.altura > 1.80) {
        
            //console.log(`me llamo ${this.nombre} y  soy alto`)
        //if (this.altura > 1.80){
    //console.log(`me llamo ${this.nombre} y  soy alto`)

//}
//}
// var angie = new persona (`angie`, `Garcia`,1.77)
// var juanes = new persona (`juanes`, `peñuela`,1.65)
// var edwin = new persona (`edwin`, `Garcia`, 1.86)
// var jose = new persona (`jose`, `osorio`, 1.56)
// angie.saludar()
// juanes.saludar()
// edwin.saludar()
// jose.saludar()