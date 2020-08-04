var sacha = {
    nombre: "angie",
    apellido: "garcia",
    edad: 30,
    drone: true
}
if (persona.drone){
    console.log("piloto de drone")
}

const MAYORIA_DE_EDAD = 18

function EsMayorDeEdad (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona)
if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`)
} else {
    console.log(`${persona.nombre} es menor de edad`)
}