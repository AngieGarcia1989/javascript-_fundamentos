var hachiko = {
    nombre: `hachiko`,
    apellido: `Garcia`,
    altura: 1.76,
    cantidadDeLibros:50
}

var edwin = {
    nombre: `edwin`,
    apellido: `Garcia`,
    altura: 1.78,
    cantidadDeLibros:30
}

var juanes = {
    nombre: `juanes`,
    apellido: `peñuela`,
    altura: 1.60,
    cantidadDeLibros:50
}

var angie = {
    nombre: `angie`,
    apellido: `Garcia`,
    altura: 1.56,
    cantidadDeLibros:24
}

var jose = {
    nombre: `jose`,
    apellido: `osorio`,
    altura: 1.87,
    cantidadDeLibros:59
}

const esAlta = persona => persona.altura > 1.8
const esBaja = persona => persona.altura < 1.6
var personas = [hachiko,edwin,juanes,angie,jose]


var personasAltas = personas.filter(esAlta)
//var personasAltas = personas.filter(function (persona){
  //  return persona.altura > 1.8
//})

//console.log (personasAltas)

var personasBajas = personas.filter(esBaja)
//console.log (personasBajas)

const pasarAlturaACms =persona =>{
   // personasBajas.altura = persona.altura * 100
   //persona.altura *= 100
  // return persona de esta manera cambia el array directamente pero de la siguiente manera hace otro objeto con los centimetros sin dañar o pisar el objeto original
  return {
      ...persona,
      altura: persona.altura * 100
  }
}
var personasCms = personas.map(pasarAlturaACms)

//console.log(personasCms)
//para reducir el valor de un array puede escribirse asi, en caso de que queramos ver el total de la cantidad de libros de los objetos 
//var acum = 0 

//for (var i = 0 ; i< personas.length; i++){
  //  acum = acum + personas[i].cantidadDeLibros
//}
// o de esta manera queda mas simplificado 

const reducer = (acum, { cantidadDeLibros}) => acum + cantidadDeLibros
var totalDeLibros = personas.reduce(reducer,0)
console.log(`En total todos tienen ${totalDeLibros} libros`)