var hachiko = {
    nombre: `hachiko`,
    apellido: `Garcia`,
    altura: 1.76
}

var edwin = {
    nombre: `edwin`,
    apellido: `Garcia`,
    altura: 1.78
}

var juanes = {
    nombre: `juanes`,
    apellido: `peñuela`,
    altura: 1.60
}

var angie = {
    nombre: `angie`,
    apellido: `Garcia`,
    altura: 1.56
}

var jose = {
    nombre: `jose`,
    apellido: `osorio`,
    altura: 1.87
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

console.log(personasCms)