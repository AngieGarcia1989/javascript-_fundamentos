var sacha = {
    nombre: "angie",
    apellido: "garcia",
    edad: 30,
    drone: true
}
var juan = {
    nombre: "juan",
    apellido: "peñuela",
    edad: 10,
    drone: true
}



if (persona.drone){
    console.log("piloto de drone")
}

const MAYORIA_DE_EDAD = 18

//const EsMayorDeEdad = function(persona){
//return persona.edad >= MAYORIA_DE_EDAD
//}

//const EsMayorDeEdad = ({ edad })=> edad >= MAYORIA_DE_EDAD

const EsMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona)
if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`)
} else {
    console.log(`${persona.nombre} es menor de edad`)
}


const EsMenorDeEdad = persona => persona.edad < MAYORIA_DE_EDAD




function permitiracceso(persona){  
if (!EsMayorDeEdad(persona)) {
    console.log("ACCESO DENEGADO")
} else console.log("ADELANTE")
}  