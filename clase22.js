class persona {
    constructor (nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
}
 

saludar(fn) {var {nombre,apellido} = this
    console.log(`hola me llamo ${nombre} ${apellido} `)
    if (fn){
        fn(nombre,apellido,false)
    }
}

soyAlto() {
    return this.altura > 1.8
}
}

 class Desarrollador extends persona {
     constructor(nombre,apellido,altura){ 
    super(nombre,apellido,altura)
    }
    
saludar(fn){var {nombre,apellido} = this
    console.log(`hola , me llamo ${nombre} ${apellido} y soy desarrollador`)
    if (fn){
        fn(nombre,apellido,true)
}
 }
}
 
 function responderSaludo(nombre,apellido,esDev){
     console.log(`Buen dia ${nombre} ${apellido}`)
     if(esDev) {
         console.log(`ah mira, no sabia que eras desarrollador`)
     }
 }

 var angie = new persona (`angie`, `Garcia`,1.77)
  var juanes = new persona (`juanes`, `peñuela`,1.65)
 var edwin = new persona (`edwin`, `Garcia`, 1.86)
  var jose = new Desarrollador (`jose`, `osorio`, 1.56)

  angie.saludar(responderSaludo)
 juanes.saludar(responderSaludo)
  edwin.saludar(responderSaludo)
  jose.saludar(responderSaludo)